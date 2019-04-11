import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
lenght:number;
data:any = [
    {letter:"a",sign:"A.mp4", vowel:true, words:[
        {word:"Arbol",image:"Arbol.png",representation:"Arbol.mp4"}
    ]},
    {letter:"b",sign:"B.mp4",words:[
        {word:"Ballena",image:"Ballena.png",representation:"Ballena.mp4"}
    ]},
    {letter:"c",sign:"C.mp4",words:[
        {word:"Conejo",image:"Conejo.png",representation:"Conejo.mp4"}
    ]},
    {letter:"d",sign:"D.mp4",words:[
        {word:"Delfin",image:"Delfin.png",representation:"Delfin.mp4"}
    ]},
    {letter:"e",sign:"E.mp4", vowel:true, words:[
        {word:"Elefante",image:"Elefante.png",representation:"Elefante.mp4"}
    ]},
    {letter:"f",sign:"F.mp4",words:[
        {word:"Flores",image:"Flores.png",representation:"Flores.mp4"}
    ]},
    {letter:"g",sign:"G.mp4",words:[ 
        {word:"Gato",image:"Gato.png",representation:"Gato.mp4"}
    ]},
    {letter:"h",sign:"H.mp4",words:[
        {word:"Helicoptero",image:"Helicoptero.png",representation:"Helicoptero.mp4"}
    ]},
    {letter:"i",sign:"I.mp4", vowel:true, words:[
        {word:"Iguana",image:"Iguana.png",representation:"Iguana.mp4"}
    ]},
    {letter:"j",sign:"J.mp4",words:[
        {word:"Jirafa",image:"Jirafa.png",representation:"Jirafa.mp4"}
    ]},
    {letter:"k",sign:"K.mp4",words:[
        {word:"Koala",image:"Koala.png",representation:"Koala.mp4"}
    ]},
    {letter:"l",sign:"L.mp4",words:[
        {word:"Leon",image:"Leon.png",representation:"Leon.mp4"}
    ]},
    {letter:"m",sign:"M.mp4",words:[
        {word:"Manzana",image:"Manzana.png",representation:"Manzana.mp4"}
    ]},
    {letter:"n",sign:"N.mp4",words:[
        {word:"Naranja",image:"Naranja.png",representation:"Naranja.mp4"}
    ]},
    {letter:"ñ",sign:"Ñ.mp4",words:[
        {word:"Ñandu",image:"Ñandu.png",representation:"Ñandu.mp4"}
    ]},
    {letter:"o",sign:"O.mp4", vowel:true, words:[
        {word:"Oveja",image:"Oveja.png",representation:"Oveja.mp4"}
    ]},
    {letter:"p",sign:"P.mp4",words:[
        {word:"Pinguino",image:"Pinguino.png",representation:"Pinguino.mp4"}
    ]},
    {letter:"q",sign:"Q.mp4",words:[
        {word:"Queso",image:"Queso.png",representation:"Queso.mp4"}
    ]},
    {letter:"r",sign:"R.mp4",words:[
        {word:"Raton",image:"Raton.png",representation:"Raton.mp4"}
    ]},
    {letter:"s",sign:"S.mp4",words:[
        {word:"Sol",image:"Sol.png",representation:"Sol.mp4"}
    ]},
    {letter:"t",sign:"T.mp4",words:[
        {word:"Tigre",image:"Tigre.png",representation:"Tigre.mp4"}
    ]},
    {letter:"u",sign:"U.mp4", vowel:true, words:[
        {word:"Uvas",image:"Uvas.png",representation:"Uvas.mp4"}
    ]},
    {letter:"v",sign:"V.mp4",words:[
        {word:"Vaca",image:"Vaca.png",representation:"Vaca.mp4"}
    ]},
    {letter:"w",sign:"W.mp4",words:[
        {word:"Waffle",image:"Waffle.png",representation:"Waffle.mp4"}
    ]},
    {letter:"x",sign:"X.mp4",words:[
        {word:"Xilofono",image:"Xilofono.png",representation:"Xilofono.mp4"}
    ]},
    {letter:"y",sign:"Y.mp4",words:[
        {word:"Yogo",image:"Yoyo.png",representation:"Yoyo.mp4"}
    ]},
    {letter:"z",sign:"Z.mp4",words:[
        {word:"Zanahoria",image:"Zanahoria.png",representation:"Zanahoria.mp4"}
    ]},
    ];

  constructor() { }

  getLength(type){
      type == 'abecedario' ? ( this.lenght = Object.keys(this.data).length - 1)
                          : ( this.data = this.data.filter(letter => letter.vowel == true), this.lenght = Object.keys(this.data).length - 1  );
      //
      return this.lenght;

  }
}
