import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-app-administrator',
  templateUrl: './app-administrator.component.html',
  styleUrls: ['./app-administrator.component.css']
})
export class AppAdministratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  siderOption(){
  	$(".fixed-plugin dropdown").addClass("open");
  }

}
