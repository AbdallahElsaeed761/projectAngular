import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  newBlog:Blog = new Blog( "" ,"");

  constructor(public blogService:BlogService , public router:Router) { };

  ngOnInit(): void {
    
  }

  save(){
    this.blogService.addBlog(this.newBlog).subscribe(
      d=>{
        console.log(d);
        this.router.navigateByUrl('/home');

      }
    )
  }

}
