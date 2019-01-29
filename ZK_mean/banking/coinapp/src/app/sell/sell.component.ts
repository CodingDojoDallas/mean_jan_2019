import { Component, OnInit } from '@angular/core';
import {CoinsService} from '../coins.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  money;
  constructor(private _coinsservice:CoinsService){
    
  }

  ngOnInit() {
    this.money=this._coinsservice.coinbalance();
  }
  sellcoins(){
    this._coinsservice.changemoney(-1);
    console.log(this._coinsservice.coins,"Coins aquired")
    this._coinsservice.addledgerentry("You sold a coin");
    this.money=this._coinsservice.coinbalance();
  }
}
