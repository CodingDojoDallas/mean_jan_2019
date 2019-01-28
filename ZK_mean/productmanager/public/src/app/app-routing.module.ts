import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { IndexproductsComponent } from './products/indexproducts/indexproducts.component';
import { NewproductComponent } from './products/newproduct/newproduct.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { ShowproductComponent } from './products/showproduct/showproduct.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent,children:[
    {path:'',component:IndexproductsComponent},
    {path:'new',component:NewproductComponent},
    {path:':id/edit',component:EditproductComponent},
    {path:':id',component:ShowproductComponent},
  ]},
  {path:'**',redirectTo:'/products'},
  {path:'',pathMatch:'full',redirectTo:'/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
