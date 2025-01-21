/*Tests to validate the login page and its functionality*/ 

import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/account/sign-in');
  });


  it('Should display error for invalid input', () => {
    LoginPage.validateEmail(' ');
    cy.contains('Email address is required.').should('be.visible');
    cy.contains('Password is required.').should('be.visible');
    cy.wait(5000);
  });

  it('Should display error for invalid email format', () => {
    LoginPage.validateEmail('aaa@aaa');
    cy.contains('Email address must be a valid email.').should('be.visible');
    cy.contains('Password is required.').should('be.visible');
    cy.wait(5000);
    
  });

  //test user email:natalia68_387@vuket.org , password: NBApassword123  
  it('Show user profile after login', () => {
    
    LoginPage.login('natalia68_387@vuket.org', 'NBApassword123');
    cy.url().should('include', '/account/nbaprofile'); 
  });


});

