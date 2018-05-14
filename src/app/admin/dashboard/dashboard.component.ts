import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  DisplayName;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

   ngOnInit() {
    this.MenuFull();
    this.afAuth.authState.subscribe(user => {
      this.DisplayName = user.displayName;
      if (!user) {
        this.router.navigate(['/']);
      }
    });
  }
  SignOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
  MenuFull() {
    (function () {

      const Menu = (function () {
        const burger = document.querySelector('.burger');
        const menu = document.querySelector('.menu');
        const menuList = document.querySelector('.menu__list');
        const brand = document.querySelector('.menu__brand');
        const menuItems = document.querySelectorAll('.menu__item');

        let active = false;

        const toggleMenu = function () {
          if (!active) {
            menu.classList.add('menu--active');
            menuList.classList.add('menu__list--active');
            brand.classList.add('menu__brand--active');
            burger.classList.add('burger--close');
            for (let i = 0, ii = menuItems.length; i < ii; i++) {
              menuItems[i].classList.add('menu__item--active');
            }

            active = true;
          } else {
            menu.classList.remove('menu--active');
            menuList.classList.remove('menu__list--active');
            brand.classList.remove('menu__brand--active');
            burger.classList.remove('burger--close');
            for (let j = 0, jj = menuItems.length; j < jj; j++) {
              menuItems[j].classList.remove('menu__item--active');
            }

            active = false;
          }
        };

        const bindActions = function () {
          burger.addEventListener('click', toggleMenu, false);
        };

        const init = function () {
          bindActions();
        };

        return {
          init: init
        };

      }());

      Menu.init();

    }());
  }

}
