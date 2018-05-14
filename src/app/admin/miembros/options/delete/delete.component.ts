import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { messaging } from 'firebase';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  $ID: string;
  $message: boolean;

  constructor(private location: Location, private params: ActivatedRoute, private afAuth: AngularFireAuth,
    private db: AngularFireDatabase, private route: Router) {
      params.params.subscribe(getId => {
        this.$ID = getId.id;
      });
    }

  ngOnInit() {
    this.afAuth.authState.subscribe(state => {
      this.db.object(state.uid + '/hijos/' + this.$ID)
        .subscribe(data => {
          if (data.estado === 'no') {
            this.$message = true;
          } else {
            this.$message = false;
          }
        });
    });
  }
  eliminar() {
    this.afAuth.authState.subscribe(state => {
      this.db.object(state.uid + '/hijos/' + this.$ID)
        .remove();
        this.route.navigate(['dashboard']);
    });
  }
  KillSesion() {
    console.log('asdasd');
    this.afAuth.authState.subscribe(state => {
      this.db.object(state.uid + '/hijos/' + this.$ID)
        .update({estado: 'no'});
    });
  }
  back() {
    this.location.back();
  }
}
