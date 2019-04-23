<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class institute extends Model
{
	protected $table = "institute";
	
	protected $fillable = ["idAcademicLevel","businessName","address","location"];


    public function academicLevel(){
    	return $this->belongsTo("App/academicLevel");
    }

    public function headquarters(){
    	return $this->hasMany("App/headquarters");
    }
}
