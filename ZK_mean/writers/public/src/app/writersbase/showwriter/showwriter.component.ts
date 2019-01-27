import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthorinfoService} from '../authorinfo.service';

@Component({
  selector: 'app-showwriter',
  templateUrl: './showwriter.component.html',
  styleUrls: ['./showwriter.component.css']
})
export class ShowwriterComponent implements OnInit {
  @Input() writer:any;

  constructor(private _route:ActivatedRoute, private _aiservice:AuthorinfoService) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      if (!this.writer){
        this._aiservice.showWriters(params.id).subscribe((data:any)=>{
          this.writer=data;
        })
      };
    });
  };
  deletewriter(){
    console.log('delete component function run');
    this._aiservice.deleteWriters(this.writer._id);
  }
}
