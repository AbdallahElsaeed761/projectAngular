import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';
import { Signup } from '../_models/signup';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  logedUser:any;
  constructor(public http:HttpClient) {
  this.logedUser = (localStorage.getItem('access_token'));

  };



  getNew(){
    return this.http.get<Blog []>("http://localhost:3000/blogs/new");
  }

  edit(id:string , blog:FormData ){
    return this.http.patch<Blog>("http://localhost:3000/blogs/"+id , blog,{headers :{authorization : this.logedUser}});
  }


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
  getFBlog(id) {
    console.log(id);
    return this.http.get<Blog[]>("http://localhost:3000/blogs/auther/" + id,{headers :{authorization : this.logedUser}})
  }

  getFollowingBlog() {
    return this.http.get<any>("http://localhost:3000/blogs/home",{headers :{authorization : this.logedUser}});
  }

  searchBlog(searched) {
    return this.http.get<Blog[]>("http://localhost:3000/blogs/search/" + searched,{headers :{authorization : this.logedUser}})
  }
  addComment(comment) {
    return this.http.patch<Blog>("http://localhost:3000/blogs/addComment" ,comment,{headers :{authorization : this.logedUser}})
  }







}


