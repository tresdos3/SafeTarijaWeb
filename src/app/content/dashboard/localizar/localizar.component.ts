import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/service/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localizar',
  templateUrl: './localizar.component.html',
  styleUrls: ['./localizar.component.css']
})
export class LocalizarComponent implements OnInit {
  lat = -21.5368983;
  lng = -64.7437983;
  zoom = 17;
  children: any;
  constructor(private data: DataService, private afAuth: AngularFireAuth, private route: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.data.getHijos(user.uid).subscribe(res => {
          this.children = res;
        });
      } else {
        console.log('Error al adquiri lista de hijos');
      }
    });
  }
  maps($uid: string) {
    this.route.navigate(['/dashboard/track/' + $uid]);
  }

}
