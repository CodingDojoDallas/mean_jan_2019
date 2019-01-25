import { Component } from '@angular/core';
import {CoinsService} from './coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coinapp';
  constructor(private _coinsservice:CoinsService){
    
  }
}
