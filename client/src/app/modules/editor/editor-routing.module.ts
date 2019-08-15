import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorListAuthorComponent } from './editor-list-author/editor-list-author.component';
import { UrlInjectionsGuard } from 'src/app/guards/url-injections.guard';
import { EditorListEvaluatorsComponent } from './editor-list-evaluators/editor-list-evaluators.component';
import { EditorCreatorEvaluatorComponent } from './editor-creator-evaluator/editor-creator-evaluator.component';
import { ProtectEditorSessionGuard } from 'src/app/guards/protect-editor-session.guard';

const routes: Routes = [
  {
    path: 'user/editor/article/list',
    component: EditorListAuthorComponent,
    canActivate: [           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard,
      ProtectEditorSessionGuard
    ]
  },
  {
    path: 'user/editor/evaluator/list',
    component: EditorListEvaluatorsComponent,
    canActivate: [           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard,
      ProtectEditorSessionGuard
    ]
  },
  {
    path: 'user/editor/creator/evaluator',
    component: EditorCreatorEvaluatorComponent,
    canActivate: [           //se activa cuando no esta logeado y lo lleva al login
      UrlInjectionsGuard,
      ProtectEditorSessionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
