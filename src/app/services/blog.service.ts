import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  logedUser:any;
  constructor(public http:HttpClient) {
  this.logedUser = JSON.parse(localStorage.getItem('user') || '{}');

  };

  addBlog(blog:Blog){
    return this.http.post<Blog>("http://localhost:3000/blogs" , blog);

  }

  getNew(){
    return this.http.get<Blog []>("http://localhost:3000/blogs/new");
  }

  edit(id:string , blog:Blog ){
    return this.http.patch<Blog>("http://localhost:3000/blogs/"+id , blog);
  }

  // getAll(){
  //   return this.http.get<Blog[]>("http://localhost:3000/Blogs/new")
  // }
  getMyBlog(){
    return this.http.get<Blog[]>("http://localhost:3000/blogs/profile")
  }
  creat(blog:any){
    //console.log(this.logedUser);
    return this.http.post<Blog>("http://localhost:3000/blogs/",blog ,{headers :{authorization : this.logedUser.token}});


  }


}


