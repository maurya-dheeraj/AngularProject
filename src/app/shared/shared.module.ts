import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class SharedModule { }
