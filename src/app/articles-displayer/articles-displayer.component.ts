import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticles } from '../interfaces/IArticles';
import { ArticlesServiceService } from '../services/articles-service.service';

@Component({
  selector: 'app-articles-displayer',
  templateUrl: './articles-displayer.component.html',
  styleUrls: ['./articles-displayer.component.css']
})
export class ArticlesDisplayerComponent implements OnInit {

  @Input() articlesList:Array<IArticles> = [];

  @Output() deleteEvent:EventEmitter<IArticles> = new EventEmitter();

  showModal:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  openModal(){

    this.showModal = true;

  }

  closeModal(){

    this.showModal = false;

  }

  deletePost(article:IArticles){

    this.deleteEvent.emit(article);

  }

}
