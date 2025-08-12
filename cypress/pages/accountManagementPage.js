class AccountManagementPage { 
    selectors = {
            fieldPersonalInfo: '[title="Information"]',                                                       // My account: Personal info link
            boxPersonalInfo: '[action="http://www.automationpractice.pl/index.php?controller=identity"]',     // My account: Personal info form box
            gridMyAccount: '.col-lg-4 .myaccount-link-list',                                                  // My account: Account options grid
            socialTitle: '[name="id_gender"][type="radio"]',                                                  // Profile: Gender radio buttons
            firstName: '#firstname',                                                                          // Profile: First name
            lastName: '#lastname',                                                                            // Profile: Last name
            registerEmail: "#email[name='email']",                                                            // Profile: Email field (edit)
            daysBirth: '#days[name="days"]',                                                                  // Profile: Day of birth (select)
            monthBirth: '#months[name="months"]',                                                             // Profile: Month of birth (select)
            yearBirth: '#years[name="years"]',                                                                // Profile: Year of birth (select)
            currentPassword: '#old_passwd[name="old_passwd"]',                                                // Profile: Current password
            newPassword: '#passwd[data-validate="isPasswd"]',                                                 // Profile: New password
            confirmationPassword: '#confirmation[name="confirmation"]',                                       // Profile: Confirm new password
            saveBtn: 'button[name="submitIdentity"]',                                                         // Profile: Save/submit button
            successfullyUpdated: '.alert.alert-success',                                                      // Profile: Success alert

        }
    accessYourPersonalInformation() {
            cy.get(this.selectors.fieldPersonalInfo).click()
            cy.get(this.selectors.boxPersonalInfo).should('be.visible')
            cy.location('search').should('eq', '?controller=identity')
        }

    editYourPersonalInformation() {
            cy.get(this.selectors.socialTitle).check('1')
            cy.get(this.selectors.firstName).clear().type('Test')
            cy.get(this.selectors.lastName).clear().type('Test')
            cy.get(this.selectors.registerEmail).clear().type('noname@gmail.com')
            cy.get(this.selectors.daysBirth).select('1')
            cy.get(this.selectors.monthBirth).select('1')
            cy.get(this.selectors.yearBirth).select('2000')
            cy.get(this.selectors.currentPassword).type('TestPassword')
            cy.get(this.selectors.newPassword).clear()
            cy.get(this.selectors.confirmationPassword).clear()
            cy.get(this.selectors.saveBtn).click()
    }

    checkSuccessNotification() {
    cy.get(this.selectors.successfullyUpdated)
      .should('be.visible')
      .invoke('text')
      .should('match', /success|updated|saved/i)
  }
}
export default AccountManagementPage    