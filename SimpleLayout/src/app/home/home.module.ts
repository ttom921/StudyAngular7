import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { CustomMaterialModule } from '../custom-material.module';
import { Showvideo1Component } from './showvideo1/showvideo1.component';
import { Showvideo2Component } from './showvideo2/showvideo2.component';
import { Showvideo3Component } from './showvideo3/showvideo3.component';
import { OperationModule } from '../operation/operation.module';
import { Showvideo4Component } from './showvideo4/showvideo4.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, AsideComponent, Showvideo1Component, Showvideo2Component, Showvideo3Component, Showvideo4Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule,
    OperationModule
  ]
})
export class HomeModule { }
