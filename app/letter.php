<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class letter extends Model
{
    protected $table = "letter";

    protected $fillable = ["nameLetter"];


    public function multimedia(){
    	return $this->hasMany("App/Multimedia");
    }
}
