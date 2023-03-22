//Locators
const loginPlaceholder = '.js-ao-header-navigation__profile-placeholder';
const logoutPlaceholder = '.ao-header-navigation__profile-link > .initials';
const loginButton = 'Log In';
const logoutButton = 'Logout';
const emailTxt ='[data-cy="login--email"]';
const passwordTxt ='[data-cy="login--password"]';
const signInBtn ='[data-cy="login--submit"]';

//Commands


Cypress.Commands.add('visibleElement', (container, element, path1, path2) => {
    cy.get(container).then((container) => {
        if (container.find(element).is(":visible")) {
            path1();
        }else{
            path2();
        }
    })
})



Cypress.Commands.add('doSelect', (locator, value) => {
    cy.get(locator)
        .select(value, {force: true});
})

Cypress.Commands.add('doClear', (locator) => {
    cy.get(locator).clear({force:true});
})

Cypress.Commands.add('doType', (locator, string, error) => {
    cy.get(locator).clear({force:true}).type(string, {force:true});
    /* const command = 'cy.get(locator).clear({force:true}).type("' + string + '", {force:true})';
    error = error + '" no es escribible.';
    basePage.manejoErrores(locator, command, error); */
})

Cypress.Commands.add('itContain', (locator, string) => {
    cy.get(locator) 
        .should('contain', string);
})

Cypress.Commands.add('doClick', (locator) => {
    cy.get(locator).click({force:true});
    /* const command = '';
    error = error + '" no se pudo clickear.';
    basePage.waitProduccion();
    basePage.manejoErrores(locator, command, error, force); */
})

Cypress.Commands.add('doMultipleClick', (locator) => {
    cy.get(locator)
        .click({multiple:true, force:true});
})

Cypress.Commands.add('beVisible', (locator, error) => {
    cy.get(locator).should('be.visible');
    /* const command = 'cy.get(locator).should(\'be.visible\')';
    error = error + '" no se encuentra visible.';
    basePage.manejoErrores(locator, command, error, true) */
})


Cypress.Commands.add('notVisible', (locator) => {
    cy.get(locator).should('not.be.visible')
})

Cypress.Commands.add('itExist', (locator) => {
    cy.get(locator).should('exist')
})

Cypress.Commands.add('notExist', (locator) => {
    cy.get(locator).should('not.exist')
})

Cypress.Commands.add('containHref', (locator, label, href) => {
    cy.get(locator).should('contain', label).and('have.attr', 'href').and('include', href);
})

Cypress.Commands.add('hrefIs', (locator, href) => {
    cy.get(locator).should('be.visible').and('have.attr', 'href').and('include', href);
})

Cypress.Commands.add('findSon', (locator1, locator2) => {
    cy.wrap(locator1)
        .find(locator2)
            .should('be.visible');
})
Cypress.Commands.add('typeSon', (locator1, locator2, string) => {
    cy.wrap(locator1)
        .find(locator2)
            .type(string, {force:true});
})
Cypress.Commands.add('clickSon', (locator1, locator2) => {
    cy.wrap(locator1)
        .find(locator2)
            .click({force:true});
}) 
Cypress.Commands.add('containSon', (locator1, locator2, string) => {
    cy.wrap(locator1)
        .find(locator2)
            .should('contain', string);
})
Cypress.Commands.add('containHrefSon', (locator1, locator2, label, href) => {
    cy.wrap(locator1)
        .find(locator2)
            .should('be.visible').and('contain', label).and('have.attr', 'href').and('include', href);
})

Cypress.Commands.add("closeDrawer", () => {
    const drawerCloseButton = ".menu_close > svg > #Rounded > path";
    cy.doClick(drawerCloseButton);
})





/*Cypress.Commands.add('verifyLogout', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.url().then(($url) => {
        if($url.includes('/projects')) {
            cy.logout()
        } else  {
            cy.visit('/login')
        }
    })
})
*/

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get(loginPlaceholder).click({force:true})
    cy.contains(loginButton).click({force:true})
    cy.get(emailTxt).type(`${Cypress.config('emailAdmin')}`)
    cy.get(passwordTxt).type(`${Cypress.config('passwordAdmin')}`)
    cy.get(signInBtn).click()
})

Cypress.Commands.add('logout', () => {
    cy.get(logoutPlaceholder).click({force:true})
    cy.contains(logoutButton).click({force:true})
})