import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services//api.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public errorMsg = '';
    public part1 = true;
    user:User = {id:null, name:null, userName:null,photo:null, address:null,email:null,password:null,telephone:null,status:null, birthDate:null}

    constructor(public  api:ApiService, private auth:LoginService) {}

    login(user) {
    	this.auth.login(this.user).subscribe((data)=>{
        console.log(data);
    	},(error)=>{
        console.log(error);
    	});
    }
    
    ngOnInit() {
    }
 
}
 