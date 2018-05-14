import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class GdgPage {
=======
export class AppPage {
>>>>>>> origin/master
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
