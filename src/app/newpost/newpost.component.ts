import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent{

  constructor(private postServices: PostService) {

      // this.postServices.statusUpdated.subscribe(
      //   (status: string) => alert('New Status: ' + status)
      // )
    }

onCreatePost(postName: string, postInfo: string) {

this.postServices.addPost(postName, postInfo);
// this.loggingService.logStatusChange(accountStatus);
}

}
