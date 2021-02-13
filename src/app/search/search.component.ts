import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users: Signup[]|any;
  blogs: Blog[]|any;
  constructor(public ar: ActivatedRoute, public blogservice: BlogService, public userService: EnrollmentService) { }

  ngOnInit(): void {
  let searched: string = "";

  this.ar.params.subscribe(
  a => {
  searched = a['searched']
  }
  )
  this.blogservice.searchBlog(searched).subscribe(
  a => {
  this.blogs = a;
  }
  )
  this.userService.searchUser(searched).subscribe(
  a => {
  this.users = a;
  }
  )
}
}
