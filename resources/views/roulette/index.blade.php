@extends("layouts.app")

@section('content')
<div class="ruleta">
<canvas id='canvas' height="470" width="600"></canvas>
  <div class="options">
    <a onclick="miRuleta.startAnimation();" class="btn-start">
      <img src="https://rxconcile.com/wp-content/themes/rxconcile/assets/img/playButton.png">
    </a>
    <a onclick="restart();" class="btn-reload">
      <img src="https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX5721291.jpg">
    </a>
 </div>
</div>

<div class="modal fade" id="record-modal" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="img-letter">
          <img src="">
        </div>
        <div class="row">
           <div class="col-xs-12 col-md-6">
            <div class="video-letter">
              <video src="" controls="controls"></video>
              <p class="text-center"></p>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="video-word">
              <video src="" controls="controls"></video>
              <p></p>
            </div>
          </div>
           <div class="col-xs-12 col-md-12">
            <div class="options text-center">
              <a href="#" class="btn btn-danger" onclick="nextStep('0')">Cancelar</a>
              <a href="#" class="btn btn-success" onclick="nextStep('1')">Continuar</a>
            </div>
          </div>
        </div>
         
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->





 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <script src="{{asset('assets/js/routletController.js')}}"></script>
 <script>
   window.onload = function(){
    $(".ring").hide();
   }
 </script>
 <style type="text/css">
 	body{
	background: #0000;
    position: fixed;
    background-attachment: cover;
    width: 100%;
    height: 100%;
}
.img-letter img{
    display: block;
    margin: auto;
}
.video-letter video, .video-word video{
	width: 98%;
	margin: auto;
}
.video-letter,.video-word{
	padding: 15px;
}
.video-letter p span,.video-word p{
	font-size: 30px;
    font-family: cursive;
    text-align: center;
}
.ruleta{
	width: 600px;
	display: block;
	margin: 100px auto 0;
}
#canvas {
    width: 100%;
    margin-left: 50px;
}
.options{
    display: block;
    margin: 7px auto 6px 210px;
    max-width: 300px;
    text-align: center;
    width: 178px;
}
    #canvasContainer {
    position: relative;
    width: 300px;
}
 
#canvas {
    z-index: 1;
}
 
#prizePointer {
    position: absolute;
    left: 125px;
    top: 10px;
    z-index: 999;
}
.ruleta {
    
}


.preloader{
    background: rgba(0,0,0,0.1);
    position: fixed;
    height: 100%;
    width: 100%;
}
.preloader .loader{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100px;
    width: 100px;
    border: 10px red solid;
    border-top: 7px #777 solid;
    border-radius: 50px;
    animation-name: girar;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    border-style: groove;
}

.btn-start,.btn-reload{
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: block;
    cursor: pointer;
    float: left;
}
.btn-start img,.btn-reload img{
    width: 100%;
}

.btn-start:hover,.btn-reload:hover{
    transform: scale(1.2);
}
@keyframes girar {
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

@media (max-width: 520px){
    #canvas {
    width: 100%;
    margin-left: 23px;
    }
}

@media (max-width: 490px){
    #canvas {
    width: 90%;
    margin-left: 23px;
    }
}
@media (max-width: 450px){
    #canvas {
    width: 80%;
    margin-left: 17px;
    }
}

@media (max-width: 400px){
    #canvas {
    width: 73%;
    margin-left: 28px;
    }
}

@media (max-width: 360px){
    #canvas {
        width: 65%;
        margin-left: 28px;
    }
}

@media (max-width: 340px){
    #canvas {
        width: 55%;
        margin-left: 28px;
    }
}


@media (max-width: 300px){
    #canvas {
        width: 50%;
        margin-left: 28px;
    }
}

@media (max-width: 270px){
    #canvas {
        width: 44%;
        margin-left: 28px;
    }
}

@media (max-width: 250px){
    #canvas {
        width: 43%;
        margin-left: 22px;
    }
}


@media (max-width: 230px){
    #canvas {
        width: 41%;
        margin-left: 21px;
    }
}
 </style>
@endsection