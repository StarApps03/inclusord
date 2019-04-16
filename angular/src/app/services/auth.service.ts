import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private token:any; 
  constructor() {}

  isAuthenticated(){
  	this.token = sessionStorage.getItem("token");
  	if(this.token){
  		return true;
  	}else{
  		return false;
  	}
  }
}
