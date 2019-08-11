import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServie: UserService,private router: Router) { }

  email: string = '';
  password: string = '';

  ngOnInit() {
  }

  onLoginBtnClick():void{
    this.userServie.loginUser(this.email, this.password).subscribe(item =>{
      console.log(item);
      this.userServie.saveToken(item.id);
      this.userServie.saveUserInformation(item.user);
      this.router.navigate(["/hero"]);
    } );
  }



}
