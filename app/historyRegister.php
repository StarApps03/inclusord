<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class historyRegister extends Model
{
    protected $table = "historyRegister";

    protected $fillable = ['idUser',"idInstitute","startDate","startEnd","status"];

    public function users (){
    	return $this->belongsTo("App/User");
    }

    public function headquarters(){
    	return $this->hasMany("App/headquarters");
    }
}
