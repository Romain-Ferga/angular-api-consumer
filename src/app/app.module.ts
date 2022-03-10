import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesDisplayerComponent } from './articles-displayer/articles-displayer.component';
import { ArticleDisplayModalComponent } from './article-display-modal/article-display-modal.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesDisplayerComponent,
    ArticleDisplayModalComponent,
    AddPostsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
