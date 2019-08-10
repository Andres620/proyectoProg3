import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: 'user/register',
    component: RegisterComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/logout',
    component: LogoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
