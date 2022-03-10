import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesDisplayerComponent } from './articles-displayer/articles-displayer.component';
import { ArticleDisplayModalComponent } from './article-display-modal/article-display-modal.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesDisplayerComponent,
    ArticleDisplayModalComponent,
    AddPostsComponent,
    HomeComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
