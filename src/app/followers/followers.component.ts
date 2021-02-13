import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  user:any;
  constructor(public httpservice:EnrollmentService) { }

  ngOnInit(): void {
      this.httpservice.getFollowers().subscribe(r=>{
      console.log(r.following[0].photo);
      this.user=r})
  }

}
