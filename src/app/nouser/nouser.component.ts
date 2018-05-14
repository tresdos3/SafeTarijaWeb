import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-nouser',
  templateUrl: './nouser.component.html',
  styleUrls: ['./nouser.component.css']
})
export class NouserComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  Salir() {
    this.afAuth.auth.signOut();
  }
}
