export class StepPlansPage {

    // Constants
    plansTabElement = 'New plan'

    // Locators
    plansTab = () => cy.xpath('//a[@href="#/root/plans/list"]')
    newPlanButton = () => cy.xpath('//button[@ng-click="addPlan()"]')

    // Methods
    checkPlansTab = () => {
        this.plansTab().click()
        this.newPlanButton().should('have.text', this.plansTabElement)
    }
}