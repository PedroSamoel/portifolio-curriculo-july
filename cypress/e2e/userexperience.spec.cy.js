import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import dashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()


describe("User's Experience - TESTS", () => {

  it('Unsuccessful Login', () => {
    loginPage.accessLoginPage()
    loginPage.clickSignIn()
    loginPage.expectedUrlFormLogin()

// 1. Tentar logar sem preencher nada
    loginPage.loginBtnClick()
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
  loginPage.gridMyAccountVisible()
  loginPage.linkLocationPostLogin()

  // Logout
  loginPage.logout()
  loginPage.visibleBoxLogin()

  })
})

describe('Account Management - Personal Information', () => {

// Verifica se o login foi bem-sucedido antes de cada teste
beforeEach(() => {
  loginPage.accessLoginPage()
  loginPage.clickSignIn()
  loginPage.loginWithValidCredentials()
  loginPage.gridMyAccountVisible()
  })
   
  it('My personal information', () => {
    loginPage.fieldPersonalInfo()  
    loginPage.boxPersonalInfo() 
    loginPage.checkUrlFormPersonalInfo()
///Alteração de cadastro
    loginPage.editYourPersonalInformation()
///Notificação deverá aparecer p/ usuário
    loginPage.checkSuccessNotification()

  })
})