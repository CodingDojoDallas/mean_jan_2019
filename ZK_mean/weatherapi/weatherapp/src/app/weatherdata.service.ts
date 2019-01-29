import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private _http: HttpClient) { }

  getweather(cityid){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=62093d2385cf68d79ee10991027b620a`)
  };
}