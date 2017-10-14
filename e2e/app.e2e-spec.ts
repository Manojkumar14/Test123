import { Manojangular2Page } from './app.po';

describe('manojangular2 App', () => {
  let page: Manojangular2Page;

  beforeEach(() => {
    page = new Manojangular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
