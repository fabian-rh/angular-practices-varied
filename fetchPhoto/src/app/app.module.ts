import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayPhotosComponent } from './display-photos/display-photos.component';

import { HttpClientModule } from '@angular/common/http' //Paso 1 - se importa http client module en app.module

@NgModule({
  declarations: [
    AppComponent,
    DisplayPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
