import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PvTableIndexModule } from 'projects/ngx-pv-table-index/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PvTableIndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
