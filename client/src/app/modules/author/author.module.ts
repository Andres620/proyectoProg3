import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleSendComponent } from './article/article-send/article-send.component';
import { ArticleEditorComponent } from './article/article-editor/article-editor.component';
import { ArticleResultsComponent } from './article/article-results/article-results.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleSendComponent, ArticleEditorComponent, ArticleResultsComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
