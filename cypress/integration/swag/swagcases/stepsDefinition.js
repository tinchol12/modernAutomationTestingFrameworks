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

And('the user should be able to see an error message about password is missing', () => {
    swagHome.errorMessagePasswordRequired().should('have.text', 'Epic sadface: Password is required');    
});

And('the user should be able to see an error message about user is missing', () => {
    swagHome.errorMessagePasswordRequired().should('have.text', 'Epic sadface: Username is required');    
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

And('adds products "Sauce Labs Bolt T-Shirt" to the cart from the shop site', () => {    
    swagProducts.prodSauceLabsBoltTshirtAddToCartButton().click();
    swagProducts.prodSauceLabsBoltTshirtRemoveFromCartButton().should('be.visible');
});

And('adds products "Sauce Labs Onesie" to the cart from the shop site', () => {    
    swagProducts.prodSauceLabsOnesieAddToCartButton().click();
    swagProducts.prodSauceLabsOnesieRemoveFromCartButton().should('be.visible');
});

Then('the user remove a product from the cart', () => {    
    swagProducts.prodSauceLabsBackpackRemoveFromCartButton().click();

});

And('the user validates the product is removed or not from the cart', () => {    
    swagProducts.removedCartItem().should('not.be.visible');    
});

Then('the user clicks on the Checkout button', () => {
    swagProducts.checkoutButton().click();
    swagProducts.continueCheckout().should('be.visible');
    swagProducts.firstNameTextbox().should('be.visible');
    swagProducts.lastNameTextbox().should('be.visible');
    swagProducts.zipPostalText().should('be.visible');
    swagProducts.cancelCheckout().should('be.visible');
});
And('the user clicks on the Cancel button', () => {
    swagProducts.cancelCheckout().click();
});

Then('the user complete the name textbox', () => {
    swagProducts.firstNameTextbox().type('John');
    
});

And('the user complete the last name textbox', () => {
    swagProducts.lastNameTextbox().type('Doe');
});

And('the user complete the postal code textbox', () => {
    swagProducts.zipPostalText().type('12345');
});

And('the user complete clear the postal code textbox', () => {
    swagProducts.zipPostalText().clear();
});

And('the user complete clear the last name textbox', () => {
    swagProducts.lastNameTextbox().clear();
});

And('the user complete clear the name textbox', () => {
    swagProducts.firstNameTextbox().clear();
});

And('the user clicks on Continue button', () => {
    swagProducts.continueCheckout().click();
});

And('the user must be able to display an error message related to the postal code missing', () => {
    swagProducts.errorPostalMissingMessage().should('have.text','Error: Postal Code is required');
});

And('the user must be able to display an error message related to the last name missing', () => {
    swagProducts.errorPostalMissingMessage().should('have.text','Error: Last Name is required');
});

And('the user must be able to display an error message related to the name missing', () => {
    swagProducts.errorPostalMissingMessage().should('have.text','Error: First Name is required');
});




