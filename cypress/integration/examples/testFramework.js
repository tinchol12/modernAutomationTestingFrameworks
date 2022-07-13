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

    it('FT - Reg. Complete - Building customized commands', () => {
    
        Cypress.config('defaultCommandTimeout', 8000);
        const productPage = new Productpage();        


        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.selectProduct('Blackberry');
       // cy.pause();
        cy.selectProduct('Nokia Edge');
        productPage.getCheckOutButton().click();
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

    it('FT - Reg. Complete - Using Commands + Fixture data', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        
       // cy.pause();
        this.data.productNames.forEach(function(element)
        {
            cy.selectProduct(element);
        });
        

        
    });

    it('Async sum [TOP]. Validate that the amount of products is valid', () => {
    
        Cypress.config('defaultCommandTimeout', 8000);
        const productPage = new Productpage();        
        const homePage = new Homepage();
        var sum = 0;

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.selectProduct('Blackberry');
        cy.selectProduct('Nokia Edge');
        productPage.getCheckOutButton().click();

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
        })

        cy.get('h3 strong').then(function(element) {
           
            /* Need remove the currency from the amount in order to validate the number */
            const amountTotal = element.text();
            var resTotal;
                resTotal = amountTotal.split(" ")
                resTotal  = resTotal[1].trim();
                expect(Number(resTotal)).to.equal(sum);
        })
    });

});    