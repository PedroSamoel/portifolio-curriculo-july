import userData from '../fixtures/userData.json'
class LoginPage {
  selectors = {
    userEmail: '#email[data-validate="isEmail"][name="email"]',
    userPassword: '#passwd.validate[type="password"]',
    signInBtn: '.login[title="Log in to your customer account"]',
    loginBtn: '#SubmitLogin[name="SubmitLogin"]',                         
    logoutHeader: '.header_user_info .logout[title="Log me out"]',                         
    alertError: '.center_column .alert-danger', 
    boxLogIn: '#center_column #login_form',

    
  // Conta / Informações Pessoais
    //fieldPersonalInfo: '[title="Information"]',                                                                  // My account: Personal info link
    boxPersonalInfo: '[action="http://www.automationpractice.pl/index.php?controller=identity"]',                // My account: Personal info form box
    gridMyAccount: '.col-lg-4 .myaccount-link-list',                                                             // My account: Account options grid

  // Formulário de perfil / edição
    //socialTitle: '[name="id_gender"][type="radio"]',                      // Profile: Gender radio buttons
    //firstName: '#firstname',                                              // Profile: First name
    //lastName: '#lastname',                                                // Profile: Last name
    //registerEmail: "#email[name='email']",                                // Profile: Email field (edit)
    //daysBirth: '#days[name="days"]',                                      // Profile: Day of birth (select)
    //monthBirth: '#months[name="months"]',                                 // Profile: Month of birth (select)
    //yearBirth: '#years[name="years"]',                                    // Profile: Year of birth (select)
    //currentPassword: '#old_passwd[name="old_passwd"]',                    // Profile: Current password
    //newPassword: '#passwd[data-validate="isPasswd"]',                     // Profile: New password
    //confirmationPassword: '#confirmation[name="confirmation"]',           // Profile: Confirm new password
    //saveBtn: 'button[name="submitIdentity"]',                             // Profile: Save/submit button
    //successfullyUpdated: '.alert.alert-success',                          // Profile: Success alert
  }

  // Home Page
  accessLoginPage() {
    cy.visit('http://www.automationpractice.pl/index.php')
  }

  clickSignIn() {
    cy.get(this.selectors.signInBtn).click()
  }

  expectedUrlFormLogin() {
    cy.location('search').should('eq', '?controller=authentication&back=my-account')
  }

  openLoginForm() {
    cy.get(this.selectors.signInBtn).click()
  }

 loginBtnClick() {
    cy.get(this.selectors.loginBtn).click()
     }

  linkLocationPostLogin() {
    cy.location('pathname').should('eq', '/index.php')
    cy.location('search').should('eq', '?controller=my-account')
  }

  visibleBoxLogin() {
    cy.get(this.selectors.boxLogIn).should('be.visible')    
  }


  checkErrorAlert() {
    cy.get(this.selectors.alertError)
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty')
  }

  loginWithInvalidCredentials(email, password, expectedErrorMessage = /error|invalid|failed|required/i) {
    cy.get(this.selectors.userEmail).clear().type(email)
    cy.get(this.selectors.userPassword).clear().type(password)
    cy.get(this.selectors.loginBtn).click()
    cy.get(this.selectors.alertError)
      .should('be.visible')
      .invoke('text')
      .should('match', expectedErrorMessage)
}


  loginWithValidCredentials() {
    cy.get(this.selectors.userEmail)
    .type(userData.userValid.username)
    cy.get(this.selectors.userPassword)
    .type(userData.userValid.password)
    cy.get(this.selectors.loginBtn).click()
}

 gridMyAccountVisible() {
  cy.get(this.selectors.gridMyAccount).should('be.visible') 
}
 

 logout() {
   cy.get(this.selectors.logoutHeader).click()
}



  
  
}

export default LoginPage
