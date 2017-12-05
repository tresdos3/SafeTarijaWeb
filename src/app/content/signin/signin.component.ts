import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../core/class/login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login_form: FormGroup;
  error_message: string;
  enviarcorreo: false;
  correo: Login;

  constructor(private formBuild: FormBuilder, public toastr: ToastsManager, vcr: ViewContainerRef,
    private auth: AuthService, private afAuth: AngularFireAuth, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      } else {
        this.auth.SignOut();
      }
    });
    this.login_form = this.formBuild.group(
      {
        email: ['', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zñA-ZÑ0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ]]
      }
    );
  }
  login(userLogin: Login, isValid: boolean): void {
    this.error_message = '';
    if (isValid) {
      this.auth.SignIn(userLogin)
        .subscribe(resolve => {
          if (resolve !== true) {
            console.log(resolve);
            if (resolve.code === 'auth/wrong-password') {
              this.toastr.error('La password es incorrecta.', 'Alerta!');
              this.login_form.reset();
            } else if (resolve.code === 'auth/user-not-found') {
              this.toastr.error('El email ingresado no existe.', 'Alerta!');
              this.login_form.reset();
            } else if (resolve[0].code === 'EmailError') {
              this.toastr.warning('Verifique su correo electronico.', 'Alerta!');
              this.enviarcorreo = resolve[0].enviar;
              this.correo = userLogin;
              this.login_form.reset();
            }
          }
        });
    }
  }
  verficar() {
    this.auth.ConfirmationEmail(this.correo.email, this.correo.password)
      .then(resolve => {
        this.auth.SignOut();
        this.toastr.warning('Revisa tu correo electronico.', 'Alerta!');
        this.enviarcorreo = false;
        this.login_form.reset();
      })
  }
}
