/// <reference types="cypress" />

describe('JWT Session', () => {

    it('Is logged in throught local storage', () => {

        cy.LoginAPI().then(function () 
        {
            cy.visit('https://rahulshettyacademy.com/client/', {
        
            onbeforeLoad : function(win) {
                win.localStorage.setItem('loggedInUser', Cypress.env('token'));
            }})
        })
        cy.get('.card-body button:last-of_type').eq(1).click();
        cy.get('[routerlink="cart"]').click();
        cy.contains("Checkout").click();
        cy.get('#country').select('India');


    })
})