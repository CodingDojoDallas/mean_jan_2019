import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {WeatherdataService} from '../weatherdata.service'
@Component({
  selector: 'app-portland',
  templateUrl: './portland.component.html',
  styleUrls: ['./portland.component.css']
})
export class PortlandComponent implements OnInit {
  info={name:'',tempnow:null, weather:[{icon:null, description: null}]};
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _weatherinfo: WeatherdataService) { }

ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log(params['id'])
    });
    this._weatherinfo.getweather(4720131).subscribe((data:any) => {
      console.log("got the portland info:",data)
      this.info=data;
      this.info.tempnow=Math.round((data.main.temp)*9/5-459);
    })
}

}
