<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class area extends Model
{
    protected $table = "area";

    protected $fillable = ['name'];


    public function multimedia (){
    	return $this->hasMany("App/Multimedia");
    }

    
}
