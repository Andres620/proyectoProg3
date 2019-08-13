import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private artService: ArticleService) { }

  articleList: ArticleModel[] = [];

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.artService.getAllArticles().subscribe(items => {
      this.articleList = items;
    });
  }

}
