import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Signup } from './_models/signup';
import { Login } from './_models/login';
import { Blog } from './_models/blog';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  enroll(user:Signup)
  {
    return this._http.post<Signup>("http://localhost:3000/users/",user);
  }

  login(use: Login) {
    return this._http.post<Login>("http://localhost:3000/users/login", use)

  }
  getAll()
  {
    return this._http.get<Blog[]>("http://localhost:3000/blogs/new");
  }
  constructor( public _http:HttpClient) { }


}
