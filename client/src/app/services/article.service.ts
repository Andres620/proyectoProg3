import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel } from '../models/article.model';
import { UserService } from './user.service';


const base_url = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  artOfList: ArticleModel = null;
  token: string = this.userservice.getToken();

  constructor(private http: HttpClient, private userservice: UserService) { }
  
  getAllArticles(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${base_url}articles`);
  }

  getAllArticlesbyAuthorId(authorId: string): Observable<ArticleModel[]> {    //&access_token=${this.token}
    console.log("uthorId: "+authorId);
    return this.http.get<ArticleModel[]>(`${base_url}articles/get-article-by-equals-authorId?authorId=${authorId}`)
  }

  saveNewArticle(article: ArticleModel): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(`${base_url}articles`, 
      article,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }
  
  getArticleById(articleId: string): Observable<ArticleModel> {
    return this.http.get<ArticleModel>(`${base_url}articles/${articleId}`);
  }

  updateArticle(article: ArticleModel): Observable<ArticleModel> {
    return this.http.put<ArticleModel>(`${base_url}articles`, article,
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      });
  }
}