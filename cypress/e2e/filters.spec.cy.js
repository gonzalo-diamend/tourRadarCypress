import {filtersPage} from  '../pageObjects/filtersPage/filtersPageObject'

describe('Filters Tests', () => {
  it('passes', () => {
    cy.login()
    filtersPage.headerValidation()
    filtersPage.filterValidation()
    cy.logout()
  })
})