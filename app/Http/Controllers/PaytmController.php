<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\JobDetail;
use App\Models\Transaction;

use App\Utils\ApplicationStatus;
use App\Utils\PaymentStatus;
use App\Utils\SmsManager;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use paytm\paytmchecksum\PaytmChecksum;

class PaytmController extends Controller
{
    //
    const TEST_URL = 'https://securegw-stage.paytm.in/theia/api/v1';
    const BASE_URL = 'https://securegw-stage.paytm.in/theia/api/v1';

    public function initiate(Request $request){

        $this->validate($request, [
            'job_ids' => [Rule::exists('job_details', 'id')],
            'application_id' => [Rule::exists('applications', 'id')]
        ]);
        $selectedJobIds = $request->get('job_ids');
        $application = Applications::query()->find($request->get('application_id'));
        $applicant = $application->applicant()->first();

        $appliedJobs = JobDetail::query()->findMany($selectedJobIds);
        $amount = ($applicant?->category==='General') ? 200:150;

        $orderId =  'REC' . now()->timestamp;

        $paytmParams["body"] = [
            "requestType" => "Payment",
            "mid" => env('MERCHANT_ID', 'Resell00448805757124'),
            "websiteName" => "DEFAULT",
            "orderId" => $orderId,
//            "callbackUrl" => "http://localhost:8000/paytm/response",
            "callbackUrl" => env('APP_URL') . "/paytm/response",
            "txnAmount" => [
                "value" => $amount,
                "currency" => 'INR',
            ],
            "userInfo" => [
                "custId" => $applicant?->id || 'NA',
                "mobile" => $applicant?->mobile || 'NA',
                "email" => "NA",
                "firstName" => $applicant?->name || 'NA',
                "lastName" => '',
            ],
        ];
        $checksum = PaytmChecksum::generateSignature(json_encode($paytmParams['body']), env('MERCHANT_KEY'));

        $paytmParams["head"] = array(
            "signature" => $checksum,
            "requestTimestamp" => Carbon::now()->timestamp,
            "channelId" => 'WEB'
        );
//        $url = env('APP_DEBUG')? "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=" . env('MERCHANT_ID')
//            . "&orderId=" . $orderId
//            :"https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=" . env('MERCHANT_ID') . "&orderId=" . $orderId;
        $url =   "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=" . env('MERCHANT_ID') . "&orderId=" . $orderId;
//
        $response = Http::withHeaders([
            'Content-Type' => 'application/json'
        ])->post($url, $paytmParams);

        abort_if($response->status() !== 200, 500, 'Something went wrong with payment 😪, Please try again later');

        $result = json_decode($response->body(), true);
        info($result);
        $head = $result['head'];
        $body = $result['body'];
        $resultInfo = $body['resultInfo'];


        if ($resultInfo['resultStatus'] != 'S')
            throw new \Exception($resultInfo['resultMsg'], 500);

        $transaction = Transaction::query()->updateOrCreate([
            'reference_id' => $application->id,
            'reference_type' => Applications::class
        ], [
            'order_id' => $orderId,
            'voucher_date' => Carbon::now(),
            'amount' => $amount,
            'status' => 'Draft',
            'reference_id' => $application->id,
            'reference_type' => Applications::class
        ]);
        return response()->json([
            'token' => $body['txnToken'],
            'order_id' => $orderId,
            'amount' => $amount,
            "checksum" => $checksum,
            'jobs' => $appliedJobs,

        ], 200);
    }

    public function handlePaymentResponse(Request $request){
//        dd($request);
        $paytmParams = array();
        $paytmChecksum = '';
        foreach ($request->all() as $key => $value) {
            if ($key == "CHECKSUMHASH") {
                $paytmChecksum = $value;
            } else {
                $paytmParams[$key] = $value;
            }
        }

        $transaction = Transaction::query()->where('order_id', $paytmParams['ORDERID'])->first();
        $transaction->transaction_id = $paytmParams['TXNID'];
        $transaction->voucher_date = $paytmParams['TXNDATE'];
        $transaction->amount = $paytmParams['TXNAMOUNT'];
        $application = $transaction->reference()->first();

//        dd($application);
        $jobDetail = JobDetail::find($application->job_details_id);

        if ($paytmParams['STATUS'] === 'TXN_SUCCESS') {
            $isValidChecksum = PaytmChecksum::verifySignature($paytmParams, env('MERCHANT_KEY', 'u5Sm%L7GKl9FL9EK'), $paytmChecksum);
            if (!$isValidChecksum) {
                abort(500, 'Something went wrong');
            }

            DB::transaction(function () use ($application, $transaction, $jobDetail) {
                $application->status = 'Pending';
                $application->submitted_at = Carbon::now();
                $application->application_id = $this->generateUniqueApplicationId($jobDetail);
                $application->save();


                $transaction->status = 'TXN_SUCCESS';
                $transaction->save();
            });

//            $this->smsManager->sendMessage(SmsManager::SUBMIT_APPLICATION,mobile: $application->applicant?->mobile,regn_no:$application->regn_no );

//            return redirect(env('APP_URL') . "/admin/payment/${paytmParams['ORDERID']}");
//            return redirect()->route('payment-success')->with(['success', 'Application submitted successfully.', 'order_id' => $paytmParams['ORDERID']]);
            return redirect()->route('payment-success', [$paytmParams['ORDERID']])->with([
                'success' => 'Application submitted successfully.',
                'order_id' => $paytmParams['ORDERID'], // Ensure this key matches
            ]);

        }

        $transaction->status = $paytmParams['STATUS'];
        $transaction->save();

//        return redirect(env('APP_URL') . "/admin/payment/${paytmParams['ORDERID']}");
        return redirect()->route('payment-success', [$paytmParams['ORDERID']])->with('error', 'Error With payments.');

    }

    public function success($orderId)
    {
//        dd($orderId);
        return Inertia::render('Applicant/Payment/Success', [
            'order_id' => $orderId, // Pass order_id explicitly
        ]);
    }


//    private function generateUniqueApplicationId()
//    {
//        do {
//            // Generate a random unique string (you can customize the format)
//            $uniqueId = 'APP-' . strtoupper(uniqid());
//        } while (Applications::where('application_id', $uniqueId)->exists()); // Ensure it’s unique
//
//        return $uniqueId;
//    }
    private function generateUniqueApplicationId($jobDetail)
    {
        // Get the latest application record for the specific jobDetail
        $latestApplication = Applications::query()
            ->where('job_details_id', $jobDetail->id) // Assuming job_id is linked to the JobDetail
            ->orderBy('created_at', 'desc')
            ->first();

        // Get the current highest sequence number or set to 1 if none exists
        $sequenceNumber = $latestApplication ? (int) substr($latestApplication->application_id, -5) + 1 : 1;

        // Determine the padding length based on the sequence number
        $paddingLength = $sequenceNumber > 9999 ? 5 : 4;

        // Format the application ID as job code + padded sequence number (4 or 5 digits)
        $applicationId = $jobDetail->code . str_pad($sequenceNumber, $paddingLength, '0', STR_PAD_LEFT);

        return $applicationId;
    }


}
