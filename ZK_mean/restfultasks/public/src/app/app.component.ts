import { Component, OnInit } from '@angular/core';
import {FirstoneService} from './firstone.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newtask={};
  alltasks;
  showtask={};
  editedtask={};
  deletedtask;
  title = 'public';
  
  constructor (private _firstoneService: FirstoneService){
    // this.createTask({title:'newtask123',description:'the newest task1234'});
    // this.indexTasks();
    // this.showTask('5c3f87b37908d22ad4cce8d8');
    // this.editTask('5c425322886a8a2ce80f3248',{title:"REEALY NEW TITLE",description:"NewDescription"});
    // this.deleteTask('5c425a11a60771283c110787');
    // this.summonVader();
  }
  ngOnInit(){
    this.indexTasks();
  };
  summonVader(){
    this._firstoneService.summonVader().subscribe((data:any) =>{
      console.log('Vader has ',data.skin_color," skin, and ",data.eye_color," eyes.");
      this._firstoneService.getPlanet(data.homeworld).subscribe((planetdata:any) =>{
        console.log('Vader is from ',planetdata.name,". Also home to ",planetdata.residents.length," other characters in the Star Wars Univers.")
      });
    })
  }
  indexTasks() {
    this._firstoneService.indexTasks().subscribe((data: any) => {
      this.alltasks = data;
    });
  }
  showTask(id) {
    console.log('showTask was invoked',id);
    this._firstoneService.showTask(id).subscribe((data: any) => {
      this.showtask = data;
      console.log("show task data", this.showtask);
    });
  }
  createTask() {
    this._firstoneService.createTask(this.newtask).subscribe((data: any) => {
      console.log('created task data:',data)
      this.newtask = data.task;
      this.indexTasks();
    });
  }
  deleteTask(id) {
    this._firstoneService.deleteTask(id).subscribe((data: any) => {
      console.log('deleted task data:',data)
      this.deletedtask = data;
      this.indexTasks();
    });
  }
  editTask(id) {
    this._firstoneService.editTask(id,this.showtask).subscribe((data: any) => {
      console.log('edited task data',data)
      this.editedtask = data;
      this.showTask= data;
      this.indexTasks();
    });
  }

}