import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Signup } from './_models/signup';
import { Login } from './_models/login';
import { Blog } from './_models/blog';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  logedUser:any;

  enroll(user:Signup)
  {
    return this._http.post<Signup>("http://localhost:3000/users/",user);
  }

  login(use: Login) {
    return this._http.post<Login>("http://localhost:3000/users/login", use)

  }
  getAll()
  {

    return this._http.get<Blog[]>("http://localhost:3000/blogs/");
  }
  getNew()
  {
    return this._http.get<Blog[]>("http://localhost:3000/blogs/new");
  }
  getUserData() {
    return this._http.get<Signup>("http://localhost:3000/users/mypage",{headers :{authorization : this.logedUser}})

  }
  getUserData2() {
    return this._http.get<any>("http://localhost:3000/users/mypage",{headers :{authorization : this.logedUser}})

  }
  editUserData(id:string,user:FormData) {
    return this._http.patch<Signup>("http://localhost:3000/users/"+id, user,{headers :{authorization : this.logedUser}})
  }

  constructor( public _http:HttpClient) {
    this.logedUser = (localStorage.getItem('access_token'));
  }
  getFollowing()
  {
    return this._http.get<any>("http://localhost:3000/users/following" ,{headers :{authorization : this.logedUser}});

  }
  getFollowers()
  {
    return this._http.get<any>("http://localhost:3000/users/followers" ,{headers :{authorization : this.logedUser}});

  }
  followUser(id) {
    return this._http.post<any>("http://localhost:3000/users/follow/" + id,null,{headers :{authorization : this.logedUser}})
  }
  unfollowUser(id) {
    return this._http.post<any>("http://localhost:3000/users/unfollow/" + id,null,{headers :{authorization : this.logedUser}})
  }
  getUser(username) {
    return this._http.get<any>("http://localhost:3000/users/" + username,{headers :{authorization : this.logedUser}})
  }

  getUserAndBlogs(username) {
    return this._http.get<any>("http://localhost:3000/blogs/get/" + username,{headers :{authorization : this.logedUser}})
  }

  searchUser(searched) {
    return this._http.get<Signup[]>("http://localhost:3000/users/search/" + searched,{headers :{authorization : this.logedUser}})
  }






}
