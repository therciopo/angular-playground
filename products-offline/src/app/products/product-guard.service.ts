import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
      alert('invalid product Id');
      this._router.navigate(['/products']);
    }

    return true;
  }
  constructor(private _router: Router) { }

}
