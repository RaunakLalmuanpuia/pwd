<?php

namespace App\Http\Controllers;

use App\Models\Applications;
use App\Models\Transaction;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use paytm\paytmchecksum\PaytmChecksum;

class TransactionController extends Controller
{
    //
    public function index(Request $request)
    {

        $search = $request->get('search');

        $transaction =Transaction::query()
                ->when($search, fn(Builder $q) => $q->orWhere('order_id', 'LIKE', "$search%")
                    ->orWhere('transaction_id', 'LIKE', "$search%"))
                ->latest()
                ->simplePaginate();

        return Inertia::render('Transactions/List',[
            'transactions' => $transaction,
            'search' => $search,
        ]);

    }

    public function detail(Request $request,string $order_id)
    {

        return inertia('Transactions/Detail', [
            'transactions' => Transaction::query()->with(['reference.applicant.user.address','reference.jobDetail', ])->where('order_id', $order_id)->first(),
        ]);
    }
    public function checkStatus(Request $request,string $order_id)
    {
//        dd($order_id);
        $paytmParams = array();
        /* body parameters */
        $paytmParams["body"] = array(
            "mid" => env('MERCHANT_ID'),
            "orderId" => $order_id,
        );

        $checksum = PaytmChecksum::generateSignature(json_encode($paytmParams["body"], JSON_UNESCAPED_SLASHES), env('MERCHANT_KEY'));

        $paytmParams["head"] = array(
            "signature" => $checksum
        );
        /* prepare JSON string for request */
        $post_data = json_encode($paytmParams, JSON_UNESCAPED_SLASHES);

//        /* for Staging */
//        $testUrl = "https://securegw-stage.paytm.in/v3/order/status";
//        /* for Production */
//        $url = "https://securegw.paytm.in/v3/order/status";

        /* for Staging */
        $testUrl = "https://securestage.paytmpayments.com/v3/order/status";

        /* for Production */
         $url = "https://secure.paytmpayments.com/v3/order/status";


        $response=Http::timeout(20)->post(env('APP_ENV')=='local'?$testUrl:$url, $paytmParams);
        $order=Transaction::query()->where('order_id', $order_id)->first();

        $data= json_decode($response->body(),true);


        return [
            'body' => $data['body'],
            'reference' => $order?->reference->load(['applicant.user.address','jobDetail.department']),
        ];
    }

    public function syncTransaction(Request $request,string $order_id)
    {

        $paytmParams = array();
        /* body parameters */
        $paytmParams["body"] = array(
            "mid" => env('MERCHANT_ID'),
            "orderId" => $order_id,
        );

        $checksum = PaytmChecksum::generateSignature(json_encode($paytmParams["body"], JSON_UNESCAPED_SLASHES), env('MERCHANT_KEY'));

        $paytmParams["head"] = array(
            "signature" => $checksum
        );
        /* prepare JSON string for request */
        $post_data = json_encode($paytmParams, JSON_UNESCAPED_SLASHES);

//        /* for Staging */
//        $testUrl = "https://securegw-stage.paytm.in/v3/order/status";
//        /* for Production */
//        $url = "https://securegw.paytm.in/v3/order/status";

        /* for Staging */
        $testUrl = "https://securestage.paytmpayments.com/v3/order/status";

        /* for Production */
        $url = "https://secure.paytmpayments.com/v3/order/status";

        $order=Transaction::query()->where('order_id', $order_id)->first();

        if ($order->status == 'TXN_SUCCESS' || $order->status == 'TXN_FAILURE') {
            abort(500, 'Payment is already processed');
        }

        $response=Http::timeout(20)->post(env('APP_ENV')=='local'?$testUrl:$url, $paytmParams);
        $data= json_decode($response->body(),true);

        info('Transaction detail');
        info($data);

        $result=$data['body']['resultInfo']['resultStatus'];
        $transaction = Transaction::query()->where('order_id', $order_id)->first();
        if ($result==='TXN_SUCCESS') {
            $transaction=DB::transaction(function () use ($transaction, $order_id) {
                $transaction->status ='TXN_SUCCESS';
                $transaction->save();

                $application = $transaction->reference()->first();
                $application->status = 'pending';
                $application->application_id = $this->generateUniqueApplicationId();
                $application->save();
                return $transaction;
            });
        }
        if ($result === 'TXN_FAILURE') {
            $transaction->status ='TXN_FAILURE';
            $transaction->save();
        }

        return [
            'result' => $data,
            'transaction' =>$transaction,
            'application' => $transaction->reference()->first(),
        ];
    }

    private function generateUniqueApplicationId()
    {
        do {
            // Generate a random unique string (you can customize the format)
            $uniqueId = 'APP-' . strtoupper(uniqid());
        } while (Applications::where('application_id', $uniqueId)->exists()); // Ensure it’s unique

        return $uniqueId;
    }
}
