import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  name: string;
  User$: any;

  constructor(private auth: AuthService, private afDb: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('User is signed in.');
        this.name = user.displayName;
      } else {
        console.log('No user is signed in.');
        this.router.navigate(['/']);
      }
    });
  }
  continuar() {
    console.log('adsads');
    this.router.navigate(['dashboard']);
  }

}
