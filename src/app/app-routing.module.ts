import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes:Routes = [
  
  {

    path: '',
    component: HomeComponentComponent

  },
  {

    path: 'contact',
    component: ContactComponentComponent

  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [

    RouterModule

  ]
})
export class AppRoutingModule { }
