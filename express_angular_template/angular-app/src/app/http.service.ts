import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get('/users');
  }

  submitForm(some_user) {
    console.log('submitForm() - service', some_user);

    return this._http.put(`/users/${some_user._id}`, some_user);
  }
}
