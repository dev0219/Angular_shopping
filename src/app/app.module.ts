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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './layouts/users/users.component';
import { AdminsComponent } from './layouts/admins/admins.component';
import { ErrorsComponent } from './layouts/errors/errors.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { FootersComponent } from './shared/footers/footers.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MobileHeaderComponent } from './shared/mobile-header/mobile-header.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminsComponent,
    ErrorsComponent,
    HeadersComponent,
    FootersComponent,
    MobileHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    NgxUiLoaderModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
