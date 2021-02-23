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

  constructor(public serviceblog:EnrollmentService) {


  }


  ngOnInit(): void {
    this.serviceblog.getNew().subscribe(
      blogs=>{this.blogs = blogs;}
    )

  }

}
