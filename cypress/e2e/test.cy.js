import * as landingPage from "../support/pageModules/landingPage";

describe('Main Flow', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
    });

  it('Verify Landing Page', () => {
        landingPage.verifyElementsOnLandingPage();
        landingPage.verifyExistingMovieCards();

  });

})