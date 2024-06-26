import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCreatorComponent } from './article-creator/article-creator.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ArticleListComponent, ArticleCreatorComponent, ArticleEditorComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule
  ],
  exports: [
    ArticleListComponent,
    ArticleEditorComponent,
    ArticleCreatorComponent
  ]
})
export class ArticleModule { }
