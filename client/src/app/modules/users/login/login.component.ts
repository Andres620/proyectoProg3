import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServie: UserService) { }

  email: string = '';
  password: string = '';

  ngOnInit() {
  }

  onLoginBtnClick():void{
    this.userServie.loginUser(this.email, this.password).subscribe(item =>{
      console.log(item);
      this.userServie.saveToken(item.id);
      this.userServie.saveUserInformation(item.user);
    } );
  }



}
