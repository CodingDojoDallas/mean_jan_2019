import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {CoinsService} from '../coins.service';

@Component({
  selector: 'app-ledgerdetails',
  templateUrl: './ledgerdetails.component.html',
  styleUrls: ['./ledgerdetails.component.css']
})
export class LedgerdetailsComponent implements OnInit {
ledgerentry={id:null,text:''};
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _coinsservice: CoinsService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['ledgerid'])
      this.ledgerentry=this._coinsservice.ledgertext()[(params['ledgerid']-1)];
      console.log('got the ledger entry',this.ledgerentry);
  });
  }

}
