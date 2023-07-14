import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot , state: RouterStateSnapshot) => {
  if(localStorage.getItem('token')) {
    return true
  } else {
    return false
  }
};
