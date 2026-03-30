import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Post} from '../../models/post';
import {PostService} from '../../services/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  posts = signal<Post[]>([]);
  loading=signal(true);

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => {
      this.posts.set(posts.slice(0, 20));
      this.loading.set(false);
    })
  }

}
