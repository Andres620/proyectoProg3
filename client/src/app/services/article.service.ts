import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel } from '../models/article.model';


const base_url = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  artOfList: ArticleModel = null;

  constructor(private http: HttpClient) { }
  
  getAllArticles(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${base_url}Articles`);
  }
  // getAllArticlesbyAuthorId(): Observable<ArticleModel[]> {
  //   return this.http.
  // }

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

  getArticleOfList(art){
    console.log('articulo en el servicio',art)
    this.artOfList=art
  }
}
