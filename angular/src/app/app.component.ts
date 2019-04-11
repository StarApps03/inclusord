import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inclusord';
  name:string = "juenada";

  constructor(){
  }
  popup: any;
ngOnInit():void{
//this.popup=window.open('https://www.w3schools.com','newwindow','width=300,height=200');
}
ngAfterViewInit() {
//this.popup.close();
} 

  isvalid = 1;
}
