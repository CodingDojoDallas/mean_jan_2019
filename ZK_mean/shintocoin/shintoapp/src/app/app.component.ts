import { Component } from '@angular/core';
import {CoinserviceService} from './coinservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shintoapp';
  constructor(private _coinservice: CoinserviceService){
    
  }
}
