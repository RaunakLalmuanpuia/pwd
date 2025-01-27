<?php
namespace App\Utils;


use App\Models\Applicant;
use App\Models\OneTimePassword;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use function Symfony\Component\String\s;


class SmsManager{

    const SUBMIT_APPLICATION = '1407164818811121471';
    const APPROVED_APPLICATION = '1407164818831329898';
    const REJECTED_APPLICATION = '1407164818825439640';
    const DOWNLOAD_TEST_CARD = '1407164818871921626';
    const QUALIFIED_PHYSICAL = '1407164818892653512';
    const DOWNLOAD_ADMIT_CARD = '1407164818934290843';
    const NOTIFY_INTERVIEW = '1407164818955877175';
    private string $msg;
    private string $mobile;
    private $msg_type;


    public function send()
    {
         $response=Http::withHeaders([
             'Authorization' => "Bearer " . env('SMS_TOKEN'),
         ])->get("https://sms.msegs.in/api/send-sms",[
             'template_id' => $this->msg_type,
             'message' => $this->msg,
             'recipient'=>$this->mobile
         ]);
         info("SMS response ".$response->body());
    }
    public function setData($msg_type,string $mobile,string $regn_no,$applicant_name='Dear Applicant',string $var=null)
    {
        $appUrl = env('APP_URL');
        switch ($msg_type) {
            case self::SUBMIT_APPLICATION:
                $this->msg = "Your application $regn_no has been SUBMITTED successfully";
                break;
            case self::APPROVED_APPLICATION:
                $this->msg = "Your application $regn_no has been APPROVED for ${var}";
                break;
            case self::REJECTED_APPLICATION:
                $this->msg = "Your application $regn_no has been REJECTED, Reason for rejection can be found at $appUrl";
                break;
//            case self::DOWNLOAD_TEST_CARD:
//                $this->msg = "Your application $regn_no has physical test scheduled at ${var} . Download your Physical Test Card at $appUrl";
//                break;
//            case self::QUALIFIED_PHYSICAL:
//                $this->msg = "$applicant_name , Congratulations, you have successfully cleared your Physical Test evaluation.";
//                break;
            case self::DOWNLOAD_ADMIT_CARD:
                $this->msg = "Written Exam scheduled for application $regn_no is now available. Download your Admit Card at $appUrl";
                break;
//            case self::NOTIFY_INTERVIEW:
//                $this->msg = "$applicant_name , your Interview schedule is now available at $appUrl";
//                break;

        }
        $this->mobile = $mobile;
        $this->msg_type = $msg_type;
    }
    public function sendMessage($msg_type,string $mobile,string $regn_no,$applicant_name='Dear Applicant')
    {
        throw_if(blank($msg_type), new \Exception("No match found"));

        $appUrl = env('APP_URL');
        switch ($msg_type) {
            case self::SUBMIT_APPLICATION:
                $msg = "Your application $regn_no has been SUBMITTED successfully";
                break;
            case self::APPROVED_APPLICATION:
                $msg = "Your application $regn_no has been APPROVED for {#var#}";
                break;
            case self::REJECTED_APPLICATION:
                $msg = "Your application $regn_no has been REJECTED, Reason for rejection can be found at $appUrl";
                break;
            case self::DOWNLOAD_TEST_CARD:
                $msg = "Your application $regn_no has physical test scheduled at {#var#} . Download your Physical Test Card at $appUrl";
                break;
            case self::QUALIFIED_PHYSICAL:
                $msg = "$applicant_name , Congratulations, you have successfully cleared your Physical Test evaluation.";
                break;
            case self::DOWNLOAD_ADMIT_CARD:
                $msg = "Written Exam scheduled for application $regn_no is now available. Download your Admit Card at $appUrl";
                break;
            case self::NOTIFY_INTERVIEW:
                $msg = "$applicant_name , your Interview schedule is now available at $appUrl";
                break;

        }
        $response=Http::withHeaders([
            'Authorization' => "Bearer " . env('SMS_TOKEN'),
        ])->get("https://sms.msegs.in/api/send-sms",[
            'template_id' => $msg_type,
            'message' => $msg,
            'recipient'=>$mobile
        ]);
        info("SMS response $msg_type ".$response->body());
    }

}
