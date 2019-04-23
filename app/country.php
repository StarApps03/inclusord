<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class country extends Model
{
    protected $table = "country";

    protected $fillable = ["nameCountry"];

    public function states(){
    	return $this->hasMany("App/state");
    }
}
