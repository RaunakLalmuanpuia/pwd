<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_settings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_details_id');
            $table->date('from_admit_card')->nullable();
            $table->date('to_admit_card')->nullable();
            $table->date('interview_commence_on')->nullable();
            $table->dateTime('interview_commence_upto')->nullable();

            $table->dateTime('last_date_application')->nullable();

            $table->string('param1')->nullable();
            $table->string('param2')->nullable();
            $table->string('param3')->nullable();
            $table->string('param4')->nullable();
            $table->string('param5')->nullable();

            $table->foreign('job_details_id')->references('id')->on('job_details')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_settings');
    }
};
