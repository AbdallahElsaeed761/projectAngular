import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Blog } from '../_models/blog';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  blogs:Blog[]|any;
  user: Signup = new Signup("", "", "", "", "","");

  // ind:number=0;
  constructor(public serviceblog:EnrollmentService) { }
upload(photo){
      this.serviceblog.editUserData({photo:photo}).subscribe(
        b=>{
          console.log(b)
        }
      )
    }
ngOnInit(): void {
    this.serviceblog.getAll().subscribe(
      a=>{
        this.blogs=a;
      }
    )
    this.serviceblog.getUserData().subscribe(
      b=>{
        this.user=b;
      }
    )
}

}
/*upload(photo){
      this.userService.editUserData({photo:photo}).subscribe(
        b=>{
          console.log(b)
        }
      )
    }
  ngOnInit(): void {
    this.serviceblog.getMyBlog().subscribe(
      a=>{
        this.blogs=a;
      }
    )
    this.userService.getUserData().subscribe(
      b=>{
        this.user=b;
      }
    )
  }
*/
