import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PvTableIndexComponent } from './components/table-index/table-index.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PvTableIndexComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    PvTableIndexComponent
  ]
})
export class PvTableIndexModule { }
