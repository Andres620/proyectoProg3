import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { UserService } from 'src/app/services/user.service';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor( private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  art: ArticleModel=null;

  ngOnInit() {
    // this.Edit();
    this.searchArticle();
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

  // Edit(){
  //   this.art=this.articleService.artOfList;
  //   console.log('Si llego la wea',this.art)
  // }


  // EditArticle(): void {
  //   this.article = {
  //     id: this.art.id,
  //     title: this.art.title,
  //     abstract: this.art.abstract,
  //     keywords: this.art.keywords,
  //     authorFirstName: this.art.authorFirstName,
  //     authorSecondName: this.art.authorSecondName,
  //     authorFirstSurname: this.art.authorFirstSurname,
  //     authorSecondSurname: this.art.authorSecondSurname,
  //     authorEmail: this.art.authorEmail,
  //     authorId: this.art.authorId,
  //     status: this.art.status,
  //     article: null
  //   }
  // }

  searchArticle(): void {
    let id = this.route.snapshot.params["id"];
    this.articleService.getArticleById(id).subscribe(item => {
      this.article = item;
      console.log('no entiendo',this.article)
    });
  }
  updateArticle(){
    this.articleService.updateArticle(this.article).subscribe(item => {
      alert("This article has been updated suyccessfully!");
      this.router.navigate(["/user/author/article/list"]);
    });
  }

}
