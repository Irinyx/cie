import config from "../../config";
import * as landingPage from "../../support/pageModules/";

describe('Main Flow', () => {
    beforeEach(() => {
        cy.visit(config.url)
    });

  it('Verify Landing Page', () => {
        landingPage.verifyElementsOnLandingPage();
        landingPage.verifyExistingMovieCards();

  });

})