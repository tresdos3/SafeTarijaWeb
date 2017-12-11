import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../../core/service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'welcome', title: 'Bienvenido', icon: 'dashboard', class: '' },
  { path: 'profile', title: 'Perfil', icon: 'person_add', class: '' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  usuario$: FirebaseObjectObservable<any>;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
