import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorListAuthorComponent } from './editor-list-author/editor-list-author.component';
import { EditorCreatorEvaluatorComponent } from './editor-creator-evaluator/editor-creator-evaluator.component';
import { EditorListEvaluatorsComponent } from './editor-list-evaluators/editor-list-evaluators.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorListAuthorComponent, EditorCreatorEvaluatorComponent, EditorListEvaluatorsComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule
  ],
  exports: [
    EditorListAuthorComponent,
    EditorListEvaluatorsComponent,
    EditorCreatorEvaluatorComponent
  ]
})
export class EditorModule { }
