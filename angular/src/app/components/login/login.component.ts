import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../services//api.service';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public errorMsg = '';
    public part1 = true;
    error:string = '';
    public visible:false;
    user:User = {id:null, name:null, userName:null,photo:null, address:null,email:null,password:null,telephone:null,status:null, birthDate:null}

    constructor(public  api:ApiService, private auth:LoginService, public route:Router, public authUser:AuthService) {
        console.log(authUser.isAuthenticated());
    }

    login(user) {
    	this.auth.login(this.user).subscribe((data)=>{
            if(data["success"]["token"]){
                console.log("autenticado");
                sessionStorage.setItem("token",data["success"]["token"]);
                this.route.navigate(['administracion/home']);
            }          
    	},(error)=>{
            this.error = error["error"]["error"];
    	});
    }
    
    ngOnInit() {
    }
 
}
 