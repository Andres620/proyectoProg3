import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  user: UserModel = {
    realm: null,
    firstname: null,
    secondname: null,
    firstsurname: null,
    secondsurname: null,   //estps nombres son los que estan en el html del productcomponent
    country: null,
    phone: null,
    membership: null,
    educationlevel: null,
    specialty:null,
    email: null,
    password: null,
    rol: null,
    id: null,
    user: null
  }

  ngOnInit() {
  }

  saveNewUser():void{
    this.userService.saveNewUser(this.user).subscribe(item =>{
      alert('The User has been stored successfully!!!');
      this.router.navigate(["/hero"])   //cambiaar despues al home del usuario logeado 
    })
  }

}
