import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  all_task: any;
  show_task: any;
  new_task: any;


  constructor(private _httpservice: HttpService) {
    console.log("ComponentAPPPP");
    

  }
  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.allTask;
  }
  onCreate(){
    let observable =this._httpservice.createTask(this.new_task);
    observable.subscribe(data => {
      console.log('Got data from post', data);
      this.new_Task = { title: "", description: "" }
    })
    
  }


   getTasks() {
    this._httpservice.getTasks().subscribe((data: any) =>{ console.log("Got our tasks!", data);
    this.all_task = data.data;
    console.log('all tasks', data);
  	});
  }
  showTask(id) {
  	this._httpservice.showTask(id).subscribe((data:any) => {console.log("Displaying the task!", data);
  	this.show_task =data.data;
    console.log('show task', data);
  	});
  }

  editTask(id) {
    this._httpservice.editTask(id).subscribe((data:any) => {console.log("Editing the task!", data);
    this.
    });
  }
}
