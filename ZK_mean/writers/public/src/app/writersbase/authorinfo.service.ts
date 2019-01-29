import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorinfoService {

  constructor(private _http:HttpClient) { }
  indexWriters() {
    console.log("service index function runs");
    return this._http.get('/api/writers/all');
  }
  showWriters(id) {
    return this._http.get('/api/writers/'+id);
  }
  createWriters(edits) {
    console.log("create service function run");
    return this._http.get('/api/writers/new');
  }
  editWriters(id,newcomment) {
    return this._http.put('/api/writers/'+id,newcomment);
  }
  deleteWriters(id) {
    console.log('delete service function run');
    return this._http.delete('/api/writers/destroy/'+id);
  }

}
