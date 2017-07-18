import { Angular2RetailPage } from './app.po';

describe('angular2-retail App', () => {
  let page: Angular2RetailPage;

  beforeEach(() => {
    page = new Angular2RetailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
