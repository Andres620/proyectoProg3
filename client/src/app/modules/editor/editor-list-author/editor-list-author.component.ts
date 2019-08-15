import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { ArticleModel } from 'src/app/models/article.model';

@Component({
  selector: 'app-editor-list-author',
  templateUrl: './editor-list-author.component.html',
  styleUrls: ['./editor-list-author.component.css']
})
export class EditorListAuthorComponent implements OnInit {

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

}
