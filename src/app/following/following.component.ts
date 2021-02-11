import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
user:any;
  constructor(public httpservice:EnrollmentService) { }

  ngOnInit(): void {
    this.httpservice.getFollowing().subscribe(r=>{
      console.log(r.following[0].photo);
      this.user=r})
  }

}
