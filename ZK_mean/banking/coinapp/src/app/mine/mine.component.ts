import { Component, OnInit } from '@angular/core';
import {CoinsService} from '../coins.service';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
money;
  constructor(private _coinsservice:CoinsService){
    
  }

  ngOnInit() {
    this.money=this._coinsservice.coinbalance();
  }
  minecoins(){
    this._coinsservice.changemoney(1);
    console.log(this._coinsservice.coins,"Coins aquired")
    this._coinsservice.addledgerentry("You mined 1 coin");
    this.money=this._coinsservice.coinbalance();
  }
}
