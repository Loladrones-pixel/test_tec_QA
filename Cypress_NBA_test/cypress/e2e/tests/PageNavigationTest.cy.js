/*Tests to validate the navigation bar*/ 

import HomePage from '../pages/HomePage';

describe('Pages Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('/');
      });

    it('Buttons Exists in the navigation bar', () => {
        
        HomePage.validateNavigationBar();
        HomePage.validatePage('Games');
        HomePage.validatePage('Schedule');
        HomePage.validatePage('Watch');
        HomePage.validatePage('News');
        HomePage.validatePage('All-Star');
        HomePage.validatePage('Stats');
        HomePage.validatePage('Standings');
        HomePage.validatePage('Teams');
        HomePage.validatePage('Players');
        HomePage.validatePage('NBA Play');
        HomePage.validatePage('Fantasy');
        HomePage.validatePage('NBA Bet');     

        
      });

});