import { Component, OnInit } from '@angular/core';
import {CoinsService} from '../coins.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  money;
  constructor(private _coinsservice:CoinsService){
    
  }

  ngOnInit() {
    this.money=this._coinsservice.coinbalance();
  }
  buycoins(){
    this._coinsservice.changemoney(2);
    console.log(this._coinsservice.coins,"Coins aquired")
    this._coinsservice.addledgerentry("You bought 2 coins");
    this.money=this._coinsservice.coinbalance();
  }
}
