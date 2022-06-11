/// <reference types="cypress" />

describe('home page', () => {
  it('should render home view text', () => {
    cy.visit('/');
    cy.getByTestId('home-title').should('be.visible');
  });
});
