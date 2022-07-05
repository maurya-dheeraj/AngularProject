import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
  
       HeaderComponent,
       FooterComponent,
       LeftSidebarComponent
  ],
  imports: [
    CommonModule,
    CommanRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule
  ],

  exports:[
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent
  ]



})
export class CommanModule { }
