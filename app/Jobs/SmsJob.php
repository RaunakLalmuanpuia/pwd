<?php

namespace App\Jobs;

use App\Utils\SmsManager;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SmsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected SmsManager $smsManager;

    /**
     * Create a new job instance.
     *
     * @param $smsManager
     */
    public function __construct($smsManager)
    {
        $this->smsManager =$smsManager;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->smsManager->send();
    }
}
