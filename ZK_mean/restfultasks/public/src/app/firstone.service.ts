import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstoneService {

  constructor(private _http: HttpClient) { }

  indexTasks() {
    return this._http.get('/tasks');
  }
  showTask(id) {
    return this._http.get('/'+id);
  }
  createTask(taskinfo) {
    return this._http.post('/new',{taskinfo});
  }
  editTask(id,edits) {
    return this._http.put('/edit'+id,{edits});
  }
  deleteTask(id) {
    return this._http.get('/destroy/'+id);
  }

}
