import { Component, OnInit } from '@angular/core';
import { GetinfoService } from '../getinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  newproduct={name:'',description:'',img_url:'',price:''}
  displayerrors=[];
  constructor(private service:GetinfoService, private _router:Router) { }

  ngOnInit() {
  }
  newProduct(){
    this.service.createProduct(this.newproduct).subscribe((data:any)=>{
      console.log('product created');
      if (data.errors){
        console.log(data.errors.errors,"validation errors");
        for (let i in data.errors.errors){
          this.displayerrors.push(data.errors.errors[i].message);
        }
      }
      else {this._router.navigate(['products'])};
    });
  }
}
