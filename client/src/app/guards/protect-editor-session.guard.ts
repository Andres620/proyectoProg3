import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProtectEditorSessionGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate() {
    if (isNullOrUndefined(this.userService.getUserInformation())) {
      this.router.navigate(["/user/login"]);
      return false;
    } else {
      let userInfo = this.userService.getUserInformation();
      if (userInfo.rol == "author" || userInfo.rol == "evaluator")
        this.router.navigate(["/home"]);
      return true;
    }
  }
}
