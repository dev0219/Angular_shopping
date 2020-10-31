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

import { TopOffersRoutingModule } from './top-offers-routing.module';
import { TopOffersComponent } from './top-offers.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [TopOffersComponent],
  imports: [
    CommonModule,
    TopOffersRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    NgxSkeletonLoaderModule,
    SwiperModule,
    FormsModule,
    NgbModule,
  ]
})
export class TopOffersModule { }
