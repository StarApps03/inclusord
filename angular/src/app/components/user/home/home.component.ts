import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var $:any;

@Component({
  selector: 'ng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
url:any = "";
menu_responsive:any = false;

  constructor(api:ApiService) {
    this.url = api.url
}

  ngOnInit() {
  }



  menu(){
  	if(this.menu_responsive==false){
		$(".menu,.navigation li").hide().fadeIn(400);
		this.menu_responsive = true;
  	}else{
  		$(".menu,.navigation li").fadeOut(400);
  		this.menu_responsive = false;

  	}
  	
  }

  onResize(event) {
        var width = screen.width;
        console.log(width);
        if(width>=768){
        	$(".navigation li").show();
        	$(".menu").css("display","none !important");
        }
        if(this.menu_responsive==true){
        	$(".menu").show();
        	if(width>=768){
        		$(".menu").hide();
        	}else{
        		$(".menu").show();
        	}
        }

        if(this.menu_responsive==false){
        	if(width>=768){
        		$(".navigation li").show();
        	}else{
        		$(".navigation li").hide();
        	}
        }

    }
  //

  //

}
