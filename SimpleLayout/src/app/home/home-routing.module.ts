import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Showvideo1Component } from './showvideo1/showvideo1.component';
import { Showvideo2Component } from './showvideo2/showvideo2.component';
import { Showvideo3Component } from './showvideo3/showvideo3.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'showvideo2', pathMatch: 'full' }, //預設顯示
      { path: 'showvideo1', component: Showvideo1Component },
      { path: 'showvideo2', component: Showvideo2Component },
      { path: 'showvideo3', component: Showvideo3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
