import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req,next){
    let authService=this.injected.get(AuthService);
    let tokenizedReq=req.clone({
      setHeader:{
        authorization:`Bear ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
  constructor(private injected:Injector) { }
}
