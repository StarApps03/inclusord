declare function require(path: string): any;
declare var $:any;

import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'ng-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {
	ruleta:any;
	url:any = "";
	video: string = "https://www.youtube.com/embed/CD-E-LDc384";
	border_video:any =  "";
    background_body:any =  "";


  constructor(public sanitizer: DomSanitizer, api:ApiService) { 
  	this.url = api.url;
  }

  ngOnInit() {
        console.log("cargando");
  		  this.border_video = this.url + "resources/img/figure/vector1.png";
        this.background_body = this.url + "resources/img/backgrounds/background_one.png";
  }


  }