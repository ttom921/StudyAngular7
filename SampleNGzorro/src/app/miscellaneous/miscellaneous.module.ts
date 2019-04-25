import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { Miscepage1Component } from './miscepage1/miscepage1.component';
import { Miscepage2Component } from './miscepage2/miscepage2.component';
import { MisceDragDropComponent } from './misce-drag-drop/misce-drag-drop.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [MiscellaneousComponent, Miscepage1Component, Miscepage2Component, MisceDragDropComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MiscellaneousRoutingModule,
    DragDropModule
  ]
})
export class MiscellaneousModule { }
