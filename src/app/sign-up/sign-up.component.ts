import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  s:Signup[] |any;
  submitted=false;
  constructor(public _enroll:EnrollmentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    this._enroll.enroll(this.s)
    .subscribe(

      data=>console.log('success',data),
      error=>console.log('Error',error)
    )
  }


}
