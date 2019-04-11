import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbecedaryComponent } from 'src/app/components/user/abecedary/abecedary.component';
import { VowelsComponent } from 'src/app/components/user/vowels/vowels.component';
import { LetterService } from 'src/app/services/letter.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'ng-main-level-heading',
  templateUrl: './main-level-heading.component.html',
  styleUrls: ['./main-level-heading.component.css']
})
export class MainLevelHeadingComponent implements OnInit {
	//variables
  stepLetter:boolean;//define si la seccion de la letra es mostrada o no
  stepWord:boolean;// '  ==   ' palabra
  stepExample:any;
  position:number; //asigna que objeto mostrar en pantalla en este caso cada letra con sus respectivo contenido
  length:number;//longitud del array donde se almacena el abecesdario
  view:any;
  controls:any = {btnNext:true,btnBack:true,btnHome:true,punctuation:false};
  part:number= 0;
  url:string = "";
  @Input() puntuacion_usu:any;

  @Output()
  navigateVowel = new EventEmitter<any>();

  constructor(public api:ApiService, public alphabet:AbecedaryComponent, public Letter:LetterService) { //Iniar variables
  	this.stepLetter = true;
  	this.stepWord = false;
  	this.stepExample = {visible:false,first:true,last:false};
  	this.position = 0;
    this.url = api.url;

  }

  ngOnInit() {
  	this.view = window.location.hash.substr(2);
    var url = this.view.split("/");
    url[0] == 'actividades'  ? (this.controls.punctuation = true, this.controls.btnNext=false, this.controls.btnBack=false) : (this.controls.punctuation = false);
  }

  next(){
  	//se pasasn las variables a los componentes para verificar y mostrar  fragmentos de vistas en caso de letre, palabra o ejempolares
  	 let condition:any  = (this.view == 'abecedario') ? this.length = this.alphabet.getLength() : this.length = this.Letter.getLength("vowel");
  	if(this.position <= this.length){
  		if(this.stepLetter==true){
  			this.stepLetter=false;
  			this.stepWord=true;
  		}else{
  			this.stepExample.visible == false ? (this.stepWord=false, this.stepLetter=true):(console.log(''));
  			let process:any = (this.length == this.position)?  this.position = this.length : this.position = this.position + 1;//condicioneles ternario 
  			//se puede hacer lo mismo con condicionales normales
  		}

  		let rule:any = (this.view=='abecedario')? this.alphabet.next(this.stepLetter, this.stepWord,this.position):
  						(this.navigateVowel.emit({
  							stepLetter:this.stepLetter, stepWord:this.stepWord,position:this.position, stepExample:this.stepExample
  						}));
  		this.action();
  	}
  }


  back(){
		this.position > 0 ? (
							this.stepWord = false,
							this.stepLetter = true, 
							this.position = this.position - 1
						):(
							this.position = 0
						); 
		this.alphabet.back(this.stepLetter, this.stepWord,this.position);
  	}


action(){
	if(this.part==1){
		this.stepExample.first=true;
		this.stepExample.last=false;
		this.controls.btnBack = false;
		this.part = 2;
	}else if(this.part==2){
		this.stepExample.first=false;
		this.stepExample.last=true;
		this.controls.btnNext = false;
	}
	if(this.position==this.length && this.stepExample.visible==false && this.stepWord==true){
		this.stepExample.visible=true;
		this.stepWord = false;
		this.part = 1;
		console.log("log activado  stepExamp ");
	}
}

//
}

