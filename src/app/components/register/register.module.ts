import { FormsModule } from '@angular/forms';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    NgOtpInputModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ]
})
export class RegisterModule { }
