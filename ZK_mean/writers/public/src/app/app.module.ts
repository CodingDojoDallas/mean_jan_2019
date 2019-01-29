import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthorinfoService} from './writersbase/authorinfo.service';
import { WritersbaseComponent } from './writersbase/writersbase.component';
import { NewwriterComponent } from './writersbase/newwriter/newwriter.component';
import { EditwriterComponent } from './writersbase/editwriter/editwriter.component';
import { ShowwriterComponent } from './writersbase/showwriter/showwriter.component';
import { IndexwritersComponent } from './writersbase/indexwriters/indexwriters.component'

@NgModule({
  declarations: [
    AppComponent,
    WritersbaseComponent,
    NewwriterComponent,
    EditwriterComponent,
    ShowwriterComponent,
    IndexwritersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule
  ],
  providers: [AuthorinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
