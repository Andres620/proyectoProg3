import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }


  completeName: string = '';
  userRol: string = '';

  ngOnInit() {
    this.showOptions();
  }

  //con esto hacer el nombre para el creator article, ya cargarlo desde aqui 
  showOptions(): void {
    let userInfo = this.userService.getUserInformation(); //retorna un null o la info del usuario
    this.completeName = userInfo.realm;
    this.userRol = userInfo.rol;

    
    console.log('que dicen', userInfo.rol);
  }
}
