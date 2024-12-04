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
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_details_id')->constrained('job_details')->onDelete('cascade');
            $table->string('exam_name');
            $table->string('description')->nullable();
            $table->date('exam_date')->nullable();
            $table->dateTime('start_at');
            $table->dateTime('end_at');
            $table->string('pass_mark')->default(0);
            $table->string('full_mark')->default(0);
            $table->boolean('active')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exams');
    }
};
