import { AngularSamplePage } from './app.po';

describe('angular-sample App', () => {
  let page: AngularSamplePage;

  beforeEach(() => {
    page = new AngularSamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
