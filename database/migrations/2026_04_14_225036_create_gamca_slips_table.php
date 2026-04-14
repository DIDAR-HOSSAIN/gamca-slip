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
        Schema::create('gamca_slips', function (Blueprint $table) {
            $table->id();
            // Appointment Info
            $table->string('country');
            $table->string('city');
            $table->string('travel_country');

            // Candidate Info
            $table->string('first_name');
            $table->string('last_name');
            $table->date('dob');
            $table->string('nationality');
            $table->string('gender');
            $table->string('marital_status');

            $table->string('passport_number');
            $table->date('passport_issue_date');
            $table->string('passport_issue_place');
            $table->date('passport_expiry_date');

            $table->string('visa_type');

            $table->string('email');
            $table->string('phone');
            $table->string('national_id')->nullable();
            $table->string('position_applied')->nullable();

            // File Upload
            $table->string('passport_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gamca_slips');
    }
};
