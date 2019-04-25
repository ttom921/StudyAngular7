import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { Miscepage1Component } from './miscepage1/miscepage1.component';
import { Miscepage2Component } from './miscepage2/miscepage2.component';

@NgModule({
  declarations: [MiscellaneousComponent, Miscepage1Component, Miscepage2Component],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule { }
