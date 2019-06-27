<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class city extends Model
{
    protected $table = "city";

    protected $fillable = ["nameCity"];

    public function state(){
    	return $this->belongsTo("App/state");
    }


    public function headquarters(){
    	return $this->hasMany("App/headquarters");
    }
}
