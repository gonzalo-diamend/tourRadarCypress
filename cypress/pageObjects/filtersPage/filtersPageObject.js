import {basePage} from "../basePage";

// Locators
const logoTitle = '[data-cy="common-header--logo"]';
const europeTitle ='.js-ao-serp-hero__title';
const europeDescription ='.ao-serp-hero__description';
const europeFilterButton ='[data-cy="serp-filters--filter-card"]';
const europeFilterDropdown ='[data-cy="serp-filters--sort"]';
const europeFilterByLow ='prasc';
const europeFilterByHigh ='prdesc';
const europeFilterByShortestFirst ='lenasc';
const europeFilterByPopularity='popularity';
const europeFilterBydateJune ='[data-pid="june-2023"]';
const europeFilterByDateAugust ='[data-pid="august-2023"]';

// Data
const europeTitleText ='Europe Tours & Trips';



export class filtersPage extends basePage {
    static headerValidation( ){
        cy.beVisible(logoTitle);
        cy.itExist(logoTitle);
        cy.beVisible(europeTitle);
        cy.itExist(europeTitle);
        cy.itContain(europeTitle, europeTitleText);
        cy.beVisible(europeDescription);
        cy.itExist(europeDescription);

    }

    static filterValidation( ){
        cy.beVisible(europeFilterButton);
        cy.itExist(europeFilterButton);
        cy.beVisible(europeFilterDropdown);
        cy.itExist(europeFilterDropdown);
        cy.doSelect(europeFilterDropdown, europeFilterByLow);
        cy.doSelect(europeFilterDropdown, europeFilterByHigh);
        cy.doSelect(europeFilterDropdown, europeFilterByShortestFirst);
        cy.doSelect(europeFilterDropdown, europeFilterByPopularity);
        cy.beVisible(europeFilterBydateJune);
        cy.itExist(europeFilterBydateJune);
        cy.doClick(europeFilterBydateJune);
        cy.beVisible(europeFilterByDateAugust);
        cy.itExist(europeFilterByDateAugust);
        cy.doClick(europeFilterByDateAugust);

    }

    
}