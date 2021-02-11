import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  logedUser:any;
  constructor(public http:HttpClient) {
  this.logedUser = (localStorage.getItem('access_token'));

  };

  // addBlog(blog:Blog){
  //   return this.http.post<Blog>("http://localhost:3000/blogs" , blog);

  // }

  getNew(){
    return this.http.get<Blog []>("http://localhost:3000/blogs/new");
  }

  edit(id:string , blog:Blog ){
    return this.http.patch<Blog>("http://localhost:3000/blogs/"+id , blog,{headers :{authorization : this.logedUser}});
  }

  // getAll(){
  //   return this.http.get<Blog[]>("http://localhost:3000/Blogs/new")
  // }
  getMyBlog(){
    return this.http.get<Blog[]>("http://localhost:3000/blogs/myblogs",{headers :{authorization : this.logedUser}});
  }
  creat(blog:FormData){
    //console.log(this.logedUser);
    return this.http.post<Blog>("http://localhost:3000/blogs/",blog ,{headers :{authorization : this.logedUser}});


  }
  deleteblog(id:string){
    return this.http.delete("http://localhost:3000/blogs/"+id,{headers :{authorization : this.logedUser}});
  }




}


