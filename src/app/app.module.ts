<<<<<<< HEAD
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { WindowService } from './services/window-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { AngularFireModule } from 'angularfire2/';

import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MiembrosComponent } from './admin/miembros/miembros.component';
import { DatosComponent } from './datos/datos.component';
import { AddnewComponent } from './admin/miembros/addnew/addnew.component';
import { OptionsComponent } from './admin/miembros/options/options.component';
import { LocationComponent } from './admin/miembros/options/location/location.component';
import { HistoryComponent } from './admin/miembros/options/history/history.component';
import { ContactsComponent } from './admin/miembros/options/contacts/contacts.component';
import { ChatComponent } from './admin/miembros/options/chat/chat.component';
import { NotificationService } from './services/notification.service';
import { DeleteComponent } from './admin/miembros/options/delete/delete.component';
import { NouserComponent } from './nouser/nouser.component';

firebase.initializeApp({
  apiKey: 'AIzaSyAboHBF8RZ2S7DS9XWKMc-JlTuU1Oaiuag',
  authDomain: 'sistemaq-f68e8.firebaseapp.com',
  databaseURL: 'https://sistemaq-f68e8.firebaseio.com',
  projectId: 'sistemaq-f68e8',
  storageBucket: 'sistemaq-f68e8.appspot.com',
  messagingSenderId: '1083800873164'
});
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    MiembrosComponent,
    DatosComponent,
    AddnewComponent,
    OptionsComponent,
    LocationComponent,
    HistoryComponent,
    ContactsComponent,
    ChatComponent,
    DeleteComponent,
    NouserComponent,
=======
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
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    Ng2SmartTableModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjh_eb4bFIFLqvbxR98tKiqXIsQK3_Nws'
    }),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'datos',
        component: DatosComponent
      },
      {
        path: 'alerta',
        component: NouserComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent, children: [
          { path: '', component: MiembrosComponent },
          { path: 'agregar', component: AddnewComponent },
          { path: 'opciones/:id', component: OptionsComponent },
          { path: 'ubicar/:id', component: LocationComponent },
          { path: 'historial/:id', component: HistoryComponent },
          { path: 'contactos/:id', component: ContactsComponent },
          { path: 'chat/:id', component: ChatComponent },
          { path: 'delete/:id', component: DeleteComponent },
          { path: '**', component: ErrorComponent },
        ]
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAboHBF8RZ2S7DS9XWKMc-JlTuU1Oaiuag',
      authDomain: 'sistemaq-f68e8.firebaseapp.com',
      databaseURL: 'https://sistemaq-f68e8.firebaseio.com',
      projectId: 'sistemaq-f68e8',
      storageBucket: 'sistemaq-f68e8.appspot.com',
      messagingSenderId: '1083800873164'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    WindowService,
    AuthService,
    AngularFireDatabase,
    AngularFireAuth,
    NotificationService,
  ],
=======
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
>>>>>>> origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
