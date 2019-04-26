import { citizens } from '../unit/__mocks__/citizens.json';

describe('Get a citizen', () => {
  beforeEach(() => {});

  it('Succesfully get a citizen', () => {
    cy.visit('/');
    cy.contains(`Brastlewark's Village`);
    cy.get('.CardDescription a').click();
    cy.url().should('includes', 'village');
    cy.contains('Citizens');

    cy.get('.CitizenLandscape button')
      .should('contain', 'Details')
      .first()
      .click();

    cy.get('.VillageDrawer--active .VillageDrawerFeatureItem');
  });
});
