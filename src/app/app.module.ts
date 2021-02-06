import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { EnrollmentService } from './enrollment.service';
import{TokenInterceptorService} from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule}from '@angular/material/card';
// import{MatButtonModule} from '@angular/material/button';


// ...
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUPComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,
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
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
