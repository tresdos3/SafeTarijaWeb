import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getHijos(uid: string): any {
    return this.db.list('/' + uid + '/hijos');
  }
  getHijo($uid: string, $hijo: string): any {
    return this.db.object('/' + $uid + '/hijos/' + $hijo + '/ubicacion');
  }
}
