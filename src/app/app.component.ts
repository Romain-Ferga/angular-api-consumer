import { Component } from '@angular/core';
import { IArticles } from './interfaces/IArticles';
import { ArticlesServiceService } from './services/articles-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articlesList:IArticles[] = [];

  constructor(private articleService: ArticlesServiceService){}

  ngOnInit(): void {

    this.articleService.getArticles().subscribe(articles => {

      this.articlesList = articles;

    });

  }

  addArticle(newPost:any = {}){

    console.log(newPost);

    this.articlesList.push(newPost);

  }

}
