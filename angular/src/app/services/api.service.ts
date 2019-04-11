import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = '';
  constructor() { 
    this.url = "http://senainclusord.000webhostapp.com/";
  }
}
