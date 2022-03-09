import { Component, OnInit } from '@angular/core';
import { IArticles } from '../interfaces/IArticles';
import { ArticlesServiceService } from '../services/articles-service.service';

@Component({
  selector: 'app-articles-displayer',
  templateUrl: './articles-displayer.component.html',
  styleUrls: ['./articles-displayer.component.css']
})
export class ArticlesDisplayerComponent implements OnInit {

  articlesList:Array<IArticles> = [];

  showModal:boolean = false;

  constructor(private articleService : ArticlesServiceService) { }

  ngOnInit(): void {

    this.articleService.getArticles().subscribe(articlesListPromise =>{

      this.articlesList = articlesListPromise;

    });

  }

  openModal(){

    this.showModal = true;

  }

  closeModal(){

    this.showModal = false;

  }

}
