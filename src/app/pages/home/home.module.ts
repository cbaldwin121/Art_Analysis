import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})

export class HomePageModule {
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

