import { Component, OnInit } from '@angular/core';
import { GetinfoService } from '../getinfo.service';


@Component({
  selector: 'app-indexproducts',
  templateUrl: './indexproducts.component.html',
  styleUrls: ['./indexproducts.component.css']
})
export class IndexproductsComponent implements OnInit {
products=[];
  constructor(private service:GetinfoService) { }

  ngOnInit() {
    this.service.indexProducts().subscribe((data:any)=>{this.products=data.output});
  }

}
