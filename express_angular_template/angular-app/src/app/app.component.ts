import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Object[];
  user: Object;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.users = [];
    this.user = {'name': '', 'email': ''};
  }

  submitForm() {
    console.log('submitForm() - .ts:', this.user);
    this._httpService.submitForm(this.user).subscribe(data => {
      console.log('we did it');
    });
    // this.user = {'name': '', 'email': ''};
  }

  setUser(user_set) {
    console.log('setUser', user_set);
    this.user = user_set;
  }

  showUsers() {
    this._httpService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
}
