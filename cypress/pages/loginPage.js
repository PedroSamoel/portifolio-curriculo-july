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
    boxPersonalInfo: '[action="http://www.automationpractice.pl/index.php?controller=identity"]',                // My account: Personal info form box
    gridMyAccount: '.col-lg-4 .myaccount-link-list',                                                             // My account: Account options grid
  }

  accessLoginPage() {
    cy.visit('http://www.automationpractice.pl/index.php')
  }

  clickSignIn() {
    cy.get(this.selectors.signInBtn).click()
    cy.location('search').should('eq', '?controller=authentication&back=my-account')
  }

  loginWithoutId() {
    cy.get(this.selectors.loginBtn).click()
    cy.get(this.selectors.alertError)
      .should('be.visible')
      .invoke('text')
      .should('not.be.empty')
  }

  linkLocationPostLogin() {
    cy.location('pathname').should('eq', '/index.php')
    cy.location('search').should('eq', '?controller=my-account')
  }

  loginWithInvalidCredentials(email, password, expectedErrorMessage = /error|invalid|failed|required/i) {
    cy.get(this.selectors.userEmail).clear() .type(email)
    cy.get(this.selectors.userPassword).clear() .type(password)
    cy.get(this.selectors.loginBtn).click()
    cy.get(this.selectors.alertError)
      .should('be.visible')
      .invoke('text')
      .should('match', expectedErrorMessage)
}

  loginWithValidCredentials() {
    this.accessLoginPage()
    this.clickSignIn()
    cy.get(this.selectors.userEmail)
    .type(userData.userValid.username)
    cy.get(this.selectors.userPassword)
    .type(userData.userValid.password)
    cy.get(this.selectors.loginBtn).click()
    cy.get(this.selectors.gridMyAccount).should('be.visible') 
}

logout() {
   cy.get(this.selectors.logoutHeader).click()
   cy.get(this.selectors.boxLogIn).should('be.visible') 
}

  gridMyAccountVisible() {
    cy.get(this.selectors.gridMyAccount).should('be.visible')
  } 
  
}

export default LoginPage
