import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';


@NgModule({
  declarations: [ArticleListComponent, ArticleCreatorComponent, ArticleEditorComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleListComponent,
    ArticleEditorComponent,
    ArticleCreatorComponent
  ]
})
export class ArticleModule { }
