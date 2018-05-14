import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  $ID;
  settings = {
    pager: {
      display: true,
      perPage: 3
    },
    columns: {
      nombre: {
        title: 'Nombre',
        filter: false
      },
      numero: {
        title: 'Numero de Celular',
        filter: false
      }
    },
    actions: {
      columnTitle: 'Opciones',
      add: false,
      edit: false,
      delete: false
    },
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
  };
  source: LocalDataSource;
  constructor(private location: Location, private params: ActivatedRoute,
    private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) {
    params.params.subscribe(param => {
      this.$ID = param.id;
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.db.list(user.uid + '/hijos/' + this.$ID + '/contactos')
        .subscribe(data => {
          this.source = new LocalDataSource(data);
          console.log(data);
        });
    });
  }
  back() {
    this.location.back();
  }

}
