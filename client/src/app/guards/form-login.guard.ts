import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FormLoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){

  }
  canActivate(){
    if(!isNullOrUndefined(this.userService.getUserInformation())){
      this.router.navigate(["/home"]);
      return false;
    }else{
      return true;
    }
  } 
}
