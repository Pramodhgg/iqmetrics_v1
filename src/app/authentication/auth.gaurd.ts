import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isAuth: boolean;
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.isAuth = this.authService.getIsAuthenticated();
    const isAdmin = this.authService.getUserRole();
    console.log(isAdmin);
    if (isAdmin !== 'admin') {
      this.isAuth = false;
    }
    if (!this.isAuth) {
      console.log('true');
      this.router.navigate(['/iqmetrics/admin/login']);
    }
    return this.isAuth;
  }
}
