import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class InitialService {
	style_url:any = {
		border_video: "",
		background_body:""
	};
	url:string = '';
  constructor(api:ApiService) { 
    this.url = "http://senainclusord.000webhostapp.com/";
  }

  v1(){
  	this.style_url.border_video = this.url + "resources/img/figure/marco_1.png";
  	this.style_url.background_body = this.url + "resources/img/figure/marco_1.png";
  }
}
