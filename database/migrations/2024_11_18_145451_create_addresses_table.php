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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');

            // permanent
            $table->string('permanent_house_no');
            $table->string('permanent_street')->nullable();
            $table->string('permanent_locality');
            $table->string('permanent_landmark')->nullable();
            $table->string('permanent_city');
            $table->string('permanent_district');
            $table->string('permanent_state');
            $table->string('permanent_pin_code');

            // communication
            $table->string('communication_house_no');
            $table->string('communication_street')->nullable();
            $table->string('communication_locality');
            $table->string('communication_landmark')->nullable();
            $table->string('communication_city');
            $table->string('communication_district');
            $table->string('communication_state');
            $table->string('communication_pin_code');

            $table->string('country')->default('India'); // Default to India
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
