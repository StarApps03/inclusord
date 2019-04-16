import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import {  HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private api:ApiService, public http:HttpClient){

  }
 
  logout() {
   // localStorage.removeItem("user");
    //this._router.navigate(['login']);
  }

  login(user:User){
     const headers = new HttpHeaders({"Content-type":"application/json"});
    return this.http.post(this.api.url+"api/login", user, {headers: headers});
  }

   checkCredentials(){ 
    if (sessionStorage.getItem("user") === null){
        //this._router.navigate(['login']);
    }
  }
} 