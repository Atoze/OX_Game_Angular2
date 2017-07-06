import { OxGamePage } from './app.po';

describe('ox-game App', () => {
  let page: OxGamePage;

  beforeEach(() => {
    page = new OxGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
