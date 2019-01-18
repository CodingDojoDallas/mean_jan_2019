import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FirstoneService} from './firstone.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task;
  tasks;
  title = 'public';
  
  constructor (private _firstoneService: FirstoneService){
    // this.indexTasks();
    // this.showTask('5c3f87b37908d22ad4cce8d8');
    // this.createTask({title:'newtask',description:'the newest task'});
    // this.deleteTask(1);
    // this.editTask(3,{title:"NewTitle"});
    this.summonVader();
  }
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
      this.tasks += data;
    });
  }
  showTask(id) {
    this._firstoneService.showTask(id).subscribe((data: any) => {
      this.task = data;
    });
  }
  // createTask() {
  //   this._firstoneService.createTask(taskinfo).subscribe((data: any) => {
  //     this.tasks += data;
  //   });
  // }
  deleteTask(id) {
    this._firstoneService.deleteTask(id).subscribe((data: any) => {
      this.tasks += data;
    });
  }
  editTask(id,edits) {
    this._firstoneService.editTask(id,edits).subscribe((data: any) => {
      this.tasks += data;
    });
  }

}