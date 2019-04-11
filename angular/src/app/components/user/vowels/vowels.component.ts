import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LetterService } from 'src/app/services/letter.service';

declare var $:any;

@Component({
  selector: 'ng-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})
export class VowelsComponent implements OnInit {


  data = {}
  operation = { stepLetter:true, stepWord:false,stepExample:{visible:false, first:true,last:false}, position:0};
  position = 0;
  public step:number = 1;
  length:number = 0;
  word_example = false;
  border_video:any =  "";
  background_body:any =  "";
  url:any = "";

  @ViewChild(VowelsComponent) vowel:VowelsComponent;
  
  constructor(public api:ApiService = null, public letters:LetterService = null) {}

  ngOnInit() {
    this.url = this.api.url;
    this.getVowels();
    this.border_video = this.url + "resources/img/figure/vector1.png";
    this.background_body = this.url + "resources/img/backgrounds/background_one.png";
  }
  prueba(ms){
    console.log(ms);
  }

  procesaPropagar(mensaje) {
    console.log("llego");
  console.log(mensaje);
  console.log("termiono");
}
  setLength(length){
    this.length = length;
  }

  getLength(){
    return this.length;
  }

  setWord_example(word_wxample){
    this.word_example = word_wxample;
  }

  setPosition(){
    this.position = this.position + 1;  
  }

  setStep(step){
    this.step = step;
  }

  getVowels(){
    this.data = this.letters.data.filter(letter => letter.vowel == true);
    this.setLength(Object.keys(this.data).length - 1 );
  }

   next(event){
    this.operation.stepLetter = event.stepLetter;
    this.operation.  stepWord = event.stepWord;
    this.operation.stepExample = event.stepExample;
    this.operation.position = event.position;
    console.log(this.operation);
  }

  back(stepLetter, stepWord, position){
    this.operation.stepLetter = stepLetter;
    this.operation.stepWord = stepWord;
    this.operation.position = position;
  }
  
  show_element(word){
    $(".word  p[data-word="+word+"]").css({"opacity":"1"});
  }

  play(){
    $("#video").get(0).play();
  }


    
  }


