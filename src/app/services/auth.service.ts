import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string ,_id:string}>('http://localhost:3000/users/login', { username: username, password: password })
      .pipe(
        map(result => {
          console.log(result)
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('userId',result._id);
          return true;
        })
      );
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');

  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

}
