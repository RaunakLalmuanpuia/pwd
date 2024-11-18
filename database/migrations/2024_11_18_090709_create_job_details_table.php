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
        Schema::create('job_details', function (Blueprint $table) {
            $table->id();
            $table->string('post_name');
            $table->unsignedBigInteger('department_id');
            $table->string('no_of_post');
            $table->string('salary');
            $table->string('age_limit');
            $table->string('qualification');
            $table->date('application_deadline');
            $table->string('application_fee');
            $table->text('description')->nullable();
            $table->boolean('active')->default(true)->nullable();
//            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_details');
    }
};
