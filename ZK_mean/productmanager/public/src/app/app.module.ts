import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { IndexproductsComponent } from './products/indexproducts/indexproducts.component';
import { ShowproductComponent } from './products/showproduct/showproduct.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { NewproductComponent } from './products/newproduct/newproduct.component';
import { GetinfoService } from './products/getinfo.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    IndexproductsComponent,
    ShowproductComponent,
    EditproductComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [GetinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
