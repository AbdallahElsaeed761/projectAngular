import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// <<<<<<< HEAD
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { EnrollmentService } from './enrollment.service';
import{TokenInterceptorService} from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule}from '@angular/material/card';

import{MatButtonModule} from '@angular/material/button';



export function tokenGetter() {
  return localStorage.getItem('access_token');
}



import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { BlogAddComponent} from './blogadd/blogadd.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUPComponent,
    HomeComponent,
    ProfileComponent,
    FollowingComponent,
    FollowersComponent,
    BlogAddComponent,
    EditBlogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,ReactiveFormsModule,MatButtonModule,

    FormsModule,HttpClientModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }), BrowserAnimationsModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    EnrollmentService,

    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true,
    },

// =======
    // BlogEditComponent,

  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   FormsModule,
  //   HttpClientModule,
// >>>>>>> 96d21db6daf3c39fb818677e0139ffdd4d4366d4
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
