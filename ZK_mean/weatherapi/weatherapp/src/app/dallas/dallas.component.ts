import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {WeatherdataService} from '../weatherdata.service'
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  info={name:'',tempnow:null, weather:[{icon:null, description: null}]};
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _weatherinfo: WeatherdataService) { }

ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    });
    this._weatherinfo.getweather(4684888).subscribe((data:any) => {
      console.log("got the dallas info???:",data)
      this.info=data;
      this.info.tempnow=Math.round((data.main.temp)*9/5-459);
    })
}

}
