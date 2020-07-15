import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkScrollableModule, ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { VirtualComponent } from './virtual/virtual.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { PaisesComponent } from './paises/paises.component';


@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragndropComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkScrollableModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
