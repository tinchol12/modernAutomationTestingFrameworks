/// <reference types="Cypress" />
import Homepage from '../PageObjetc/homepage.js'
import Productpage from '../PageObjetc/productpage.js'



describe('Framework tests', () => {
    
    before(function() {
        cy.fixture('example').then(function(data)
        {
            this.data = data;
        });
    })
    
    it('framework tests - regular completition', () => {
        const homePage = new Homepage();
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getEditBox().type('Bob');
        cy.get(':nth-child(2) > .form-control').type('bob@gmail.com');
        cy.get('[id="exampleInputPassword1"]').type('12345');
        homePage.getGender().select("Female");

    });

    it('framework tests - complete from fixture', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[name="name"]:nth-child(2)').type(this.data.name);
        cy.get(':nth-child(2) > .form-control').type(this.data.email);
        cy.get('[id="exampleInputPassword1"]').type(this.data.password1);
        cy.get('select').select(this.data.gender);

    });

    it('framework tests - regular completition - adding assertions', () => {
    
        const homePage = new Homepage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getEditBox().type('Nicky');
        cy.get(':nth-child(2) > .form-control').type('nicky@gmail.com');
        cy.get('[id="exampleInputPassword1"]').type('12345');
        homePage.getGender().select("Female");

        homePage.getTwoDataBinding().should('have.value', 'Nicky');
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
        homePage.getEntrepreneaur().should('be.disabled');

    });

    it('framework tests - complete from fixture - adding assertions', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[name="name"]:nth-child(2)').type(this.data.name);
        cy.get(':nth-child(2) > .form-control').type(this.data.email);
        cy.get('[id="exampleInputPassword1"]').type(this.data.password1);
        cy.get('select').select(this.data.gender);

        cy.get('[class="ng-pristine ng-valid ng-touched"]').should('have.value', this.data.name);

    });

    it.only('FT - Reg. Complete - Building customized commands', () => {
    
        const productPage = new Productpage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.selectProduct('Blackberry');
       // cy.pause();
        cy.selectProduct('Nokia Edge');
        productPage.getCheckOutButton().click();
        productPage.getFinishPunchaseButton().click();
        productPage.getAgreeTermsAndConditionsCheckbox().click();
        productPage.getCountryTextBox().type('Argentina');
        productPage.getPunchaseButton().click();
        productPage.getMessageSuccess().should('contain.text', 'Success! Thank you!');        
        
    });

    it('FT - Reg. Complete - Using Commands + Fixture data', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        
       // cy.pause();
        this.data.productNames.forEach(function(element)
        {
            cy.selectProduct(element);
        });
        

        
    });

});    