import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  s:Signup|any ;
  submitted=false;
  errorMessage:any;
  constructor(public _enroll:EnrollmentService,public router :Router) { }

  ngOnInit(): void {
  }

  onSubmit(rig:any) {
  this.submitted=true;

    console.log(rig);


    return this._enroll.enroll(rig).subscribe(
      a => {
        this.router.navigate([
          '/login'
        ])
      },
      error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    )
  }
}
//






