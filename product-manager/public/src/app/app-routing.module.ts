import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component'
import { ProductsEditComponent } from './products/products-edit/products-edit.component'
import { ProductsNewComponent } from './products/products-new/products-new.component'
import { ProductsInfoComponent } from './products/products-info/products-info.component'
import { ProductsAllComponent } from './products/products-all/products-all.component'

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    // nested routes
    { path: '', component: ProductsAllComponent },
    { path: ':pid/edit', component: ProductsEditComponent },
    { path: 'new', component: ProductsNewComponent },
    { path: ':pid', component: ProductsInfoComponent },
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
