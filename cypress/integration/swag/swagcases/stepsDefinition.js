/// <reference types="Cypress" />

import Swaghome from '../../PageObjetc/swagHome.js'
import Swagproducts from '../../PageObjetc/swagproducts'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


let condition = "";

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

And('the user logs in', () => {
    swagHome.userNameTextbox().type('standard_user');
    swagHome.userPasswordTextbox().type('secret_sauce');
    swagHome.btnLogin().click();
});

Then('the user should be able to see the shop site', () => {
    swagProducts.swagBurgerMenu().should('be.visible');
});

And('adds products "Sauce Labs Backpack" to the cart from the shop site', () => {    
    swagProducts.prodSauceLabsBackpackAddToCartButton().click();
    swagProducts.prodSauceLabsBackpackRemoveFromCartButton().should('be.visible');
});

And('adds in order to add the product "Sauce Labs Bike Light" the user clicks on the product title name', () => {    
    swagProducts.prodSauceLabsBikeLightsTitle().click();
});

Then('the user validates the price is less than $12.00 and adds the product to the cart', () => {    
    
    swagProducts.prodSauceLabsBikeLightsPrice().should('have.text','$9.99');
    condition = swagProducts.prodSauceLabsBikeLightsPrice().should('have.text','$9.99').toString();
    
    cy.log(condition)
    if(condition.length > 0)
    {
        cy.log('The value of the bike light is less than $12.00');
        swagProducts.prodSauceLabsBikeLightsAddButtonProdWeb().click();    
    }
    else
    {
        cy.log('The value of the bike light is greater than $12.00');
        swagProducts.backToProducts().click();        
    }

}); 

And('the user clicks on the cart icon', () => {    
    swagProducts.cartLink().click();
});

Then('the user validates the product is added or not to the cart', () => {    
    
    if(condition.length < 0){
        swagProducts.cartSauceLabsBikeLightsAdded().should('be.visible');
    }
    else {cy.log('Sauce Bike Lights price was higher than what the user was looking for!')};    
}); 

And('the user clicks the button continue shopping', () => {
    swagProducts.continueShoppingButton().click();
})






