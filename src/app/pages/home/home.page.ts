import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private posts: PostService) {
  }

  ngOnInit() {
    // this.posts = this.PostService.posts;
  }

  onCreateAccount(nameInput: string, textInput: string) {

    this.posts.addPost(nameInput, textInput);
  }
}
