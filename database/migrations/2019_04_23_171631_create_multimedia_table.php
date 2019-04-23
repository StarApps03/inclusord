<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMultimediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('multimedia', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("idLevelAcademic")->unsigned();
            $table->integer("idLetter")->unsigned();
            $table->integer("idArea")->unsigned();
            $table->string("type");
            $table->rememberToken();
            $table->timestamps();
            //
            $table->foreign("idLevelAcademic")->references("id")->on("academicLevel")->delete("cascade");
            $table->foreign("idLetter")->references("id")->on("letter")->delete("cascade");
            $table->foreign("idArea")->references("id")->on("area")->delete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('multimedia');
    }
}
