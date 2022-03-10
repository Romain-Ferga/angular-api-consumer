import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArticlesServiceService } from '../services/articles-service.service';
import { IArticles } from '../interfaces/IArticles';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  newPostTitle:string = '';
  
  newPostBody:string = '';

  @Output() submitEvent:EventEmitter<IArticles> = new EventEmitter();

  constructor(private articlesService:ArticlesServiceService) { }

  ngOnInit(): void {
  }

  validateForm(){

    console.log(this.newPostTitle);
    console.log(this.newPostBody);

    let article:IArticles = {

      userId: 25,
      title: this.newPostTitle,
      body: this.newPostBody

    }

    this.articlesService.postArticles(article);

    this.submitEvent.emit(article);

  }

}
