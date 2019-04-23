<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class state extends Model
{
    protected $table = "state";

    protected $fillable = ["nameCity"];

    public function country(){
    	return $this->belongs("App/country");
    }

    public function city(){
    	return $this->hasMany("App/city");
    }
}
