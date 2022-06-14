export class StepExecutionsPage {

    executionsTabElement = ' Execution list  '

    executionsTab = () => cy.get('a[ng-click*=executions]')
    executionListTab = () => cy.get('[ng-click="selectTab(tab.id)"]')

    checkExecutionsTab = () => {
        this.executionsTab().click()
        this.executionListTab().should('have.text', this.executionsTabElement)
    }
}