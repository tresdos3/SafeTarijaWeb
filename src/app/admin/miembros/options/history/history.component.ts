import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Location } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  $ID;
  settings = {
    pager: {
      display: true,
      perPage: 3
    },
    columns: {
      titulo: {
        title: 'Titulo',
        filter: false
      },
      visitas: {
        title: 'Visitas',
        filter: false
      },
      url: {
        title: 'Url',
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
      this.db.list(user.uid + '/hijos/' + this.$ID + '/historial')
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
