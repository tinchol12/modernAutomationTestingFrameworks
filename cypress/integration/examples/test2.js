/// <reference types="Cypress" />


describe('My Second Test Suite', () => {
    
    
    it('Verifications with checkboxes', () => {


        /* 
            check = marca
            uncheck = desmarca
        */


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption1').check().should('have.prop', 'checked', true);
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');

        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        

    });

    it('Verifications with dropdowns', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Static Dropdowns
        cy.get('select').select('option2').should('have.value', 'option2');

    });

    it('Verifications with Autocomplete', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type('ind');
        cy.get('#autocomplete').clear();
        cy.get('#autocomplete').type('ind');
  
        cy.get('.ui-menu-item').each(($el, index, $list) => {            
            if($el.text()==="India")
            {
                cy.wrap($el).click();
            }
        });        

        cy.get('#autocomplete').should('have.value', 'India');
        
    });

    it('Verifications with radiobuttons', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('[value="radio2"]').check().should('be.checked')    

    });




});    
        