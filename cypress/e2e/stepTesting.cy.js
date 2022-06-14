import { StepAdminPage } from '../pageobjects/StepAdminPage.js'
import { StepExecutionsPage } from '../pageobjects/StepExecutionsPage.js'
import { StepGridPage } from '../pageobjects/StepGridPage.js'
import { StepKeywordsPage } from '../pageobjects/StepKeywordsPage.js'
import { StepLoginPage } from '../pageobjects/StepLoginPage.js'
import { StepParametersPage } from '../pageobjects/StepParametersPage.js'
import { StepPlansPage } from '../pageobjects/StepPlansPage.js'
import { StepSchedulerPage } from '../pageobjects/StepSchedulerPage.js'

describe('Step-app testing', () => {

  const stepLoginPage = new StepLoginPage()
  const stepPlansPage = new StepPlansPage()
  const stepKeywordsPage = new StepKeywordsPage()
  const stepParametersPage = new StepParametersPage()
  const stepExecutionsPage = new StepExecutionsPage()
  const stepSchedulerPage = new StepSchedulerPage()
  const stepGridPage = new StepGridPage()
  const stepAdminPage = new StepAdminPage()

  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    stepLoginPage.loginToStep()
  })

  it('check login to Step', () => {
    stepLoginPage.checkIfLoginComplete()
  })

  it('check Plans Tab', () => {
    stepPlansPage.checkPlansTab()
  })

  it('check Keywords Tab', () => {
    stepKeywordsPage.checkKeywordsTab()
  })

  it('check Parameters Tab', () => {
    stepParametersPage.checkParametersTab()
  })

  it('check Executions Tab', () => {
    stepExecutionsPage.checkExecutionsTab()
  })

  it('check Scheduler Tab', () => {
    stepSchedulerPage.checkSchedulerTab()
  })

  it('check Grid Tab', () => {
    stepGridPage.checkGridTab()
  })

  it('check Admin Tab', () => {
    stepAdminPage.checkAdminTab()
  })
})