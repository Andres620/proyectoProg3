import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  // userInfo = this.userService.getUserInformation();
  

  // article: ArticleModel = {
  //   id: null,
  //   title: null,
  //   abstract: null,
  //   keywords: null,
  //   authorFirstName: this.userInfo.firstname,
  //   authorSecondName: this.userInfo.secondname,
  //   authorFirstSurname: this.userInfo.firstsurname,
  //   authorSecondSurname: this.userInfo.secondsurname,
  //   authorEmail: this.userInfo.email,
  //   authorId: this.userInfo.id,
  //   status: 'send',
  //   article: null
  // }

  // EditArticle(art): void {
  //   this.article = {
  //     id: art.id,
  //     title: art.title,
  //     abstract: art.abstract,
  //     keywords: art.keywords,
  //     authorFirstName: art.firstname,
  //     authorSecondName: art.secondname,
  //     authorFirstSurname: art.firstsurname,
  //     authorSecondSurname: art.secondsurname,
  //     authorEmail: art.email,
  //     authorId: art.authorId,
  //     status: art.status,
  //     article: null
  //   }
  // }

}
