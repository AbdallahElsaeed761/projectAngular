import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Blog } from '../_models/blog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs:Blog[]|any;
  // ind:number=0;
  // pages:number[];
  constructor(public serviceblog:EnrollmentService) {

  // this.pages=Array(Math.trunc(this.serviceblog.blog.length/5+((this.serviceblog.blog.length%5)?1:0))).fill(0);
  }

  ngOnInit(): void {
    this.serviceblog.getAll().subscribe(
      a=>{
        this.blogs=a;
      }
    )

  }

}
