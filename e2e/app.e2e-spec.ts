import { MelonbeachblogAngularPage } from './app.po';

describe('melonbeachblog-angular App', () => {
  let page: MelonbeachblogAngularPage;

  beforeEach(() => {
    page = new MelonbeachblogAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
