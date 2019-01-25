import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

import { Product } from '../product/product.class';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.css']
})
export class ProductsAllComponent implements OnInit {
  products: Product[];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    console.log('ProductsAllComponent.ngOnInit');

    // initialize class attributes when Angular initializes this component
    this.products = [];

    // create observable and subscribe ($.get('/products', function(products_data) { ... })) in JQuery
    this._productsService.products().subscribe(
      // this is the callback function
      (products_data: Object[]) => {
        console.log('ProductsAllComponenet - projects_data:', products_data);
        this.products = products_data['products'];
    });
  }
}
