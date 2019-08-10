 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class UsersModule { }
 