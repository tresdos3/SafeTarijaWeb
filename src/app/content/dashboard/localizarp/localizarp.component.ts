import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/service/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-localizarp',
  templateUrl: './localizarp.component.html',
  styleUrls: ['./localizarp.component.css']
})
export class LocalizarpComponent implements OnInit {

  zoom = 17;
  kid = {
    latitud: -21.5368983,
    longitud: -64.7437983
  };
  $kid: any;
  constructor(private data: DataService, private afAuth: AngularFireAuth, private param: ActivatedRoute) {
    param.params.subscribe(p => {
      this.$kid = p['id'];
      console.log(p['id']);
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.data.getHijo(user.uid, this.$kid).subscribe(res => {
          this.kid = res;
        });
      } else {
        console.log('Error al adquiri lista de hijos');
      }
    });
  }

}
