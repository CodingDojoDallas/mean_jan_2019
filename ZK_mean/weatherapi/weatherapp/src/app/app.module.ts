import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DallasComponent } from './dallas/dallas.component';
import { CincinnatiComponent } from './cincinnati/cincinnati.component';
import { IthacaComponent } from './ithaca/ithaca.component';
import { PortlandComponent } from './portland/portland.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { BerlinComponent } from './berlin/berlin.component';

import {HttpClientModule} from '@angular/common/http';

import {WeatherdataService} from './weatherdata.service';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DallasComponent,
    CincinnatiComponent,
    IthacaComponent,
    PortlandComponent,
    TokyoComponent,
    BerlinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
