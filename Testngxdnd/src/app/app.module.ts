import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDnDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
