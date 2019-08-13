import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel } from '../models/article.model';


const base_url = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  
  getAllArticles(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${base_url}Articles`);
  }
  // getAllArticlesbyAuthorId(): Observable<ArticleModel[]> {
  //   return this.http.
  // }
}
