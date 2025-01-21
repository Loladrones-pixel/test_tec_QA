class HomePage {

    get liveScoresSection() {
      return cy.get('.ScoreStripContainer_container__xIz72'); 
    }

    get PageButton (){
        return cy.get('#nav-ul');
    }

    //Validates element visibility
    validateLiveScores() {
        this.liveScoresSection.should('be.visible');
    }

    validateNavigationBar() {
        this.PageButton.should('be.visible');
    }

    //Validate if button exists in the nav bar
    validatePage(page) {
        this.PageButton.contains(page).should('exist');
    }



  }
    
  export default new HomePage();
  