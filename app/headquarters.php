<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class headquarters extends Model
{
    protected $table = "headquarters";

    protected $fillable = ["idInstitute","idCity"];


    public function city(){
    	return $this->hasMany("App/city");
    }

    public function historyRegister(){
    	return $this->belongsTo("App/historyRegister");
    }

     public function institute(){
    	return $this->belongsTo("App/institute");
    }


}
