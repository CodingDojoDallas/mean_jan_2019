import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorinfoService} from '../authorinfo.service';


@Component({
  selector: 'app-newwriter',
  templateUrl: './newwriter.component.html',
  styleUrls: ['./newwriter.component.css']
})
export class NewwriterComponent implements OnInit {
  newwriter={name:''};
  writers={};
  constructor(private _router:Router,private _aiservice:AuthorinfoService) { }

  ngOnInit() {
    this._aiservice.indexWriters().subscribe((data:any)=>{this.writers=data});
    console.log('got the writers',this.writers);
    this._aiservice.deleteWriters("123").subscribe((data:any)=>{});
    this._aiservice.createWriters(this.newwriter);
    console.log('create component function run');


  }
  createwriter(){
    this._aiservice.createWriters(this.newwriter).subscribe((data:any)=>{});
    console.log('create component function run');
  }
}
