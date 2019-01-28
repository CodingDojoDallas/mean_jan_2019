import { Component, OnInit, Input } from '@angular/core';
import { GetinfoService } from '../getinfo.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
@Input () product:any;
  constructor(private service:GetinfoService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      if (!this.product){
        this.service.showProduct(params.id).subscribe((data:any)=>{
          this.product=data.output;
        })
      };
    });
  };
  deleteproduct(){
    this.service.deleteProduct(this.product._id).subscribe((data: any)=>{
      console.log("product deleted success");
      this._router.navigate(['/products']);
    });
  }

}
