import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { CustomMaterialModule } from './custom-material.module'
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HomeModule // <- 加入homemodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
