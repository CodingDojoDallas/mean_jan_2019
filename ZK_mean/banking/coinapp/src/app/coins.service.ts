import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
coins=0;
ledger=[];
lid=1;
  constructor() { }
  coinbalance(){
    return this.coins;
  }
  ledgertext(){
    return this.ledger;
  }
  changemoney(num){
    this.coins+=num;
    return this.coins;
  }
  addledgerentry(str){
    this.ledger.push({text:str,id:this.lid});
    this.lid++;
    return this.ledger;
  }
}
