import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { PostService } from 'src/app/services/post.service';

import { NewpostComponent } from '../../newpost/newpost.component';
import { PostComponent } from '../../post/post.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    NewpostComponent,
    PostComponent,
    FooterComponent,
    HeaderComponent

    ]
})

export class HomePageModule {
  constructor(private posts: PostService) {}


  // private post : FormGroup;

  // constructor( private formBuilder: FormBuilder ) {
  //   this.post = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     description: [''],
  //   });
  // }
  // logForm(){
  //   console.log(this.post.value)
  // }
}

