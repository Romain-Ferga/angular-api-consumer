import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticles } from '../interfaces/IArticles';

@Component({
  selector: 'app-article-display-modal',
  templateUrl: './article-display-modal.component.html',
  styleUrls: ['./article-display-modal.component.css']
})
export class ArticleDisplayModalComponent implements OnInit {

  @Input() article?:IArticles

  @Output() modalCloseEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  modalClose(){

    this.modalCloseEvent.emit(false);

  }

}
