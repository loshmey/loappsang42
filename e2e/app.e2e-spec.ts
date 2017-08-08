import { Ng2FundamentalsCliPage } from './app.po';

describe('ng2-fundamentals-cli App', () => {
  let page: Ng2FundamentalsCliPage;

  beforeEach(() => {
    page = new Ng2FundamentalsCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
