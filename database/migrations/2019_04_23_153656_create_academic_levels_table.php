<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAcademicLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('academicLevel', function (Blueprint $table) {
            $table->increments('id');
            $table->string("nameLevel");
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('academicLevel');
    }


}
