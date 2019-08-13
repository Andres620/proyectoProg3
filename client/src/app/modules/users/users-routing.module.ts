import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormLoginGuard } from 'src/app/guards/form-login.guard';
import { UrlInjectionsGuard } from 'src/app/guards/url-injections.guard';



const routes: Routes = [
  {
    path: 'user/register',
    component: RegisterComponent,
    canActivate: [          //se activa cuando esta logeado y se lo lleva al home
      FormLoginGuard
    ]
  },
  {
    path: 'user/login',
    component: LoginComponent,
    canActivate: [           
      FormLoginGuard
    ]
  },
  {
    path: 'user/logout',
    component: LogoutComponent,
    canActivate:[           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
