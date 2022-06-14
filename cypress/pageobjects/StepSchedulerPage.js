export class StepSchedulerPage {

    schedulerTabElement = 'New task'

    schedulerTab = () => cy.get('a[ng-click*=scheduler]')
    newTaskButton = () => cy.get('[ng-click="addSchedulerEntry()"]')

    checkSchedulerTab = () => {
        this.schedulerTab().click()
        this.newTaskButton().should('have.text', this.schedulerTabElement)
    }
}