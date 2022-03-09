import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IArticles } from '../interfaces/IArticles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  articlesList:Array<IArticles> = [];

  constructor(private httpService: HttpClient) {}

  getArticles() : Observable<IArticles[]>{

    let articlesListPromise = this.httpService.get<IArticles[]>('https://jsonplaceholder.typicode.com/posts');
    
    console.log(articlesListPromise);

    return articlesListPromise

  }

}
