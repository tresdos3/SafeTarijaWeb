import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SigninComponent } from './content/signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './content/signup/signup.component';
import { LostpasswordComponent } from './content/lostpassword/lostpassword.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AuthService } from './core/service/auth.service';
import { NavbarComponent } from './content/component/navbar/navbar.component';
import { FooterComponent } from './content/component/footer/footer.component';
import { SidebarComponent } from './content/component/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LostpasswordComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAboHBF8RZ2S7DS9XWKMc-JlTuU1Oaiuag',
      authDomain: 'sistemaq-f68e8.firebaseapp.com',
      databaseURL: 'https://sistemaq-f68e8.firebaseio.com',
      projectId: 'sistemaq-f68e8',
      storageBucket: 'sistemaq-f68e8.appspot.com',
      messagingSenderId: '1083800873164'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'password',
        component: LostpasswordComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [AngularFireAuth, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
