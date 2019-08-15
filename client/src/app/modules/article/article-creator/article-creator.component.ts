import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ArticleModel } from 'src/app/models/article.model';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent implements OnInit {

  constructor(private userService: UserService, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.showUser();
    this.print();
  }

  
  userInfo = this.userService.getUserInformation();
  showUser(): void {
    let userInfo = this.userService.getUserInformation(); //retorna un null o la info del usuario
    console.log('pero mira esa id papa', userInfo.id);
  }
  article: ArticleModel = {
    id: null,
    title: null,
    abstract: null,
    keywords: null,
    authorFirstName: this.userInfo.firstname,
    authorSecondName: this.userInfo.secondname,
    authorFirstSurname: this.userInfo.firstsurname,
    authorSecondSurname: this.userInfo.secondsurname,
    authorEmail: this.userInfo.email,
    authorId: this.userInfo.id,
    status: 'send',
    article: null
  }
  print():void{
    console.log('Articulo',this.article)
  }

  saveNewArticle(): void {
    this.articleService.saveNewArticle(this.article).subscribe(item => {
      alert('The Article has been stored successfully!!!');
      this.router.navigate(["/home"])   //cambiaar despues al home del usuario logeado 
    })
  }
}
