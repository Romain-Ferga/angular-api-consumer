import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IArticles } from '../interfaces/IArticles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  articlesList:Array<IArticles> = [];

  httpOptions:any = {

    headers: new HttpHeaders({'Content-Type': 'application/json'})

  }

  constructor(private httpService: HttpClient) {}

  getArticles():Observable<IArticles[]> {

    return this.httpService.get<IArticles[]>('https://jsonplaceholder.typicode.com/posts');

  }

  postArticles(newPost:IArticles) : IArticles[]{

    let articlesListObservable = this.httpService.post<IArticles[]>('https://jsonplaceholder.typicode.com/posts', newPost, this.httpOptions);

    articlesListObservable.subscribe(() => {

      this.articlesList.push(newPost);

    });

    return this.articlesList;

  }

  

}
