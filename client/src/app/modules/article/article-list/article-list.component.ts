import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { ArticleEditorComponent } from '../article-editor/article-editor.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private artService: ArticleService,private userService: UserService) { }

  userInfo = this.userService.getUserInformation();

  articleList: ArticleModel[] = [];

  ngOnInit() {
    // this.getAllArticles();
    this.getAllArticlesbyAuthorId();
  }

  getAllArticles(): void {
    this.artService.getAllArticles().subscribe(items => {
      this.articleList = items;
      console.log('get all console',this.articleList)
    });
  }
  

  getAllArticlesbyAuthorId(): void {
    console.log(this.userInfo);
    this.artService.getAllArticlesbyAuthorId(this.userInfo.id).subscribe(items => {
      console.log('items desde article list',items);
      this.articleList = items;
      console.log('console de articlelist',this.articleList)
    });
  }
}
