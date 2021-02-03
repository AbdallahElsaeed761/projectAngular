import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Signup } from './_models/signup';
import { Login } from './_models/login';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor( public _http:HttpClient) { }
  enroll(user:Signup)
  {
    return this._http.post<Signup[]>("https://abdullahalsaeed36.herokuapp.com/users/",user);
  }

  login(user:Login)
  {
    return this._http.post<Login[]>("https://abdullahalsaeed36.herokuapp.com/users/login",user)
  }
}
