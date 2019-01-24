import { Component, OnInit, Input } from '@angular/core';
import { InterstellService } from '../interstell.service';

@Component({
  selector: 'app-cakedisplay',
  templateUrl: './cakedisplay.component.html',
  styleUrls: ['./cakedisplay.component.css']
})
export class CakedisplayComponent implements OnInit {
  @Input() displayedcake;
  constructor(private _InterstellService: InterstellService) { }

  ngOnInit() {
  }

}
