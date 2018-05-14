import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class NotificationService {

  constructor(public http: Http) { }

  SendNotification(titulo: string, mensaje: string, token: string) {
    // direccion url
    const url = 'https://fcm.googleapis.com/fcm/send';
    const body = {
      'notification': {
        'title': titulo,
        'body': mensaje,
        'sound': 'default',
        'click_action': 'FCM_PLUGIN_ACTIVITY',
        'icon': 'fcm_push_icon'
      },
      'to': token
    };
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      // tslint:disable-next-line:max-line-length
      'Authorization': 'key=AAAA_FeQ6Mw:APA91bHUSs_WURI8iIm9uQhUV4Mw3Nrx-RDTidWcuDBEst8bFSlIfwD4ZSSj11y58K00B0ByWJs4OPMG1bp13NUIcR3r96AokGC-iznlFPROQ4d2cAiSe8GpFPcxkg0QIJfl5dGzPdub'
    });
    const options = new RequestOptions({ headers: headers });
    this.http.post(url, body, options).map(response => {
      // console.log(response);
      console.log('Notificaion Enviada');
    }).subscribe(data => {
      console.log('Notificacion Envidad');
    });
  }

}
