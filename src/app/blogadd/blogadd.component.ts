import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blogadd',
  templateUrl: './blogadd.component.html',
  styleUrls: ['./blogadd.component.css']
})
export class BlogAddComponent implements OnInit {

  selectedFile :File|any;
  addForm: FormGroup;
  newBlog= new FormData();
  blog:Blog |null=null;
  userName:string;


  constructor(public blogService:BlogService , public router:Router, private fb: FormBuilder) {
    this.userName = blogService.logedUser.userName;
    this.addForm = this.fb.group({
      title: '',
      // tags:[''],
      body: '',
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event){
    this.selectedFile =<File> event.target.files[0];
    this.newBlog.append('photo', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
  }

  save(){

    this.newBlog.append('title',this.addForm.value.title||'');
    //this.newBlog.append('tags',this.blog.tags||);
    this.newBlog.append('body', this.addForm.value.body||'');
    console.log(this.newBlog);
    this.blogService.creat(this.newBlog).subscribe(
      a=>{
      console.log(a);
      this.router.navigate(['../profile']);
    })

  }


}
