<<<<<<< HEAD
import { GdgPage } from './app.po';

describe('gdg App', () => {
  let page: GdgPage;

  beforeEach(() => {
    page = new GdgPage();
=======
import { AppPage } from './app.po';

describe('safetarija App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
>>>>>>> origin/master
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
