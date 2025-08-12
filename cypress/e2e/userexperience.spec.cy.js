import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import AccountManagementPage from '../pages/accountManagementPage'

const loginPage = new LoginPage()
const accountManagementPage = new AccountManagementPage()


describe("User's Experience - TESTS", () => {

  it('Unsuccessful Login', () => {
    loginPage.accessLoginPage()
    loginPage.clickSignIn()
//Chek login without ID
    loginPage.loginWithoutId() 
//Check login with invalid credentials
    loginPage.loginWithInvalidCredentials(
      userData.userInvalid.username,
      userData.userInvalid.password
)
  })

it('Successful Login and Logout', () => {

  loginPage.loginWithValidCredentials() 
  loginPage.logout()
  })
})

describe('Account Management - Personal Information', () => {

beforeEach(() => {
//Login valid credentials before each test
  loginPage.loginWithValidCredentials()
})

it('Edit my personal information', () => {
  accountManagementPage.accessYourPersonalInformation()
  accountManagementPage.editYourPersonalInformation()
  accountManagementPage.checkSuccessNotification()
})
})