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

import { SubcatsRoutingModule } from './subcats-routing.module';
import { SubcatsComponent } from './subcats.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [SubcatsComponent],
  imports: [
    CommonModule,
    SubcatsRoutingModule,
    NgxSkeletonLoaderModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    NgbModule
  ]
})
export class SubcatsModule { }
