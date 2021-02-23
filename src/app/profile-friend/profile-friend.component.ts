import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { AuthService } from '../services/auth.service';
import { BlogService } from '../services/blog.service';
import { Blog } from '../_models/blog';
import { Signup } from '../_models/signup';

@Component({
  selector: 'app-profile-friend',
  templateUrl: './profile-friend.component.html',
  styleUrls: ['./profile-friend.component.css']
})
export class ProfileFriendComponent implements OnInit {
  user:any;
  blogs: any;
  // owner:Register=new Register("","","","","");
  follow: boolean|any;
  userId:any;
  btn: string = "follow";
  followingArr:string[]|any;
  follOrUn:string="follow";
  username: string = "";
  sss:Signup|any;
  constructor(public blogService: BlogService, public userservice: EnrollmentService, public authservice: AuthService, public router: Router, public ar: ActivatedRoute) {

    this.userId=localStorage.getItem('userId');
    //debugger
    this.ar.params.subscribe(
      a => (
        this.username =a ['_id']
      )
    )
        console.log(this.username);
       // debugger;
    this.userservice.getUserAndBlogs(this.username).subscribe(
      a => {

        this.sss=a.result;
        this.blogs=a.Blogs


        console.log(a.result.photo);


        this.user = a;
        this.blogService.getFBlog(this.user._id).subscribe(
          a => {
            console.log(a);
            this.blogs = a.reverse();
          }
        )
      }


    )

  console.log(this.user);



  }



  followMe(event:any,id:String){


    if(event.target.innerText==="unfollow"){

      this.userservice.unfollowUser(this.username).subscribe(r=>{
        console.log(r);
        this.ngOnInit();
      },e=>{
        console.log(e);
      });

    }else{


      this.userservice.followUser(this.username).subscribe(r=>{
        this.ngOnInit();
        console.log(r);
      },e=>{
        console.log(e);
      });

    }


  }

  addComment(id,comment) {
    let re={
      id:id,
      Comment:{
        body:comment
      }
    }
  }

  ngOnInit(): void {

    this.userservice.getUserData2().subscribe(res=>{

      this.followingArr = res.following;

        for(let i=0; i<this.followingArr.length;i++){

         if(this.followingArr[i]==this.username){
           this.follOrUn="unfollow"

            break;
          }else{
           this.follOrUn="follow"

          }
        }
     });




    this.userservice.getUserData().subscribe(
      a => {
        a.following||[''].findIndex(value => {
          if (value == this.username)
          {
            this.btn = "unfollow";
            //  console.log(this.follow);
          }

        });

        // this.owner=a;
        // console.log(a);
      }
    );
    //console.log(this.owner);


  }



}

/*

  constructor() { }


*/
