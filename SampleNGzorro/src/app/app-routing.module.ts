import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';

const routes: Routes = [
  {path:'',redirectTo:'misce',pathMatch:'full'},
  {path:'misce',component:MiscellaneousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
