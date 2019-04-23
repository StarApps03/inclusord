
//variables globales
var miRuleta;
var ctx;
var winningSegment;
var distnaciaX = 150;
var distnaciaY = 50;
var letter_ping;
var duration = 0;
var url = "http://localhost/desarrollo/inclusord/public/";
var visible = false;

//
//crear ruleta
  var words = [
    {letter:"a",image:"A.mp4", words:[
    {word:"Arbol",image:"Arbol.png",representation:"Arbol.mp4"}
    ] },
    {letter:"b",image:"B.mp4",words:[
    {word:"Ballena",image:"Ballena.png",representation:"Ballena.mp4"}
    ]},
    {letter:"c",image:"C.mp4",words:[
    {word:"Conejo",image:"Conejo.png",representation:"Conejo.mp4"}
    ] },
    {letter:"d",image:"D.mp4",words:[
    {word:"Delfin",image:"Delfin.png",representation:"Delfin.mp4"}
    ] },
    {letter:"e",image:"E.mp4",words:[
    {word:"Elefante",image:"Elefante.png",representation:"Elefante.mp4"}
    ] },
    {letter:"f",image:"F.mp4",words:[
    {word:"Flores",image:"Flores.png",representation:"Flores.mp4"}
    ] },
    {letter:"g",image:"G.mp4",words:[
    {word:"Gato",image:"Gato.png",representation:"Gato.mp4"}
    ] },
    {letter:"h",image:"H.mp4",words:[
    {word:"Helicoptero",image:"Helicoptero.png",representation:"Helicoptero.mp4"}
    ] },
    {letter:"i",image:"I.mp4",words:[
    {word:"Iguana",image:"Iguana.png",representation:"Iguana.mp4"}
    ] },
    {letter:"j",image:"J.mp4",words:[
    {word:"Jirafa",image:"Jirafa.png",representation:"Jirafa.mp4"}
    ] },
    {letter:"k",image:"K.mp4",words:[
    {word:"Koala",image:"Koala.png",representation:"Koala.mp4"}
    ] },
    {letter:"l",image:"L.mp4",words:[
    {word:"Leon",image:"Leon.png",representation:"Leon.mp4"}
    ] },
    {letter:"m",image:"M.mp4",words:[
    {word:"Manzana",image:"Manzana.png",representation:"Manzana.mp4"}
    ] },
    {letter:"n",image:"N.mp4",words:[
    {word:"Naranja",image:"Naranja.png",representation:"Naranja.mp4"}
    ] },
    {letter:"ñ",image:"Ñ.mp4",words:[
    {word:"Ñandu",image:"Ñandu.png",representation:"Ñandu.mp4"}
    ] },
    {letter:"o",image:"O.mp4",words:[
    {word:"Oveja",image:"Oveja.png",representation:"Oveja.mp4"}
    ] },
    {letter:"p",image:"P.mp4",words:[
    {word:"Pinguino",image:"Pinguino.png",representation:"Pinguino.mp4"}
    ] },
    {letter:"q",image:"Q.mp4",words:[
    {word:"Queso",image:"Queso.png",representation:"Queso.mp4"}
    ] },
    {letter:"r",image:"R.mp4",words:[
    {word:"Raton",image:"Raton.png",representation:"Raton.mp4"}
    ] },
    {letter:"s",image:"S.mp4",words:[
    {word:"Sol",image:"Sol.png",representation:"Sol.mp4"}
    ] },
    {letter:"t",image:"T.mp4",words:[
    {word:"Tigre",image:"Tigre.png",representation:"Tigre.mp4"}
    ] },
    {letter:"u",image:"U.mp4",words:[
    {word:"Uvas",image:"Uvas.png",representation:"Uvas.mp4"}
    ] },
    {letter:"v",image:"V.mp4",words:[
    {word:"Vaca",image:"Vaca.png",representation:"Vaca.mp4"}
    ] },
    {letter:"w",image:"W.mp4",words:[
    {word:"Waffle",image:"Waffle.png",representation:"Waffle.mp4"}
    ] },
    {letter:"x",image:"X.mp4",words:[
    {word:"Xilofono",image:"Xilofono.png",representation:"Xilofono.mp4"}
    ] },
    {letter:"y",image:"Y.mp4",words:[
    {word:"Yogo",image:"Yoyo.png",representation:"Yoyo.mp4"}
    ] },
    {letter:"z",image:"Z.mp4",words:[
    {word:"Zanahoria",image:"Zanahoria.png",representation:"Zanahoria.mp4"}
    ] },
    ];
//

//elementos de la ruleta
var elementos = [ // Datos de los segmentos
  { 'fillStyle': '#CD6155', 'text': 'A' },
  { 'fillStyle': '#C39BD3', 'text': 'B' },
  { 'fillStyle': '#85C1E9', 'text': 'C' },
  { 'fillStyle': '#73C6B6', 'text': 'D' },
  { 'fillStyle': '#F7DC6F', 'text': 'E' },
  { 'fillStyle': '#EB984E', 'text': 'F' },
  { 'fillStyle': '#5D6D7E', 'text': 'G' },
  { 'fillStyle': '#CD6155', 'text': 'H' },
  { 'fillStyle': '#C39BD3', 'text': 'I' },
  { 'fillStyle': '#85C1E9', 'text': 'J' },
  { 'fillStyle': '#73C6B6', 'text': 'K' },
  { 'fillStyle': '#F7DC6F', 'text': 'L' },
  { 'fillStyle': '#EB984E', 'text': 'M' },
  { 'fillStyle': '#5D6D7E', 'text': 'N' },
  { 'fillStyle': '#CD6155', 'text': 'Ñ' },
  { 'fillStyle': '#C39BD3', 'text': 'O' },
  { 'fillStyle': '#85C1E9', 'text': 'P' },
  { 'fillStyle': '#73C6B6', 'text': 'Q' },
  { 'fillStyle': '#F7DC6F', 'text': 'R' },
  { 'fillStyle': '#EB984E', 'text': 'S' },
  { 'fillStyle': '#5D6D7E', 'text': 'T' },
  { 'fillStyle': '#CD6155', 'text': 'U' },
  { 'fillStyle': '#C39BD3', 'text': 'V' },
  { 'fillStyle': '#85C1E9', 'text': 'W' },
  { 'fillStyle': '#F7DC6F', 'text': 'X' },
  { 'fillStyle': '#EB984E', 'text': 'Y' },
  { 'fillStyle': '#5D6D7E', 'text': 'Z' }
];

var elementos_copy = elementos;
//

//
window.onload = function(url){
 // $("body").css({"background-image":"url("+url+"/resources/img/backgrounds/background_two.png"});
}


dibujarRuleta(elementos);
//
 function dibujarRuleta(elementos){
   this.duration = Math.random(1,4) * 10;
   miRuleta = new Winwheel({
       'numSegments': elementos.length, 
       'outerRadius'    : 150, 
       'outerRadius'     : 190,
        'innerRadius'     : 35,     
        'textFontSize'    : 15,       
        'centerX'     : 200,  
        'centerY'     : 201,
        'textMargin'      : 35,
        'pins' : true,
        'segments':elementos,
        'animation': { 
            'type': 'spinToStop', 
            'duration': this.duration, 
            'callbackFinished': 'Mensaje()', 
            'callbackAfter': 'dibujarIndicador(miRuleta)'
        }
     });   
    dibujarIndicador(miRuleta);
 }


 	

function Mensaje() {
   var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
   var letter_select = SegmentoSeleccionado.text;
   assoc_letter(letter_select);
   showResponseCheck(letter_select);
   miRuleta.stopAnimation(false);
   miRuleta.rotationAngle = 0;
   miRuleta.draw();
   letter_ping = SegmentoSeleccionado.text;
   dibujarIndicador();
}

function seleccionado(SegmentoSeleccionado){
   var letter_select = SegmentoSeleccionado.text;
   var long_array = SegmentoSeleccionado.segments.length;
   console.log(long_array);
   console.log(letter_select);
 }

function dibujarIndicador() {
  //cabecera ruleta
  ctx = miRuleta.ctx;
    ctx.strokeStyle = '#BA3706';     
    ctx.fillStyle = '#F77849';     
    ctx.lineWidth = 3;
    ctx.beginPath();             
    ctx.moveTo(170, 13);
    ctx.lineTo(169, 7);
    ctx.lineTo(200,5);
    ctx.lineTo(231,7);
    ctx.lineTo(230,13);
    ctx.lineTo(200,10);
    ctx.lineTo(170,13);
   // ctx.lineTo(105, 0);
    //ctx.moveTo(100, 30);
    //ctx.lineTo(130,0);         
    ctx.stroke();                
    ctx.fill(); 

    //Flecha
    ctx = miRuleta.ctx;
        ctx.strokeStyle = '#BA3706';     
    ctx.fillStyle = '#F77849';    
    ctx.lineWidth = 3;
    ctx.beginPath();             
    ctx.moveTo(190, 0);
    ctx.lineTo(192, 13);
    ctx.lineTo(180, 30);
    ctx.lineTo(200, 60);
    ctx.lineTo(220, 30);
    ctx.lineTo(210, 13);//pe
    ctx.lineTo(212, 0);
    ctx.lineTo(190, 0);
   // ctx.lineTo(105, 0);
    //ctx.moveTo(100, 30);
    //ctx.lineTo(130,0);         
    ctx.stroke();                
    ctx.fill(); 

    //flecha
    ctx = miRuleta.ctx;
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.lineWidth = 5;
    ctx.beginPath(); 
    ctx.arc(200,10,2,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fill();





    //centro
    //circulo
    ctx = miRuleta.ctx;
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.lineWidth = 5;
    ctx.beginPath(); 
    ctx.arc(200,201,32,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fill();


    ctx = miRuleta.ctx;
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.lineWidth = 5;
    ctx.beginPath(); 
    ctx.arc(200,200,25,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fill();

    ctx = miRuleta.ctx;
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.lineWidth = 5;
    ctx.beginPath(); 
    ctx.arc(200,200,15,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fill();

    //soporte ruleta
    ctx = miRuleta.ctx;
    ctx.strokeStyle = '#7B4A0A';     
    ctx.fillStyle = '#A96917';     
    ctx.lineWidth = 2;
    ctx.beginPath();             
    ctx.moveTo(135, 379);
    ctx.lineTo(125, 385);
    ctx.lineTo(200, 400);
    ctx.lineTo(281, 385);
    ctx.lineTo(268, 379);
    ctx.lineTo(255, 383);
    ctx.lineTo(245, 386);
    ctx.lineTo(235, 388);
    ctx.lineTo(223, 390);
    ctx.lineTo(215, 391);
    ctx.lineTo(200, 392);
    ctx.lineTo(189, 392);
    ctx.lineTo(179, 391);
    ctx.lineTo(168, 389);
    ctx.lineTo(150, 385);
    ctx.lineTo(143, 383);
    ctx.lineTo(135,380);
    //ctx.lineTo(130, 415);
   //ctx.lineTo(13, 379);
    ctx.stroke();                
    ctx.fill(); 

    //soporte izquierdo
    ctx = miRuleta.ctx;
    ctx.strokeStyle = '#7B4A0A';     
    ctx.fillStyle = '#A96917';     
    ctx.lineWidth = 2;
    ctx.beginPath();             
    ctx.moveTo(140, 388);
    ctx.lineTo(100, 450);
    ctx.lineTo(120, 450);
    ctx.lineTo(150, 389);
    ctx.stroke();                
    ctx.fill(); 

    //soporte derecho
    ctx = miRuleta.ctx;
    ctx.strokeStyle = '#7B4A0A';     
    ctx.fillStyle = '#A96917';     
    ctx.lineWidth = 2;
    ctx.beginPath();             
    ctx.moveTo(268, 386);
    ctx.lineTo(300, 450);
    ctx.lineTo(280, 450);
    ctx.lineTo(259, 388);
    ctx.stroke();                
    ctx.fill(); 

    //soporte palancas

    ctx = miRuleta.ctx;
    ctx.strokeStyle = '#7B4A0A';     
    ctx.fillStyle = '#A96917';     
    ctx.lineWidth = 3;
    ctx.beginPath();             
    ctx.moveTo(195, 430);
    ctx.lineTo(136, 420);
    ctx.lineTo(142, 410);
    ctx.lineTo(200, 420);
    ctx.lineTo(265, 410);
    ctx.lineTo(268, 419);
    ctx.lineTo(205, 430);
    //soporte palancas
    ctx.lineTo(205, 450);
    ctx.lineTo(340, 450);
    ctx.lineTo(340, 465);
    ctx.lineTo(58, 465);
    ctx.lineTo(58, 450);
    ctx.lineTo(195, 450);
    ctx.lineTo(195, 430);
    ctx.stroke();                
    ctx.fill(); 


     //base ruleta

     //soporte palancas
}





function assoc_letter(letter_select){
var long_array = words.length - 1;
  for (var i = 0; i <= long_array; i++) {
    if(words[i]["letter"] == letter_select.toLowerCase()){
      $(".video-word p").html("<span>"+words[i]["words"][0]["word"]+"</span>");
    }
   }
}

function nextStep(response){
  if(response==1){
    deleteSegment();
    $("#record-modal").modal("hide");
  }else{
    $("#record-modal").modal("hide");
  }
}


function deleteSegment()
{
  for (var i = 0; i < elementos.length; i++) {
    if(elementos[i]["text"] == letter_ping){
      elementos.splice(i,1);
    }
  }
  dibujarRuleta(elementos);
}

function restart(){
   location.reload();
}



function showResponseCheck(Segmento){
  $("#record-modal").modal("show");
  $(".title").html("<h3>"+Segmento+url+"</h3>");
  var src_img = url + "img/letter/"+Segmento+".png";
  var src_vid_letter = url + "video/abecedario/" + Segmento+".mp4";
  var src_vid_word = "";
  for (var i = 0;  i < words.length; i++) {
    if(words[i]["letter"].toLowerCase()==Segmento.toLowerCase()){
     src_vid_word = url + "video/palabras/" + words[i]["words"][0]["representation"];
    }
  }
  $(".img-letter img").attr("src",src_img);
  $(".video-letter video").attr("src",src_vid_letter);
  $(".video-word video").attr("src",src_vid_word);
  $(".video-letter p").html("<span>"+Segmento+"</span>")
}


