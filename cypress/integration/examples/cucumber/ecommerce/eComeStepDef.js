/// <reference types="Cypress" />

import Homepage from '../../../PageObjetc/homepage.js'
import Productpage from '../../../PageObjetc/productpage.js'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const homePage = new Homepage();
const productPage = new Productpage();
var sum = 0;


/*  Scenario 1: Ecommerce products are on sale and the user buy some of them  */

Given('I open the Ecommerce site', () => {    
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
})

When('i add items to the cart', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.selectProduct('Blackberry');
    cy.selectProduct('Nokia Edge');
    productPage.getCheckOutButton().click();
})

And('validate the total price of the items', () => {
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {            
        /* Need remove the currency from the amount in order to do the sum */

        const amount = $el.text();
        var res;
              res = amount.split(" ")
              res  = res[1].trim();
              sum = Number(sum) + Number(res)
              cy.log(res);
    }).then(function(){
              cy.log(sum);
    });

    cy.get('h3 strong').then(function(element) {
       
        /* Need remove the currency from the amount in order to validate the number */
        const amountTotal = element.text();
        var resTotal;
            resTotal = amountTotal.split(" ")
            resTotal  = resTotal[1].trim();
            expect(Number(resTotal)).to.equal(sum);
    });
});

Then('select the country submit and get a success message', () => {

    productPage.getFinishPunchaseButton().click();
    productPage.getAgreeTermsAndConditionsCheckbox().click();
    productPage.getCountryTextBox().type('India');
    productPage.getPunchaseButton().click();
    productPage.getMessageSuccess().should('contain.text', 'Success! Thank you!');        

    cy.get('.alert').then(function(element) {
        const actualText = element.text();
        expect(actualText.includes("Success!")).to.be.true            
    })
    

});

/*  Scenario 2: asdasdasdasdasdsad  */

When('i fill the form detail', function(datatable) {

    homePage.getEditBox().type(datatable.rawTable[1][0]);
    cy.get(':nth-child(2) > .form-control').type('nicky@gmail.com');
    cy.get('[id="exampleInputPassword1"]').type('12345');
    homePage.getGender().select(datatable.rawTable[1][1]);
  
});

Then('validate the form behavior', function(datatable) {
    homePage.getTwoDataBinding().should('have.value', datatable.rawTable[1][0]);
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
    homePage.getEntrepreneaur().should('be.disabled');
})

And('select the shop page', () => {
    cy.get(':nth-child(2) > .nav-link').click();
});
