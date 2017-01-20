import { RefugioLeoCliPage } from './app.po';

describe('refugio-leo-cli App', function() {
  let page: RefugioLeoCliPage;

  beforeEach(() => {
    page = new RefugioLeoCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
