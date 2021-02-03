import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Login } from '../_models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log:Login[]|any;

  constructor(public _http:EnrollmentService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this._http.login(this.log)
    .subscribe(
      a=>this.log=a
    )
  }
}
