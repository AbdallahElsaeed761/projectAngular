import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { BlogService } from '../services/blog.service';
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
  constructor(public serviceblog:EnrollmentService,public blogservice:BlogService,public router:Router) { }
upload(photo){
      this.serviceblog.editUserData({photo:photo}).subscribe(
        b=>{
          console.log(b)
        }
      )
    }
ngOnInit(): void {
    this.blogservice.getMyBlog().subscribe(
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
del(id:string){
let r=confirm("Are You Sure Delete Blog");
if(r==true)
{
  this.blogservice.deleteblog(id).subscribe(
    d=>{
  console.log(d);

  })
}
this.router.navigate(['../profile']);
// else{
//   return ;
// }


}
}
