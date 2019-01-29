import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoinsService} from './coins.service';

import {HomeComponent} from './home/home.component';
import {MineComponent} from './mine/mine.component';
import { BuyComponent} from './buy/buy.component';
import { SellComponent} from './sell/sell.component';
import {LedgerComponent} from './ledger/ledger.component';
import { LedgerdetailsComponent } from './ledgerdetails/ledgerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent,LedgerComponent, LedgerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
