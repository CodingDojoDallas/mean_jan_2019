import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {WeatherdataService} from '../weatherdata.service'

@Component({
  selector: 'app-cincinnati',
  templateUrl: './cincinnati.component.html',
  styleUrls: ['./cincinnati.component.css']
})
export class CincinnatiComponent implements OnInit {
  info={name:'',tempnow:null, weather:[{icon:null, description: null}]};
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _weatherinfo: WeatherdataService) { }

ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    });
    this._weatherinfo.getweather(4508722).subscribe((data:any) => {
      console.log("got the cincinnati info:",data)
      this.info=data;
      this.info.tempnow=Math.round((data.main.temp)*9/5-459);
    })
}

}
