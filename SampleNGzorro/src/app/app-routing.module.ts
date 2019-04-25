import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  //{path:'home',component:HomeComponent},
  //{path:'misce',component:MiscellaneousComponent},
  {path:'404',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
