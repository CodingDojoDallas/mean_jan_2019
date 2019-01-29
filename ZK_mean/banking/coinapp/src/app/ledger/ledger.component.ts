import { Component, OnInit } from '@angular/core';
import {CoinsService} from '../coins.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  text=[];
  constructor(private _coinsservice:CoinsService){
    
  }

  ngOnInit() {
    this.text=this._coinsservice.ledgertext();
    console.log(this.text,'loaded ledger');

  }
}
