<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class academicLevel extends Model
{
    protected $table = "academicLevel";


    protected $fillable = ['nameLevel'];

    public function multimedia(){
    	return $this->hasMany("App/Multimedia");
    }


    public function institute(){
    	return $this->hasMany("App/institute");
    }

}
