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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string("title")->fillable();
            $table->date("start_date")->fillable();
            $table->date("registration_until")->fillable();
            $table->text("description")->fillable();
            $table->string("image")->nullable()->default(null);
            $table->unsignedBigInteger('eventtype_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
