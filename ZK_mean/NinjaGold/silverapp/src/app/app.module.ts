import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamestuffService} from './gamestuff.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [GamestuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
