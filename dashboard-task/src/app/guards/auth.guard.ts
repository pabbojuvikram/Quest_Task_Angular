import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) { }


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let customerDetails = sessionStorage.getItem('customerDetails');
        console.log('Customer details form session storage in authguard-->', customerDetails);
        customerDetails = JSON.parse(customerDetails);
        console.log('Customer details in Auth Guard after parse -->', customerDetails);

        if (customerDetails) {
          return true;
        }
        console.log("User is not logged in, Auth Guard validation failed. Redirecting to login page.")
        this._router.navigate(['']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }

}  