import {basePage} from "../basePage";

// Locators

const chatBotButton ='.live-chat';
const chatBotTitle ='.live-chat-button-text';
const europeTourTitle ='.js-am-serp-results-stats';
const europeTourTitleText = '.js-am-serp-results-stats__title'
const europeListTours ='[data-cy="serp-tours--list"]';
const europeTourExample ='[itemscope=""][data-id="93235"]';
const tourImageExaple ='[itemscope=""][data-id="93235"] > .bl > .im > img';
const tourMapExample ='[itemscope=""][data-id="93235"] > .bl > .map';
const tourMapTitle ='[href="/t/93235"] > .js-ao-serp-tour__name';
const tourMapReviewExample ='[itemscope=""][data-id="93235"] > .bm > .rev';
const europeTourExtraInformation='[itemscope=""][data-id="93235"] > .bm > .values';
const europeTourValue1 ='[itemscope=""][data-id="93235"] > .bm > .values > :nth-child(1)';
const europeTourValue2 ='[itemscope=""][data-id="93235"] > .bm > .values > :nth-child(3)';
const europeTourValue3 ='[itemscope=""][data-id="93235"] > .bm > .values > :nth-child(5)';
const europeTourValue4 ='[itemscope=""][data-id="93235"] > .bm > .values > :nth-child(7)';
const europeTourValue5 ='[itemscope=""][data-id="93235"] > .bm > .values > :nth-child(9)';
const europeTourPriceWrapper = '[itemscope=""][data-id="93235"] > .br > .br__price-wrapper';
const europeTourDownloadInfo = '[itemscope=""][data-id="93235"] > .br > .br__button-wrapper > [data-cy="serp-tour--download-brochure"]';
const europeTourViewMoreButton = '[itemscope=""][data-id="93235"] > .br > .br__button-wrapper > .aa-btn--primary';
const closeBrochure = '[data-cy="common-brochure-modal--close-btn"]';
const downloadBrochureButton = '[data-cy="common-download-brochure--submit"]';
const addFavouriteButton = '[itemscope=""][data-id="93235"] > .bl > .sbtn';
const favouriteImage = '.image';
const addTourButton = '.icon';
const createWishlist ='.new';
const doneButtonFavourites = '.content > .but';
const favouritesPage = '[data-cy="common-header--navigation"] > .ao-header-navigation__wishlist > .ao-header-navigation__wishlist-link';
const componentFavouritesPage = 'main.owner';
const showAllListsButton = '.soc > .blue';
const sendListButton = '.wishlist_email';
const tourInfoFavouritesPage = '.tour';
const removeFavouriteButton = '.sbtn';
// Data
const europeTourText ='  250+ Europe tour packages  with 36,010 reviews';
const chatBotText = 'Need help?';
const logExtraValidation = 'Cookies and chatbot validation';
const logComponentValidation = 'Component and Tour validation';
const logComponentButtons = 'Test buttons of the tour example';
const logAddFavourite = 'Add a tour as a favourite';
const logRemoveFavourite = 'Remove a tour as a favourite';
const valueTour1 = 'Destinations';
const valueTour2 = 'Age Range';
const valueTour3 = 'Travel Style';
const valueTour4 = 'Operated in';
const valueTour5 = 'Operator';







export class tourComponentPage extends basePage {
    static componentValidation( ){
        cy.log(logComponentValidation)
        cy.beVisible(europeTourTitle);
        cy.itExist(europeTourTitle);
        cy.itContain(europeTourTitleText, europeTourText);
        cy.beVisible(europeListTours);
        cy.itExist(europeListTours);
        cy.beVisible(europeTourExample);
        cy.itExist(europeTourExample);
        cy.beVisible(tourImageExaple);
        cy.itExist(tourImageExaple);
        cy.beVisible(tourMapExample);
        cy.itExist(tourMapExample);
        cy.beVisible(tourMapReviewExample);
        cy.itExist(tourMapReviewExample);
        cy.beVisible(tourMapTitle);
        cy.itExist(tourMapTitle);
        cy.beVisible(europeTourExtraInformation);
        cy.itExist(europeTourExtraInformation);
        cy.beVisible(europeTourValue1);
        cy.itExist(europeTourValue1);
        cy.itContain(europeTourValue1, valueTour1);
        cy.beVisible(europeTourValue2);
        cy.itExist(europeTourValue2);
        cy.itContain(europeTourValue2, valueTour2);
        cy.beVisible(europeTourValue3);
        cy.itExist(europeTourValue3);
        cy.itContain(europeTourValue3, valueTour3);
        cy.beVisible(europeTourValue4);
        cy.itExist(europeTourValue4);
        cy.itContain(europeTourValue4, valueTour4);
        cy.beVisible(europeTourValue5);
        cy.itExist(europeTourValue5);
        cy.itContain(europeTourValue5, valueTour5);
        cy.beVisible(europeTourPriceWrapper);
        cy.itExist(europeTourPriceWrapper);

    }

    static componentButtons( ){
        cy.log(logComponentButtons)
        cy.beVisible(europeTourDownloadInfo);
        cy.itExist(europeTourDownloadInfo);
        cy.get(europeTourDownloadInfo).should('not.be.disabled')
        cy.doClick(europeTourDownloadInfo);
        cy.beVisible(downloadBrochureButton);
        cy.itExist(downloadBrochureButton);
        cy.get(downloadBrochureButton).should('not.be.disabled')
        cy.doClick(closeBrochure);
        cy.beVisible(europeTourViewMoreButton);
        cy.itExist(europeTourViewMoreButton);
        cy.doClick(europeTourViewMoreButton);
    }

    static addFavouriteTour( ){
        cy.log(logAddFavourite)
        cy.beVisible(europeTourExample);
        cy.itExist(europeTourExample);
        cy.beVisible(addFavouriteButton);
        cy.itExist(addFavouriteButton);
        cy.doClick(addFavouriteButton)
        cy.beVisible(favouriteImage);
        cy.itExist(favouriteImage);
        cy.beVisible(createWishlist);
        cy.itExist(createWishlist);
        cy.beVisible(addTourButton);
        cy.itExist(addTourButton);
        cy.doClick(addTourButton)
        cy.beVisible(doneButtonFavourites);
        cy.itExist(doneButtonFavourites);
        cy.doClick(doneButtonFavourites)
            
    }
    static removeFavouriteTour( ){
        cy.log(logRemoveFavourite)
        cy.beVisible(favouritesPage);
        cy.itExist(favouritesPage);
        cy.doClick(favouritesPage)
        cy.beVisible(componentFavouritesPage);
        cy.itExist(componentFavouritesPage);
        cy.beVisible(showAllListsButton);
        cy.itExist(showAllListsButton);
        cy.get(showAllListsButton).should('not.be.disabled')
        cy.beVisible(sendListButton);
        cy.itExist(sendListButton);
        cy.get(showAllListsButton).should('not.be.disabled')
        cy.beVisible(tourInfoFavouritesPage);
        cy.itExist(tourInfoFavouritesPage);
        cy.beVisible(removeFavouriteButton);
        cy.itExist(removeFavouriteButton);
        cy.doClick(removeFavouriteButton);
        cy.beVisible(addTourButton);
        cy.itExist(addTourButton);
        cy.doClick(addTourButton);
        cy.beVisible(doneButtonFavourites);
        cy.itExist(doneButtonFavourites);
        cy.doClick(doneButtonFavourites);
        cy.visit('/')
    }

    
    static extraValidation( ){
        cy.log(logExtraValidation)
        cy.itExist(chatBotButton);
        cy.itContain(chatBotTitle, chatBotText);

    }

    
}