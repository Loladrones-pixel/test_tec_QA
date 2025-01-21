//Test to validate the live scores visibility

import HomePage from '../pages/HomePage';

describe('Live Scores Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display live scores', () => {
    //Validate element visibility
    HomePage.validateLiveScores();
    cy.get('.ScoreStripContainer_container__xIz72')//Live Scores div container in Home Page
      .find('.ScoreStripGame_gameBroadcastInfo__a8i6A')
      .each(($game) => {
        cy.wrap($game).should('contain.text', 'LP'); 
      });
  });





});
