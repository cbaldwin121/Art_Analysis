import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  
  posts = [
    {
      name: 'John Cena',
      text: 'Pitbull didnt eat breakfast this morning'
    },
    {
      name: 'Mr World Wide',
      text: 'School teacher - pitbull did not have a good time with math today'
    },
    {
      name: 'Fireball',
      text: 'therapist - pitbull looked tired from PE today.'
    }
  ];
  postUpdated = new EventEmitter<string>();

  addPost(name: string, text: string) {
    this.posts.push({name: name, text: text});

  }

  updatePost(id: number, text: string) {
    this.posts[id].text = text;
  }

  // deletePost(id: number) {
  //   this.posts[id].splice()

  // }


}

