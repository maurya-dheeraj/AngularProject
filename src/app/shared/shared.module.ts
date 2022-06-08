import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgOtpInputModule } from  'ng-otp-input';

import { SharedRoutingModule } from './shared-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpComponent } from './otp/otp.component';
import { CommanModule } from '../comman/comman.module';


@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CommanModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    NgOtpInputModule
    
    
  ]
})
export class SharedModule { }
