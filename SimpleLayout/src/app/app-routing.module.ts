import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page404Component } from './page404/page404.component';
import { Op1Component } from './operation/op1/op1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  //{path:'home',component:HomeComponent},
  {path:'p1',component:Page1Component},
  {path:'p2',component:Page2Component},
  {path:'p3',component:Page3Component},
  {path:'op1',component:Op1Component},
  {path:'404',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
