/// <reference types="Cypress" />

import Swaghome from '../../PageObjetc/swagHome.js'
import Swagproducts from '../../PageObjetc/swagproducts'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';



const swagHome = new Swaghome();
const swagProducts = new Swagproducts();

Given('the user open swaglabs site', () => {    
    cy.visit('https://www.saucedemo.com/');
    swagHome.swagLabsLogo().should('be.visible');
    swagHome.swagLabsBot().should('be.visible');
    swagHome.userNameTextbox().should('be.visible');
    swagHome.userPasswordTextbox().should('be.visible');
    swagHome.btnLogin().should('be.visible');    
})

When('the user complete the username textbox', () => {
   swagHome.userNameTextbox().type('standard_user');
})

And('the user complete the password textbox', () => {
   swagHome.userPasswordTextbox().type('secret_sauce');
});

Then('clicks the login button', () => {
    swagHome.btnLogin().click();
});

And('the user should be able to see the shop site', () => {
    swagProducts.swagBurgerMenu().should('be.visible');
});