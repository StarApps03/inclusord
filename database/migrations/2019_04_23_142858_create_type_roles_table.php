<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypeRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_role', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("idUser")->unsigned();
            $table->integer("idRole")->unsigned();
            $table->rememberToken();
            $table->timestamps();
            //
            $table->foreign("idUser")->references("id")->on("users")->delete("cascade");
            $table->foreign("idRole")->references("id")->on("role")->delete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_role');
    }
}
