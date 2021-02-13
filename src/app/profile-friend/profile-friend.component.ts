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
  user: Signup[] |any;
  blogs: Blog[]|any;
  // owner:Register=new Register("","","","","");
  follow: boolean|any;
  userId:any;
  btn: string = "follow";
  constructor(public blogService: BlogService, public userservice: EnrollmentService, public authservice: AuthService, public router: Router, public ar: ActivatedRoute) { }
  followMe() {
    if(this.btn=="follow"){
    this.userservice.followUser(this.user.username).subscribe(
      a => {
        console.log(a);
        location.reload();
      }
    )

  }
    else{
      this.userservice.unfollowUser(this.user.username).subscribe(
        a=>{
          console.log(a);
         // location.reload();
        }
      )

    }
  }
  ngOnInit(): void {
    let username: string = "";
    this.userId=localStorage.getItem('userId');

    this.ar.params.subscribe(
      a => (
        username = a['username']
      )
    )


    this.userservice.getUser(username).subscribe(
      a => {
        console.log(this.userId);
        console.log(a[0].following);


        if(a[0].followers?.includes(this.userId))
        {
          this.btn="unfollow";
        }
        else
        {
          this.btn="follow";
        }
        console.log(a);
        this.user = a;
        this.blogService.getFBlog(this.user[0]._id).subscribe(
          a => {
            console.log(a);
            this.blogs = a.reverse();
          }
        )
      }

    )
    this.userservice.getUserData().subscribe(
      a => {
        a.following||[''].findIndex(value => {
          if (value == username)
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
