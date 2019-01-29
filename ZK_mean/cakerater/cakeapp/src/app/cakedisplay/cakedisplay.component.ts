import { Component, OnInit, Input } from '@angular/core';
import { InterstellService } from '../interstell.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-cakedisplay',
  templateUrl: './cakedisplay.component.html',
  styleUrls: ['./cakedisplay.component.css']
})
export class CakedisplayComponent implements OnInit {
  @Input() displayedcake;
  constructor(private _InterstellService: InterstellService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log(params['id'])
    });
  };
  goHome() {
    this._router.navigate(['/home']);
  };
}
