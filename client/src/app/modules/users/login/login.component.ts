import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  email: string = '';
  password: string = '';

  ngOnInit() {
  }

  onLoginBtnClick(): void {
    this.userService.loginUser(this.email, this.password).subscribe(item => {
      console.log(item);
      this.userService.saveToken(item.id);
      this.userService.saveUserInformation(item.user);
      this.router.navigate(["/home"]);
    });
  }



}
