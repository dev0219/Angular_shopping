/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CityGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const city = localStorage.getItem('city');
    console.log('city', localStorage.getItem('city'));
    if (city && city != null && city !== 'null') {
      return true;
    }
    // this.router.navigate(['/cities']);
    console.log('no city found.......');
    return false;
  }
}
