import { ProyectAngularPage } from './app.po';

describe('proyect-angular App', function() {
  let page: ProyectAngularPage;

  beforeEach(() => {
    page = new ProyectAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
