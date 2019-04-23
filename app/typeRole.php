<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class typeRole extends Model
{
    protected $table = "typeRole";

    protected $fillable = ['idUser','idRole'];

    public function role(){
    	return $this->belongsTo("App/Role");
    }

    public function users(){
    	return $this->belongsTo("App/User");
    }

}
