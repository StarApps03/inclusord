<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class multimedia extends Model
{
    protected $table = "multimedia";

    protected $fillable = ["idLevelAcademic","idLetter","idArea","type"];

    public function area(){
    	return $this->belongsTo("App/Area");
    }

    public function academicLevel(){
    	return $this->belongsTo("App/academicLevel");
    }

    public function letter(){
    	return $this->belongsTo("App/letter");
    }
}
