import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

  $ChildsList: any;

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('User PhoneNumber: ' + user.phoneNumber);
        console.log('User UID: ' + user.uid);
        this.db.list(user.uid + '/hijos')
          .subscribe(list => {
            this.$ChildsList = list;
            console.log(list);
          });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  AgregarNuevo() {
    this.router.navigate(['dashboard/agregar']);
  }
  opciones(item: any) {
    this.router.navigate(['dashboard/opciones', item.$key]);
  }
}
