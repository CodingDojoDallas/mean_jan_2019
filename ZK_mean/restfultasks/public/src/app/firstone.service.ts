import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstoneService {

  constructor(private _http: HttpClient) { }

  indexTasks() {
    return this._http.get('/all');
  }
  showTask(id) {
    return this._http.get('/'+id);
  }
  createTask(edits) {
    return this._http.post('/new',edits);
  }
  editTask(id,edits) {
    return this._http.put('/'+id,edits);
  }
  deleteTask(id) {
    return this._http.delete('/destroy/'+id);
  }
  summonVader(){
    return this._http.get('https://swapi.co/api/people/4/');
  }
  getPlanet(url){
    return this._http.get(url);
  }

}
