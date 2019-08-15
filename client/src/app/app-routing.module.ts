import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './template/hero/hero.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { UsersModule } from './modules/users/users.module';
import { HomeComponent } from './template/home/home.component';
import { ArticleModule } from './modules/article/article.module';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/hero'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    UsersModule,
    ArticleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
