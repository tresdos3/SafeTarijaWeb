import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  name: string;
  form: FormGroup;
  activar = false;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.router.navigate(['/']);
      }
    });
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  Registrar(form: FormGroup) {
    console.log('asdasd');
    console.log(form);
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.db.list(user.uid + '/hijos')
          .push({
            alerta: 'no',
            estado: 'no',
            nombre: JSON.parse(JSON.stringify(form)).nombre,
            sdk: 0,
            token: null,
            ubicacion: {
              latitud: 0,
              longitud: 0
            }
          });
      }
      this.router.navigate(['dashboard']);
    });
  }

}
