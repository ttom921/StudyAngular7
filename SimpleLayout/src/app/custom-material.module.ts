import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CustomMaterialModule { }
