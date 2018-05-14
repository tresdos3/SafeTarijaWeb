import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  estado: boolean;
  sesion: boolean;
  constructor(private route: Router, private afAuth: AngularFireAuth) {
    this.estado = false;
  }
  haIniciado() {
    this.estado = true;
  }
  haCerrado() {
    this.estado = false;
  }
  existeSession() {
    this.afAuth.authState.subscribe(exist => {
      if (exist) {
        this.route.navigate(['dashboard']);
      }
    });
  }

}
