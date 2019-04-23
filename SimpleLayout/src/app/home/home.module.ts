import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, AsideComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule
  ]
})
export class HomeModule { }
