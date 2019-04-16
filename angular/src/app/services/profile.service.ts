import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';
import { HttpClientModule,  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
	token:any;
  headers:any;
  constructor(private http:HttpClient, public api:ApiService) {
    this.token = "Bearer "+sessionStorage.getItem("token");
    this.headers = new HttpHeaders().set("Authorization", this.token);

   }

	getData(){
    	return this.http.get<JSON>(this.api.url+"api/user", {headers: this.headers });
	}

  update(user:User){
    console.log(user);
    return this.http.put<JSON>(this.api.url+"api/user/"+user.id,user, {headers: this.headers });
  }

}
