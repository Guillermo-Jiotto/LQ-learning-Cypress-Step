export class StepParametersPage {

    parametersTabElement = 'New parameter'

    parametersTab = () => cy.get('a[ng-click*=parameters]')
    newParameterButton = () => cy.get('[ng-click="addParameter()"]')

    checkParametersTab = () => {
        this.parametersTab().click()
        this.newParameterButton().should('have.text', this.parametersTabElement)
    }
}