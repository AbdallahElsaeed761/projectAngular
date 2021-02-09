import { Component, OnInit } from '@angular/core';

import { EnrollmentService } from '../enrollment.service';
import { Blog } from '../_models/blog';



// import { BlogService } from '../services/blog.service';
// import { Blog } from '../_models/blog';

// >>>>>>> 96d21db6daf3c39fb818677e0139ffdd4d4366d4
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// <<<<<<< HEAD
  blogs:Blog[]|any;
  // ind:number=0;
  // pages:number[];
  constructor(public serviceblog:EnrollmentService) {

  // this.pages=Array(Math.trunc(this.serviceblog.length/5+((this.serviceblog.blog.length%5)?1:0))).fill(0);
  }


  ngOnInit(): void {
    this.serviceblog.getNew().subscribe(
      blogs=>{this.blogs = blogs;}
    )
// >>>>>>> 96d21db6daf3c39fb818677e0139ffdd4d4366d4
  }

}
