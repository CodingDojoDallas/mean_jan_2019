import { Component, OnInit } from '@angular/core';
import { InterstellService} from './interstell.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakeapp';
  allcakes;
  newcake: object = {};
  displaycake;
  constructor(private _InterstellService:InterstellService){

  }

  ngOnInit(){
    this.indexCakes();
  }

  indexCakes() {
    this._InterstellService.indexCakes().subscribe((data: any) => {
      this.allcakes = data;
      console.log("allthecakes:",this.allcakes);
    });
  }
  showCake(id) {
    console.log('showTask was invoked',id);
    this._InterstellService.showCake(id).subscribe((data: any) => {
      // this.showtask = data;
    });
  }
  createCake() {
    this._InterstellService.createCake(this.newcake).subscribe((data: any) => {
      console.log('created task data:',data);
      this.newcake={};
    });
  }
  deleteCake(id) {
    this._InterstellService.deleteCake(id).subscribe((data: any) => {
      console.log('deleted task data:',data)
      // this.deletedtask = data;
      // this.indexCakes();
    });
  }
  editTask(id) {
    this._InterstellService.editCake(id,this.newcake).subscribe((data: any) => {
      console.log('edited task data',data)
      // this.editedtask = data;
      // this.showTask= data;
      // this.indexCakes();
    });
  }
  displayCake(cake){
    this.displaycake=cake;
    var summer=0;
    for (var i=0; i<this.displaycake.comments.length;i++){
      summer+= parseInt(this.displaycake.comments[i].stars);
    }
    this.displaycake.avg=Math.round(summer/this.displaycake.comments.length);
    console.log('AVERAGE:',this.displaycake.avg);
  }
  addcomment(cake){
    this._InterstellService.editCake(cake._id,{comment:cake.newcommenttext,stars:cake.newcommentstars}).subscribe((data: any) => {
    })
  }

}
