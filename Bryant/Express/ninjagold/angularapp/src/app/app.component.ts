import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total_gold=0;
  farm: number;
  cave: number;
  house: number;
  casino: number;
  actlog = [];

  constructor(private _httpservice: HttpService){

  }
  

  farmG(){
    this.farm = Math.floor(Math.random() * 4) + 2;
    this.total_gold += this.farm;
    this.actlog.unshift(`You earned ${this.farm} gold at the farm`);
    
  }

  caveG(){
    this.cave= Math.floor(Math.random() * 6) +5;
    this.total_gold += this.cave;
    this.actlog.unshift(`You earned ${this.cave} gold at the cave`);
  }

  houseG(){
    this.house= Math.floor(Math.random() * 9) +7;
    this.total_gold += this.house;
    this.actlog.unshift(`You earned ${this.house} gold at the house`);
  }

  casinoG(){
    this.casino= Math.floor(Math.random() * 201) -100;
    this.total_gold += this.casino;
    if(this.casino > 0){
    this.actlog.unshift(`You earned ${this.casino} gold at the casino`);
    }
    if(this.casino < 0){
      this.actlog.unshift(`You lost ${Math.abs(this.casino)} gold at the casino`);
      }
  }

  save(){

  }

}
