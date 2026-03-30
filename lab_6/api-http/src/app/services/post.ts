import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Comment } from '../models/post';  // без .ts!
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.apiURL}/posts`)
  }
  getPost(id:number): Observable<Post>{
    return this.http.get<Post>(`${this.apiURL}/posts/${id}`)
  }
  getComments(postId:number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.apiURL}/posts/${postId}/comments`)
  }
}
