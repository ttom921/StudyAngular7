import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscellaneousComponent } from './miscellaneous.component';
import { Miscepage1Component } from './miscepage1/miscepage1.component';
import { Miscepage2Component } from './miscepage2/miscepage2.component';
import { MisceDragDropComponent } from './misce-drag-drop/misce-drag-drop.component';

const routes: Routes = [
  {
    path: 'misce', component: MiscellaneousComponent, children: [
      { path: 'miscepage1', component: Miscepage1Component },
      { path: 'miscepage2', component: Miscepage2Component },
      { path:'miscedragdrop',component:MisceDragDropComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
