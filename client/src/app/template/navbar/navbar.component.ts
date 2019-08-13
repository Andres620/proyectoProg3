import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  userLogged: boolean = false;
  completeName: string = '';
  userRol: string = '';

  ngOnInit() {
    this.showMenu();
  }
//metodo por si mas  adelante necesito mostrar o no un menu
  showMenu(): void {
    let userInfo = this.userService.getUserInformation(); //retorna un null o la info del usuario
    if (isNullOrUndefined(userInfo)) {
      this.userLogged = false;
    }else{
      this.userLogged = true;
      this.completeName = userInfo.realm;
      this.userRol = userInfo.rol;
      console.log('que dicen',userInfo.rol);
    }
  }
}
