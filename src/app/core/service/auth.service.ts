import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { User } from '../class/user';
import { Login } from '../class/login';
import { Recuperar } from '../class/recuperar';

@Injectable()
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject(null);
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.afAuth.authState
      .switchMap(auth => {
        if (auth) {
          return this.db.object('users/' + auth.uid);
        } else {
          return Observable.of(null);
        }
      }).subscribe(user => {
        this.user.next(user);
      });
  }
  SignOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
  SignIn(userLogin: Login): Observable<any> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(userLogin.email, userLogin.password)
        .then(user => {
          if (user.emailVerified) {
            return true;
          } else {
            const asd = [{
              code: 'EmailError',
              enviar: true
            }];
            this.SignOut();
            return asd;
          }
        }).catch(error => {
          return error;
        })
    );
  }
  ConfirmationEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        user.sendEmailVerification();
      })
      .catch(error => {
        console.log(error);
      });
  }
  RecoverPassword(datos: Recuperar) {
    return this.afAuth.auth.sendPasswordResetEmail(datos.email)
      .then(e => {
        const error = [
          {
            code: 'send'
          }
        ];
        return error;
      })
      .catch(error => {
        return error;
      });
  }
}
