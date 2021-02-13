import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
_id:string|any;
blog:Blog=new Blog();
p="";
selectedFile :File|any;
addForm: FormGroup|any;
newBlog= new FormData();
  constructor( public httpService:BlogService, public Router:Router,public ar:ActivatedRoute,private fb: FormBuilder ) {
    this.addForm = this.fb.group({
      title: '',
      // tags:[''],
      body: '',
    });
  }
  onFileSelected(event){
    this.selectedFile =<File> event.target.files[0];
    this.newBlog.append('photo', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
  }

  ngOnInit(): void {


    this.ar.params.subscribe(

      d=> {
      this.p=d['id'];


        console.log(this.p,"p");})

  }
  edit()
  {
    // this.newBlog.append('title',this.addForm.value.title||'');
    this.newBlog.append('title',this.addForm.get("title")?.value);
    this.newBlog.append('tags',this.addForm.get("tags")?.value);
    this.newBlog.append('body', this.addForm.get("body")?.value);
      this.httpService.edit(this.p||'',this.newBlog).subscribe(
      // this.serviceblog.editUserData(this.user._id!,this.users).subscribe(

        a=>{
          //this.router.navigateByUrl('/home');
          console.log(a);
          // this.Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.Router.navigate(['../profile']);


  // }
  // )
})
  }
}
/*


*/
