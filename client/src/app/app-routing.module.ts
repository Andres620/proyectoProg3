import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './template/hero/hero.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'nav',
    component: HeroComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/nav'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
