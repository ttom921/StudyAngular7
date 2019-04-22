import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Op1Component } from './op1/op1.component';
import { Op2Component } from './op2/op2.component';
import { Op3Component } from './op3/op3.component';

@NgModule({
  declarations: [Op1Component, Op2Component, Op3Component],
  imports: [
    CommonModule
  ]
})
export class OperationModule { }
