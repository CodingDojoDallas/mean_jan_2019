import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_sw: any;
  home: any;
  
  constructor(private _httpservice: HttpService){
    console.log("HttpService created")
  }
  
  ngOnInit(){
    this.showSw();
    this.planet();
  }

  showSw(){
    this._httpservice.showSw().subscribe((data: any) =>{
    console.log("Got our character!", data);
    this.show_sw = data;
    console.log(this.show_sw + "Works here");

    });
  }

  planet(){
    this._httpservice.planet().subscribe((data:any) => {
    console.log("Got the planet!", data);
    this.home = data;
    });
  }
}
