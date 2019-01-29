import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  constructor(private _http:HttpClient) { }
  indexProducts(){
    return this._http.get('/api/products/index');
  }
  showProduct(id){
    return this._http.get('/api/products/'+id);
  }
  createProduct(edits){
    console.log("SERVICE create function run");
    return this._http.post('/api/products/new',edits);
  }
  editProduct(id,edits){
    console.log("SERVICE edit function run");
    return this._http.put('/api/products/'+id,edits);
  }
  deleteProduct(id){
    return this._http.delete('/api/products/'+id);
  }

}
