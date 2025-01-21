/*Tests to validate non-existent page or URL*/ 

describe('404 Page Test', () => {
    it('should display the 404 page for a non-existent route', () => {
      cy.visit('/non-existent-page', { failOnStatusCode: false }); // Prevent Cypress from failing on 404
      cy.contains('Content Unavailable').should('be.visible'); // Replace with the expected text or element for your 404 page
      cy.url().should('include', '/non-existent-page'); // Verify the URL is correct
    });
  });
  