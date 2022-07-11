/// <reference types="Cypress" />


describe('Framework tests', () => {
    
    before(function() {
        cy.fixture('example').then(function(data)
        {
            this.data = data;
        });
    })
    
    it('framework tests - regular completition', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[name="name"]:nth-child(2)').type('Bob');
        cy.get(':nth-child(2) > .form-control').type('bob@gmail.com');
        cy.get('[id="exampleInputPassword1"]').type('12345');
        cy.get('select').select("Female");

    });

    it('framework tests - complete from fixture', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[name="name"]:nth-child(2)').type(this.data.name);
        cy.get(':nth-child(2) > .form-control').type(this.data.email);
        cy.get('[id="exampleInputPassword1"]').type(this.data.password1);
        cy.get('select').select(this.data.gender);

    });

    it('framework tests - regular completition - adding assertions', () => {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[name="name"]:nth-child(2)').type('Bob');
        cy.get(':nth-child(2) > .form-control').type('bob@gmail.com');
        cy.get('[id="exampleInputPassword1"]').type('12345');
        cy.get('select').select("Female");

        cy.get('.ng-pristine').should('have.value', 'Bob');
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
        cy.get('#inlineRadio3').should('be.disabled');

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
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.selectProduct('Blackberry');
        cy.selectProduct('Nokia Edge');

        
    });

});    