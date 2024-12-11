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
        Schema::table('exam_marks', function (Blueprint $table) {
            //
            $table->string('remark')->nullable();  // Add remark field (nullable string)
            $table->boolean('passed')->default(false);  // Add passed field (boolean with default value)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('exam_marks', function (Blueprint $table) {
            //
            $table->dropColumn(['remark', 'passed']);
        });
    }
};
