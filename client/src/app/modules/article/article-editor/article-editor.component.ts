import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { UserService } from 'src/app/services/user.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor(private userService: UserService, private articleService: ArticleService) { }

  art: ArticleModel=null;

  ngOnInit() {
    this.Edit();
  }


  article: ArticleModel = {
    id: null,
    title: null,
    abstract: null,
    keywords: null,
    authorFirstName: null,
    authorSecondName: null,
    authorFirstSurname: null,
    authorSecondSurname: null,
    authorEmail: null,
    authorId: null,
    status: null,
    article: null
  }

  Edit(){
    this.art=this.articleService.artOfList;
    console.log('Si llego la wea',this.art)
  }


  EditArticle(): void {
    this.article = {
      id: this.art.id,
      title: this.art.title,
      abstract: this.art.abstract,
      keywords: this.art.keywords,
      authorFirstName: this.art.authorFirstName,
      authorSecondName: this.art.authorSecondName,
      authorFirstSurname: this.art.authorFirstSurname,
      authorSecondSurname: this.art.authorSecondSurname,
      authorEmail: this.art.authorEmail,
      authorId: this.art.authorId,
      status: this.art.status,
      article: null
    }
  }

}
