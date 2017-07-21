
import { RetailAngular2Page } from './app.po';

describe('retail-angular2 App', () => {
  let page: RetailAngular2Page;

  beforeEach(() => {
    page = new RetailAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
