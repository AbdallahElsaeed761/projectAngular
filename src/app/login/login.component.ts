import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EnrollmentService } from '../enrollment.service';
import { AuthService } from '../services/auth.service';
import { Login } from '../_models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logine:Login[]|any;

  errorMessage: any;
  public error:string='';
  constructor(public routs: Router, public auth: AuthService) { }


  onSubmit(log:any) {
    console.log(log);

    this.auth.login(log.username, log.password)
      .pipe(first())
      .subscribe(
        result =>
          this.routs.navigate(['/home']),
        // console.log(result)
        err => this.error = 'Could not authenticate'
      );

  }

  ngOnInit(): void {
  }



}


