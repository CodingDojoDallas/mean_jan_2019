import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { 
    this.showSw();
    this.planet();
  }

  showSw(){
    return this._http.get('https://swapi.co/api/people/3/');
  }
  planet(){
    return this._http.get('https://swapi.co/api/planets/8/');
  }
}
