import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {WeatherdataService} from '../weatherdata.service'
@Component({
  selector: 'app-berlin',
  templateUrl: './berlin.component.html',
  styleUrls: ['./berlin.component.css']
})
export class BerlinComponent implements OnInit {
info={name:'',tempnow:null, weather:[{icon:null, description: null}]};
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _weatherinfo: WeatherdataService) { }

ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    });
    this._weatherinfo.getweather(2950159).subscribe((data:any) => {
      console.log("got the berlin info",data)
      this.info=data;
      this.info.tempnow=Math.round((data.main.temp)*9/5-459);
    })
}

}
