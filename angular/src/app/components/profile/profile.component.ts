import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { HttpHeaders } from '@angular/common/http';
declare var $:any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user:any;
  constructor(private profile:ProfileService, public http:HttpClient, public api:ApiService) {
  	this.user = User;

  }
  ngOnInit() {
  	this.dataProfile();
  }

  dataProfile(){
  	this.profile.getData().subscribe((data)=>{
  		this.user = data["response"];
  	},(error)=>{
  		console.log(error);
  	}); 	
  }


   edit(event){
   	console.log(event.target);
    this.profile.update(this.user).subscribe((data)=>{
    	$("#exampleModalLong").modal("hide");
    	this.dataProfile();
    },(error)=>{

    });
  }
	  

}
