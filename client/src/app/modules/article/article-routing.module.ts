import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';


const routes: Routes = [
  {
    path: 'user/author/list',
    component: ArticleListComponent
  },
  {
    path: 'user/author/creator',
    component: ArticleCreatorComponent
  },
  {
    path: 'user/author/editor',
    component: ArticleEditorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
