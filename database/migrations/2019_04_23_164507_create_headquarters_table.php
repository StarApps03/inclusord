<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHeadquartersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('headquarters', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("idInstitute")->unsigned();
            $table->integer("idCity")->unsigned();
            $table->integer("idHistoryRegister")->unsigned();
            $table->timestamps();
            $table->rememberToken();
            //
            $table->foreign("idInstitute")->references("id")->on("institute")->delete("cascade");
            $table->foreign("idCity")->references("id")->on("city")->delete("cascade");
             $table->foreign("idHistoryRegister")->references("id")->on("historyRegister")->delete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('headquarters');
    }
}
