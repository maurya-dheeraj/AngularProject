import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanModule } from '../comman/comman.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommanModule
  ]
})
export class LayoutModule { }
