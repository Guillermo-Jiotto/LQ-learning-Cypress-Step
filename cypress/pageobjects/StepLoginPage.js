export class StepLoginPage {

    accountName = ' admin [admin]'
 
    loginButton = () => cy.xpath('//button[@type="submit"]')
    accountNameElem = () => cy.get('#sessionDropdown')
    
    loginToStep = () => {
        this.loginButton().click()
    }

    checkIfLoginComplete = () => {
        this.accountNameElem().should('have.text', this.accountName)
    }
}