import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'signUP',component:SignUPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
