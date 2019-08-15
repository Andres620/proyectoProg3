import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-editor-list-evaluators',
  templateUrl: './editor-list-evaluators.component.html',
  styleUrls: ['./editor-list-evaluators.component.css']
})
export class EditorListEvaluatorsComponent implements OnInit {

  constructor(private userService: UserService) { }

  userInfo = this.userService.getUserInformation();

  evaluatorsList: UserModel[] = [];

  ngOnInit() {
    this.getAllEvaluators();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(items => {
      this.evaluatorsList = items;
      console.log('get all console',this.evaluatorsList)
    });
  }

  getAllEvaluators(): void {
    console.log('desde el editor list.ts',this.userInfo);
    this.userService.getAllEvaluators().subscribe(items => {
      console.log('items desde editor list',items);
      this.evaluatorsList = items;
      console.log('console de editorlist',this.evaluatorsList)
    });
  }

}
