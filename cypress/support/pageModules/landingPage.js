const sortBtn = '*[id=sort]';
const navigationTab = '*[id=navigationTab]';
const movieCard = '*[id=movieCard]';
const favoriteTab = '*[id=favoriteTab]';

export function verifyExistingMovieCards() {
    cy.get(movieCard)
        .each(($element) => {
            expect($element).to.be.visible
        }).should('have.length', Cypress.env('length'));

}

export function verifyElementsOnLandingPage() {
        cy.get(sortBtn).should('be.visible');
        cy.get(navigationTab).should('be.visible');
        cy.get(favoriteTab).should('be.visible');
}