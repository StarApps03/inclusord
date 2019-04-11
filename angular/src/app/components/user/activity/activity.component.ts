import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
declare var $:any;

@Component({
  selector: 'ng-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css',"../vowels/vowels.component.css"]
})
export class ActivityComponent implements OnInit  {
  relations:any =null;
  puntuacion_usu:any = 0;
  url:any = "";
  position = null;
  
  array_words:any = [
    {word:null,images:null, representation:null}
  ];

  tried:number  =  3;
  url_active:any = "";
  url_new = null;
  long_array = 0;
  cant_stars = 3;
  game_over = false;
  //
    border_video:any =  "";
    background_body:any =  "";
  //
  constructor(
      private rutaActiva: ActivatedRoute, public route:Router, api:ApiService
    ) {
    this.url = api.url
    this.words();
    this.url_active = this.rutaActiva.snapshot.params["nombre"].toUpperCase();
    let name = this.url_active;
    this.word_show(name);
  }

  ngOnInit() {
    this.url_active = this.rutaActiva.snapshot.params["nombre"];
        this.border_video = this.url + "resources/img/figure/vector1.png";
        this.background_body = this.url + "resources/img/backgrounds/background_one.png";
  }
  //
  words(){
   this.array_words = [
    {word:"Arbol",fase:0, images:[
         {index:"1",image:"pinguino.png",response:false, representation:"Pinguino.mp4"},
         {index:"2",image:"arbol.png",response:true, representation:"Arbol.mp4"},
         {index:"3",image:"tigre.png",response:false, representation:"Tigre.mp4"}
    ]},
    {word:"Elefante",images:[
        {index:"4",image:"elefante.png",response:true, representation:"Elefante.mp4"},
        {index:"5",image:"sol.png",response:false, representation:"Sol.mp4"},
        {index:"6",image:"pinguino.png",response:false, representation:"Pinguino.mp4"},
    ]},
    //
      {word:"Conejo", images:[
      {index:"4",image:"helicoptero.png",response:false, representation:"Helicoptero.mp4"},
      {index:"5",image:"iguana.png",response:false, representation:"Iguana.mp4"},
      {index:"6",image:"conejo.png",response:true, representation:"Conejo.mp4"}
      ]},
       {word:"Oveja" , images:[
        {index:"5",image:"conejo.png",response:false, representation:"Conejo.mp4"},
        {index:"4",image:"helicoptero.png",response:false, representation:"Helicoptero.mp4"},
        {index:"6",image:"oveja.png", response:true, representation:"Oveja.mp4"}
      ]},
      {word:"Uva", images:[
        {index:"5",image:"uvas.png",response:true, representation:"Uvas.mp4"},
        {index:"4",image:"helicoptero.png",response:false, representation:"Helicoptero.mp4"},
        {index:"6",image:"pinguino.png",response:false, representation:"Pinguino.mp4"},
      ]},
    ];
    this.long_array = this.array_words.length - 1;
  }
  
  verify(response,index){
    if(this.tried > 0){
      if(response == true){
          $(".content-start").hide().fadeIn(500);
          for (var i = 1; i <=this.cant_stars; i++) {
             $("li[data-element="+i+"]").show();          }
          this.puntuacion_usu = this.puntuacion_usu + this.cant_stars;

           $("img[alt="+index+"]").before("<img class='img-error' src='"+this.url+"resources/img/icons/success.png'/>");
           $(".img-error").css({
            "width": "170px",
            "display": "block",
            "position": "absolute",
            "margin": "auto",
            "top": "0",
            "bottom": "0",
            "left": "0",
            "right": "0"
          });
      }else{
        $("img[alt="+index+"]").before("<img class='img-error' src='"+this.url+"resources/img/icons/error.png'/>");
        $(".img-error").css({
            "width": "170px",
            "display": "block",
            "position": "absolute",
            "margin": "auto",
            "top": "0",
            "bottom": "0",
            "left": "0",
            "right": "0"
          });
        this.cant_stars = this.cant_stars - 1;

        if(this.tried==3){
           $(".bing").css({"width":"55px"});
        }else if(this.tried==2){
           $(".bing").css({"width":"25px"});
        }
        
      } 
    }
    this.tried = this.tried - 1;
  }

  success(){
    if(this.position < this.long_array){
      this.position = this.position + 1;
      this.url_new = this.array_words[this.position]["word"];
      this.route.navigate(["/actividades/palabra/"+this.url_new]);
      $(".content-start").fadeOut(1000);
      $(".start-bing li").hide();
      this.tried = 3;
      this.cant_stars = 3;
      $(".bing").css({"width":"84px"});
     }else{
       $(".section1,.row-stars,.navigation .punt-temp").hide();
       $(".section2").hide().fadeIn(1000);
       $(".content-start").fadeOut(1000);
       this.game_over = true;
     }
  }

    word_show(name){
      for (var i = 0; i <= 1; i++) {
         for (var i = 0; i <= this.array_words.length - 1; i++) {
            if(name == this.array_words[i]["word"].toUpperCase()){
              this.position = i;
            }
          }
  }


}



  







































}
