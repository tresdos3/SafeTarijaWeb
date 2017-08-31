import { GdgPage } from './app.po';

describe('gdg App', () => {
  let page: GdgPage;

  beforeEach(() => {
    page = new GdgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
