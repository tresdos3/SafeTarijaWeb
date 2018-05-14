import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  $ID = 'Cargando...';
  $Datos: Array<any>;

  nombre: string;
  lat = 51.678418;
  lng = 7.809007;
  zoon = 17;

  constructor(private location: Location, private params: ActivatedRoute,
     private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) {
    params.params.subscribe(param => {
      this.$ID = param.id;
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.db.object(user.uid + '/hijos/' + this.$ID)
        .subscribe(data => {
          this.nombre = data.nombre;
          this.lat = data.ubicacion.latitud;
          this.lng = data.ubicacion.longitud;
        });
    });
  }
  back() {
    this.location.back();
  }
}
