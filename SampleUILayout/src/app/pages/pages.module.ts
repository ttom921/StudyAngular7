import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbSidebarModule, NbLayoutModule, NbSidebarService,NbMenuModule } from '@nebular/theme';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
//import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    //MiscellaneousModule,
  ],
  providers:[NbSidebarService]
})
export class PagesModule { }
