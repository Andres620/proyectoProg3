import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  art: ArticleModel = null;

  ngOnInit() {
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

  searchArticle(): void {
    let id = this.route.snapshot.params["id"];
    this.articleService.getArticleById(id).subscribe(item => {
      this.article = item;
      console.log('no entiendo', this.article)
    });
  }

  updateArticle() {
    this.articleService.updateArticle(this.article).subscribe(item => {
      alert("This article has been updated suyccessfully!");
      this.router.navigate(["/user/author/article/list"]);
    });
  }
}
