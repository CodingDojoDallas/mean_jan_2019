import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {WeatherdataService} from '../weatherdata.service'
@Component({
  selector: 'app-tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.css']
})
export class TokyoComponent implements OnInit {
  info={name:'',tempnow:null, weather:[{icon:null, description: null}]};
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _weatherinfo: WeatherdataService) { }

ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log(params['id'])
    });
    this._weatherinfo.getweather(1850147).subscribe((data:any) => {
      console.log("got the tokyo info:",data)
      this.info=data;
      this.info.tempnow=Math.round((data.main.temp)*9/5-459);
    })
}

}
