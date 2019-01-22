import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamestuffService {

  constructor(private _http:HttpClient) { }
  
  createGame(){
    return this._http.get('/games/new');
  }
  saveGame(id,edits){
    console.log("service function id & edits",id,edits);
    return this._http.put('/games/'+id,edits);
  }
  continueGame(name){
    return this._http.get('/games/continue/'+name);
  }
}
