import { AuthService } from './../services/auth.service';
import { WindowService } from './../services/window-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


export class Telefono {
  codigo: string;
  linea: string;

  get numBo() {
    const num = this.codigo + this.linea;
    return num;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  windowsRef: any;
  telefono = new Telefono();
  VerificacionCode: string;
  User: any;
  item: any;
  confirmacion: any = false;
  NumCel: any;

  form: FormGroup;
  palabra: string;
  activar = false;
  noLetras = false;

  constructor(private fb: FormBuilder, private session: AuthService,
    private win: WindowService, private db: AngularFireDatabase,
    public afAuth: AngularFireAuth, private router: Router) {
    session.existeSession();
    this.crearForm();
  }

  ngOnInit() {
    this.windowsRef = this.win.windowRef;
    // this.windowsRef.recaptchaVerifier = new this.auth.RecaptchaVerifier('recaptcha-container')
    this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowsRef.recaptchaVerifier.render();
  }
  crearForm() {
    this.form = this.fb.group({
      numeros: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  registrar(form: FormGroup) {
    const num = '+591' + JSON.parse(JSON.stringify(form)).numeros;
    this.NumCel = num;
    this.sendLoginCode(num);
  }
  back(event) {
    this.noLetras = false;
  }
  sendLoginCode(num: any) {
    this.activar = true;
    const appVerifier = this.windowsRef.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.confirmacion = result;

      })
      .catch(error => console.log(error));
  }
  verifyLoginCode() {
    this.confirmacion
      .confirm(this.VerificacionCode)
      .then(result => {
        this.User = JSON.parse(JSON.stringify(result.user));
        this.db.object(this.User.uid, { preserveSnapshot: true })
          .subscribe(data => {
            if (data.exists()) {
              this.router.navigate(['datos']);
            } else {
              this.router.navigate(['alerta']);
            }
          });
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-verification-code') {
          alert('el codigo ingresado es incorrecto');
        }
      });
  }

}
