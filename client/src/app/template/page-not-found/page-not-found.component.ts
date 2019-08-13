import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private userService: UserService) { }

  userLogged: boolean = false;

  ngOnInit() {
    this.showButton();
  }

  showButton(): void {
    let userInfo = this.userService.getUserInformation(); //retorna un null o la info del usuario
    if (isNullOrUndefined(userInfo)) {
      this.userLogged = false;
    }else{
      this.userLogged = true;
    }
  }

}
