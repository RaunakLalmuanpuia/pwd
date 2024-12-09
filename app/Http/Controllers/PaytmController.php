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
        $checksum = PaytmChecksum::generateSignature(json_encode($paytmParams['body']), env('MERCHANT_KEY',));

        $paytmParams["head"] = array(
            "signature" => $checksum,
            "requestTimestamp" => Carbon::now()->timestamp,
            "channelId" => 'WEB'
        );
        $url = env('APP_DEBUG')? "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=" . env('MERCHANT_ID')
            . "&orderId=" . $orderId
            :"https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=" . env('MERCHANT_ID') . "&orderId=" . $orderId;
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


        if ($paytmParams['STATUS'] === 'TXN_SUCCESS') {
            $isValidChecksum = PaytmChecksum::verifySignature($paytmParams, env('MERCHANT_KEY', 'u5Sm%L7GKl9FL9EK'), $paytmChecksum);
            if (!$isValidChecksum) {
                abort(500, 'Something went wrong');
            }

            DB::transaction(function () use ($application, $transaction) {
                $application->status = 'Pending';
                $application->save();


                $transaction->status = 'TXN_SUCCESS';
                $transaction->save();
            });

//            $this->smsManager->sendMessage(SmsManager::SUBMIT_APPLICATION,mobile: $application->applicant?->mobile,regn_no:$application->regn_no );

//            return redirect(env('APP_URL') . "/admin/payment/${paytmParams['ORDERID']}");
            return redirect()->route('dashboard.citizen')->with('success', 'Application submitted successfully.');
        }
        $transaction->status = $paytmParams['STATUS'];
        $transaction->save();

//        return redirect(env('APP_URL') . "/admin/payment/${paytmParams['ORDERID']}");
        return redirect()->route('dashboard.citizen')->with('error', 'Application submitted unsuccessfully.');


    }

}
