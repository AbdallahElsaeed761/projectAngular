import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { AuthService } from '../services/auth.service';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.css']
})
export class HomeBlogsComponent implements OnInit {
  user: Signup = new Signup("", "", "", "", "");
  blogs: Blog[]|any;
  newBlog: Blog = new Blog("", [""], "")
  eBlog: Blog = new Blog("", [""],"")
  logout(){
    this.auth.logout()
  }
  constructor(public serviceblog:BlogService,public auth:AuthService, public userService: EnrollmentService, public router: Router) { }

  ngOnInit(): void {
    this.serviceblog.getFollowingBlog().subscribe(
      a=>{
        this.blogs=a.reverse();
      }
    )
    this.userService.getUserData().subscribe(
      b=>{
        this.user=b;
      }
    )
  }

}

