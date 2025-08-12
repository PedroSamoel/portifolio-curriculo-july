import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'
import AccountManagementPage from '../pages/accountManagementPage'

const loginPage = new LoginPage()
const accountManagementPage = new AccountManagementPage()


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