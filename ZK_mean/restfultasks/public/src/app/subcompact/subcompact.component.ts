import { Component, OnInit, Input } from '@angular/core';
import {FirstoneService} from '../firstone.service'



@Component({
  selector: 'app-subcompact',
  templateUrl: './subcompact.component.html',
  styleUrls: ['./subcompact.component.css']
})
export class SubcompactComponent implements OnInit {
  @Input() showingtask;
  constructor(private _firstoneService: FirstoneService) { }

  ngOnInit() {
  }
  editTask(id) {
    this._firstoneService.editTask(id,this.showingtask).subscribe((data: any) => {
      console.log('edited task data',data)
      this.showingtask= data;
      console.log("editing works");
    });
  }

}
