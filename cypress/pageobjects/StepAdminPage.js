export class StepAdminPage {

    adminTabElement = 'Add user'

    adminTab = () => cy.get('a[ng-click*=admin]')
    addUserButton = () => cy.get('[ng-click="addUser()"]')

    checkAdminTab = () => {
        this.adminTab().click()
        this.addUserButton().should('have.text', this.adminTabElement)
    }
}