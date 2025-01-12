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
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
//            $table->string('name');
//            $table->string('phone')->nullable();
//            $table->string('email')->unique()->nullable();
            $table->string('parents_name');
            $table->string('sex');
            $table->date('date_of_birth');
            $table->string('community');
            $table->string('community_attachment')->nullable();
            $table->string('religion');
            $table->string('marital_status');
            $table->string('nationality')->nullable();
            $table->string('qualification');
            $table->string('graduateDegree')->nullable();
            $table->string('graduateStream')->nullable();

            $table->string('postGraduateDegree')->nullable();
            $table->string('postGraduateStream')->nullable();

            $table->string('doctorateDegree')->nullable();
            $table->string('doctorateStream')->nullable();

            $table->boolean('mizo_proficiency')->nullable();
            $table->boolean('disability')->default(false);
            $table->string('disability_type')->nullable();
            $table->string('passport_photo');
            $table->string('signature_photo');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applicants');
    }
};
