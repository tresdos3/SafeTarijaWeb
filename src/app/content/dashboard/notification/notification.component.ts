import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/service/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  register_form: FormGroup;
  children: any;
  // tslint:disable-next-line:max-line-length
  constructor(private notifica: NotificationService , private data: DataService, private afAuth: AngularFireAuth, private formBuild: FormBuilder) { }

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
    this.register_form = this.formBuild.group({
      token: ['', [
        Validators.required,
      ]],
      mensaje: ['', [
        Validators.required,
      ]]
    });
  }
  Register(datos: any, isValid: boolean) {
    console.log(datos.mensaje + '&& ' + datos.token);
    this.notifica.SendNotification('Mensaje de tutor', datos.mensaje, datos.token);
    this.register_form.reset();
  }

}
