import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() posts: {name: string, text: string};
  @Input() id: number;

  constructor( private postService: PostService) {}

  onSetTo(text: string) {
    this.postService.updatePost(this.id, text)
    // this.loggingService.logStatusChange(status);
    this.postService.postUpdated.emit(status);

  }

}
