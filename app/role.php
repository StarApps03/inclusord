<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    protected $table = "role";

    protected $fillable = ['nameRole'];

    public function typeRoles (){
    	return $this->hasMany("App/typeRole");
    }
}
