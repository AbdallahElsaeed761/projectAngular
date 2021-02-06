import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  blog:Blog = new Blog(0, "" , "") ;

  constructor(public blogService:BlogService , public route:ActivatedRoute , public router:Router) { }

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe(
      _id=>{ id = _id[ 'id'];
    this.blog.id = id; }
    )

    
    
  }

  save(){
    this.blogService.edit(this.blog.id , this.blog).subscribe(
      d=>{
        console.log(d);
        this.router.navigateByUrl("/home");
      }
    )

  }
}
