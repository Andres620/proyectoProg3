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

  articleList: ArticleModel[] = [];

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.artService.getAllArticles().subscribe(items => {
      this.articleList = items;
    });
  }
  
  EditArticle(art): void {
    console.log('viva el perico hpta',art)
    this.artService.getArticleOfList(art);
  }

  // getAllArticlesbyAuthorId(): void {
  //   this.artService.getAllArticles().subscribe(items => {
  //     this.articleList = items;
  //   });
  // }



}
