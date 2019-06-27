import { Component, OnInit, Input, Output, ViewChild, EventEmitter , Injectable} from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import { Session } from 'protractor';
import { LetterService } from 'src/app/services/letter.service'; 
import { MainLevelHeadingComponent } from 'src/app/components/levels/basic_level/alphabet/layouts/main-level-heading/main-level-heading.component';
declare var $:any;

@Component({
  selector: 'ng-abecedary',
  templateUrl: './abecedary.component.html',
  styleUrls: ['../vowels/vowels.component.css']
})

@Injectable()

export class AbecedaryComponent implements OnInit {

    data = {};
    operation = { stepLetter:true, stepWord:false,position:0};
    length:number;
    url:any = "";
    border_video:any =  "";
    background_body:any =  "";

  constructor(public api:ApiService = null, public letters:LetterService = null) { }

  ngOnInit() {
    this.url = this.api.url;
    this.border_video = this.url + "img/figure/vector1.png";
    this.background_body = this.url + "img/backgrounds/background_one.png";
    this.getAlphabet();
  }

  //seter
  getLength(){
    return this.length;
  } 

   setLength(length){
     this.length = length; 
   }

  //
  getAlphabet(){
    this.data = this.letters.data;
    this.setLength(Object.keys(this.data).length - 1);
  }

  //function pending for simplify in file header//

 next(stepLetter, stepWord, position){
  this.operation.stepLetter = stepLetter;
  this.operation.  stepWord = stepWord;
  this.operation.position = position;
  }

  back(stepLetter, stepWord, position){
  this.operation.stepLetter = stepLetter;
  this.operation.stepWord = stepWord;
  this.operation.position = position;
  console.log(this.operation);
  }
    

/*
back(){
     if(this.position>0){
      this.position = this.position - 1;
      $("#step-primary").show();
      $("#step-secondary").hide();
      this.setStep(1);
      if(this.position==0){
        $(".btn-back").hide();
      }else{
        $(".btn-next").show();
      }
    }
  }


*/



}



