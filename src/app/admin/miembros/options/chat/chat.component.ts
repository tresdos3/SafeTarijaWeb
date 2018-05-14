import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  $ID: string;
  $TOKEN: string;
  form: FormGroup;

  constructor(private location: Location, private params: ActivatedRoute,
    private notification: NotificationService, private fb: FormBuilder,
    private db: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router) {
      params.params.subscribe(param => {
        this.$ID = param.id;
      });
    }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.db.object(user.uid + '/tokenP')
        .subscribe(d => {
          console.log(d.$value);
        });
    });
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(30)]],
      mensaje: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }
  registrar(form: FormGroup) {
    // tslint:disable-next-line:max-line-length
    this.notification.SendNotification(JSON.parse(JSON.stringify(form)).titulo, JSON.parse(JSON.stringify(form)).mensaje, 'fp3dVoCOCb0:APA91bH0bl7Nm2CDHZBJj3Af6j8kxiwECdvs-EFzJHh3nklyhcmK_vtiMiiBXco2wpNI_FAyzooFTgwKYRPHaHvlvGNPezn7MLzoxwaalpWQxglWKBV6LsbHyTjmCcdgfK9km8i5vpbl');
  }
  back() {
    this.location.back();
  }
}
