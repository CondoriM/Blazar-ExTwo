import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";
import { Post, User } from "./my-models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpCli: HttpClient) { }

  getPosts() {
    return this.httpCli.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers() {
    return this.httpCli.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getPostsByUserId(id: number) {
    return this.getPosts().pipe(
      map((posts) => posts.filter(post => post.userId === id))
    )
  }
}
