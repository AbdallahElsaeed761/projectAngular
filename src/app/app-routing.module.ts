import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogAddComponent } from './blogadd/blogadd.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'signUP',component:SignUPComponent},
// <<<<<<< HEAD
{path:'profile',component:ProfileComponent},
{path:'follower',component:FollowersComponent},
{path:'following',component:FollowingComponent},
{path:'addblog',component:BlogAddComponent},
{path:'edit/:id',component:EditBlogComponent},



  {path:"**",component:HomeComponent},

// =======
  {path:'home',component:HomeComponent},
  // {path:'blogs/add',component:BlogAddComponent},
  // {path:'blogs/edit/:id',component:BlogEditComponent},
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
// >>>>>>> 96d21db6daf3c39fb818677e0139ffdd4d4366d4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
