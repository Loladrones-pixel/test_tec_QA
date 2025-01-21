class LoginPage {
  get usernameInput() {
    return cy.get('#email'); 
  }
  get passwordInput() {
    return cy.get('#password'); 
  }
  get loginButton() {
    return cy.get('button[type="submit"]'); 
  }

  
  validateEmail (username) {
    this.usernameInput.type(username);
    this.loginButton.click();
  }

  //validate login credentials
  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }


}

export default new LoginPage();

  