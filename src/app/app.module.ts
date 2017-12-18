import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SigninComponent } from './content/signin/signin.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { SignupComponent } from './content/signup/signup.component';
import { LostpasswordComponent } from './content/lostpassword/lostpassword.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AuthService } from './core/service/auth.service';
import { NavbarComponent } from './content/component/navbar/navbar.component';
import { FooterComponent } from './content/component/footer/footer.component';
import { SidebarComponent } from './content/component/sidebar/sidebar.component';
import { WelcomeComponent } from './content/dashboard/welcome/welcome.component';
import { ProfileComponent } from './content/dashboard/profile/profile.component';
import { LocalizarComponent } from './content/dashboard/localizar/localizar.component';
import { DataService } from './core/service/data.service';
import { LocalizarpComponent } from './content/dashboard/localizarp/localizarp.component';
import { NotificationService } from './core/service/notification.service';
import { NotificationComponent } from './content/dashboard/notification/notification.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LostpasswordComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    WelcomeComponent,
    ProfileComponent,
    LocalizarComponent,
    LocalizarpComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAboHBF8RZ2S7DS9XWKMc-JlTuU1Oaiuag',
      authDomain: 'sistemaq-f68e8.firebaseapp.com',
      databaseURL: 'https://sistemaq-f68e8.firebaseio.com',
      projectId: 'sistemaq-f68e8',
      storageBucket: 'sistemaq-f68e8.appspot.com',
      messagingSenderId: '1083800873164'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP8cVkhkY5rz0wC-DCopSUkxw8mICYOtg'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: SigninComponent,
        pathMatch: 'full'
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
        component: DashboardComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'welcome'
          },
          {
            path: 'welcome',
            component: WelcomeComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'track',
            component: LocalizarComponent
          },
          {
            path: 'track/:id',
            component: LocalizarpComponent
          },
          {
            path: 'notification',
            component: NotificationComponent
          }
        ]
      }
    ])
  ],
  providers: [AngularFireAuth, AuthService, DataService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
