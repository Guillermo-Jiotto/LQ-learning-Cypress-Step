export class StepKeywordsPage {

    keywordsTabElement = 'New keyword'

    keywordsTab = () => cy.get('a[ng-click*=functions]')
    newKeywordButton = () => cy.get('[ng-click="addFunction()"]')

    checkKeywordsTab = () => {
        this.keywordsTab().click()
        this.newKeywordButton().should('have.text', this.keywordsTabElement)
    }
}