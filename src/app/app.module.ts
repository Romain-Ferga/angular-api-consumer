import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesDisplayerComponent } from './articles-displayer/articles-displayer.component';
import { ArticleDisplayModalComponent } from './article-display-modal/article-display-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesDisplayerComponent,
    ArticleDisplayModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
