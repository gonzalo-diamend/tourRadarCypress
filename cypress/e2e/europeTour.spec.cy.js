import {filtersPage} from  '../pageObjects/europeTour/filtersPageObject'
import {tourComponentPage} from '../pageObjects/europeTour/tourComponenPageObject'

describe('Europe tour Validation page', () => {
  it('Filters and header quick validation', () => {
    cy.login()
    filtersPage.headerValidation()
    filtersPage.filterValidation()
    cy.logout()
  })

  it('Add and remove a favourite tour', () => {
    cy.login()
    tourComponentPage.addFavouriteTour()
    tourComponentPage.removeFavouriteTour()
    cy.logout()
  })

  it('Components and tour example', () => {
    cy.login()
    tourComponentPage.componentValidation()
    tourComponentPage.extraValidation()
    tourComponentPage.componentButtons()
     cy.logout()
  })
})