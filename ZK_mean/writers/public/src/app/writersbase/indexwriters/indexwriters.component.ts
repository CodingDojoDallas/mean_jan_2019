import { Component, OnInit } from '@angular/core';
import {AuthorinfoService} from '../authorinfo.service';

@Component({
  selector: 'app-indexwriters',
  templateUrl: './indexwriters.component.html',
  styleUrls: ['./indexwriters.component.css']
})
export class IndexwritersComponent implements OnInit {
writers=[];
  constructor(private _aiservice:AuthorinfoService) { }

  ngOnInit() {
    this._aiservice.indexWriters().subscribe((data:any)=>{this.writers=data});
    console.log('got the writers',this.writers);
  }

}
