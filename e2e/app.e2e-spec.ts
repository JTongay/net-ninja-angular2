import { NetNinjaAngular2Page } from './app.po';

describe('net-ninja-angular2 App', function() {
  let page: NetNinjaAngular2Page;

  beforeEach(() => {
    page = new NetNinjaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
