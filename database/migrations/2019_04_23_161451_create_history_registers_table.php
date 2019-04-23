<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoryRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historyRegister', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("idInstitute")->unsigned();
            $table->integer("idUser")->unsigned();
            $table->date("startDate");
            $table->date("startEnd");
            $table->enum("status",['active','inactive']);
            $table->timestamps();
            $table->rememberToken();
            //
            $table->foreign("idInstitute")->references("id")->on("institute")->delete("cascade");
            $table->foreign("idUser")->references("id")->on("users")->delete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('historyRegister');
    }
}
