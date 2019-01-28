import { Component, OnInit } from '@angular/core';
import { GetinfoService } from '../getinfo.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  editproduct={name:'',description:'',img_url:'',price:'',_id:0}
  displayerrors=[];
  constructor(private service:GetinfoService, private _route:ActivatedRoute, private _router:Router) { }
  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.service.showProduct(params.id).subscribe((data:any)=>{
        this.editproduct=data.output
        });
    });
  }
  updateProduct(){
    this.service.editProduct(this.editproduct._id,{edits:this.editproduct}).
      subscribe((data:any)=>{
        if (data.error){
          console.log(data.error.errors,"validation errors");
          for (let i in data.error.errors){
            this.displayerrors.push(data.error.errors[i].message);
          }
        }
        else {this._router.navigate(['products'])};
      });
    }
    deleteproduct(){
    this.service.deleteProduct(this.editproduct._id).subscribe((data: any)=>{
      console.log("product deleted success");
      this._router.navigate(['products']);
    });
  }

}
