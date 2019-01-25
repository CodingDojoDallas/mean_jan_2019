import { Component, OnInit } from '@angular/core';

import { Product } from './product/product.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() {
    console.log('ProductsComponent.constructor');
  }

  ngOnInit() { }

}
