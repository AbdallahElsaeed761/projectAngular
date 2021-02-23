import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  blogs:Blog[]|any;
  user: Signup = new Signup("", "", "", "", "","");
  users=new FormData();
  id:string|any;
  editForm: FormGroup;
  selectedFile :File|any;

  // ind:number=0;
  constructor(public serviceblog:EnrollmentService,public blogservice:BlogService,public router:Router,public fs:FormBuilder) {
    this.editForm = this.fs.group({
      firstname: '',
      lastname:''

    });
  }
  onFileSelected(event){
    this.selectedFile =<File> event.target.files[0];
    this.users.append('photo', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
  }
  addComment(id,comment) {
    let re={
      id:id,
      Comment:{
        body:comment
      }
    }
    this.blogservice.addComment(re).subscribe(
      a => {
        console.log(a);

      }
    )
    location.reload();
  }

// upload(photo){
//       this.serviceblog.editUserData({photo:photo}).subscribe(
//         b=>{
//           console.log(b)
//         }
//       )
//     }
ngOnInit(): void {
    this.blogservice.getMyBlog().subscribe(
      a=>{
        this.blogs=a;
      }
    )
    this.serviceblog.getUserData().subscribe(
      b=>{
        this.user=b;
      }
    )
}
del(id:string){
let r=confirm("Are You Sure Delete Blog");
if(r==true)
{
  this.blogservice.deleteblog(id).subscribe(
    d=>{
  console.log(d);
      this.blogs=this.blogs.filter(blog=>blog._id!=id);
  })
}
this.router.navigate(['../profile']);



}
save()
{

    this.users.append('firstname',this.editForm.get("firstname")?.value);
    this.users.append('lastname',this.editForm.get("lastname")?.value);

    //this.newBlog.append('tags',this.blog.tags||[]);

      this.serviceblog.editUserData(this.user._id!,this.users).subscribe(
        a=>{
          //this.router.navigateByUrl('/home');
          console.log(a);
          // this.Router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          //this.router.navigate(['../profile']);
          location.reload();


  // }
  // )
})
  }
}

