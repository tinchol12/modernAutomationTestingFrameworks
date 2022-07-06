/// <reference types="Cypress" />


describe('My first Test Suite', () => {
    
    
    it('Usar la barra de tareas usando el Cypress selector', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('cu');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 2);

    });

    it('Usar la barra de tareas usando Attribute selector', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("[placeholder='Search for Vegetables and Fruits']").type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
    });

    it('Seleccionar uno de los productos', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("[placeholder='Search for Vegetables and Fruits']").type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    });

    it('Seleccionar de manera dinamica uno de los productos (each) I', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("[placeholder='Search for Vegetables and Fruits']").type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').each(($el, index, $list) => {            
                const  SavingTheText = $el.find('h4.product-name').text();
                if (SavingTheText.includes('Cashews')) {
                    
                    /* 
                        $el.find('button').click(); 
                        Funciona, pero esta deprecado el metodo click en FIND, por eso se lo enmarca con el cy-wrap($el)
                    */
                    cy.wrap($el).find('button').click();
                }        
            });
        cy.get('.products').find('.product').each(($el, index, $list) => {            
                const  SavingTheText = $el.find('h4.product-name').text();
                if (SavingTheText.includes('Carrot')) {                   
                    cy.wrap($el).find('button').click();
                }        
            }); 


    });

    it('Obtener el título y mostrarlo en los eventos de Cypress ', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
 
        /* promice */

            cy.get('.brand').then(function(logoelement){               
                cy.log(logoelement.text());
            })
            
            

    });

    it('Alias ', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("[placeholder='Search for Vegetables and Fruits']").type('ca');
        cy.wait(2000);

        /* Creo un Alias */
        cy.get('.products').as('productLocator');

        /* Usando el alias */
        cy.get('.product:visible').should('have.length', 4);
        cy.get('@productLocator').find('.product').should('have.length', 4);
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {            
                const  SavingTheText = $el.find('h4.product-name').text();
                if (SavingTheText.includes('Cashews')) {
                    
                    /* 
                        $el.find('button').click(); 
                        Funciona, pero esta deprecado el metodo click en FIND, por eso se lo enmarca con el cy-wrap($el)
                    */
                    cy.wrap($el).find('button').click();
                }        
            });
            

    });

    it.only('Checkout con validaciones', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("[placeholder='Search for Vegetables and Fruits']").type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').each(($el, index, $list) => {            
                const  SavingTheText = $el.find('h4.product-name').text();
                if (SavingTheText.includes('Cashews')) {
                    cy.wrap($el).find('button').click();
                }        
            });
        cy.get('.products').find('.product').each(($el, index, $list) => {            
                const  SavingTheText = $el.find('h4.product-name').text();
                if (SavingTheText.includes('Carrot')) {                   
                    cy.wrap($el).find('button').click();
                }        
            }); 

        cy.get('[alt="Cart"]').click();
        cy.contains('PROCEED TO CHECKOUT').click();       
        cy.contains('Place Order').click();


    });

})

