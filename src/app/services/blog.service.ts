import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { };

  addBlog(blog:Blog){
    return this.http.post<Blog>("http://localhost:3000/blogs" , blog);

  }

  getNew(){
    return this.http.get<Blog []>("http://localhost:3000/blogs/new");
  }

  edit(id:number , blog:Blog ){
    return this.http.patch<Blog>("http://localhost:3000/blogs/"+id , blog);
  }
}


