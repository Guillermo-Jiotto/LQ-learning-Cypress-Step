export class StepGridPage {

    gridTabElement = '\n  Agents\n'

    gridTab = () => cy.get('a[ng-click*=grid]')
    agentsTab = () => cy.get('[heading="Agents"]')

    checkGridTab = () => {
        this.gridTab().click()
        this.agentsTab().should('have.text', this.gridTabElement)
    }
}