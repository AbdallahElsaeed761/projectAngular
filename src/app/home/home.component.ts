import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs:Blog [] = [];

  constructor(private blogService:BlogService) { };

  ngOnInit(): void {
    this.blogService.getNew().subscribe(
      blogs=>{this.blogs = blogs;}
    )
  }

}
