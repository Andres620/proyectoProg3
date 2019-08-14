import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { UrlInjectionsGuard } from 'src/app/guards/url-injections.guard';
import { ProtectAuthorSessionGuard } from 'src/app/guards/protect-author-session.guard';


const routes: Routes = [
  {
    path: 'user/author/article/list',
    component: ArticleListComponent,
    canActivate:[           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard,
      ProtectAuthorSessionGuard
    ]
  },
  {
    path: 'user/author/article/creator',
    component: ArticleCreatorComponent,
    canActivate:[           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard,
      ProtectAuthorSessionGuard
    ]
  },
  {
    path: 'user/author/article/editor/:id',
    component: ArticleEditorComponent,
    canActivate:[           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard,
      ProtectAuthorSessionGuard
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
