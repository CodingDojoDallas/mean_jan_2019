import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterstellService {

  constructor(private _http: HttpClient) { }

  indexCakes() {
    return this._http.get('/cakes/all');
  }
  showCake(id) {
    return this._http.get('/cakes/'+id);
  }
  createCake(edits) {
    return this._http.post('/cakes/new',edits);
  }
  editCake(id,newcomment) {
    console.log("service assist",id,newcomment);
    return this._http.put('/cakes/'+id,newcomment);
  }
  deleteCake(id) {
    return this._http.delete('/cakes/destroy/'+id);
  }

}
