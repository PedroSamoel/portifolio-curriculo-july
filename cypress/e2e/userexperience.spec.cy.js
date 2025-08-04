import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()


describe.only("User's Experience - TESTS", () => {

  it('Unsuccessful Login', () => {
    loginPage.accessLoginPage()
    loginPage.clickSignIn()
    loginPage.expectedUrlFormLogin()

// 1. Tentar logar sem preencher nada
    cy.get(loginPage.selectors.loginBtn).click()
// 2. Valida mensagem de erro nos campos obrigatórios
    loginPage.checkErrorAlert()
    
    loginPage.loginWithInvalidCredentials(
      userData.userInvalid.username,
      userData.userInvalid.password
)
  })

it('Successful Login and Logout', () => {
  loginPage.accessLoginPage()
  loginPage.clickSignIn()
  loginPage.loginWithValidCredentials()
  cy.get(loginPage.selectors.gridMyAccount).should('be.visible')
  cy.location('pathname').should('eq', '/index.php')
  cy.location('search').should('eq', '?controller=my-account')

  // Logout
  loginPage.logout()
  })
})

describe('Account Management - Personal Information', () => {

// Verifica se o login foi bem-sucedido antes de cada teste
beforeEach(() => {
  loginPage.accessLoginPage()
  loginPage.clickSignIn()
  loginPage.loginWithValidCredentials()
  cy.get(loginPage.selectors.gridMyAccount).should('be.visible')
})
  })

  it('My personal information', () => {
    cy.get(loginPage.selectors.fieldPersonalInfo).click()
    cy.get(loginPage.selectors.boxPersonalInfo)
    cy.location('search').should('eq', '?controller=identity')

///Alteração de cadastro
    cy.get(loginPage.selectors.socialTitle).check('1')
    cy.get(loginPage.selectors.firstName).clear().type('Test')
    cy.get(loginPage.selectors.lastName).clear().type('Test')
    cy.get(loginPage.selectors.registerEmail).clear().type('noname@gmail.com')
    cy.get(loginPage.selectors.daysBirth).select('1')
    cy.get(loginPage.selectors.monthBirth).select('1') 
    cy.get(loginPage.selectors.yearBirth).select('2000') 
    cy.get(loginPage.selectors.currentPassword).type('TestPassword')
    cy.get(loginPage.selectors.newPassword).clear()
    cy.get(loginPage.selectors.confirmationPassword).clear()
    cy.get(loginPage.selectors.saveBtn).click()
///Notificação deverá aparecer p/ usuário
    cy.get(loginPage.selectors.successfullyUpdated)
  .should('be.visible')
  .invoke('text')
  .should('match', /success|updated|saved/i)

  })

