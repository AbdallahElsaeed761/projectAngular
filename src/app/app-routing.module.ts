import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'signUP',component:SignUPComponent},
  {path:'home',component:HomeComponent},
  {path:'blogs/add',component:BlogAddComponent},
  {path:'blogs/edit/:id',component:BlogEditComponent},
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
