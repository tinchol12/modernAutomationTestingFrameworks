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

    it('How to handle Alerts', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        // Assert the alert message using Cypress events (Catalog of Events documentation)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });


    });

    it('How to handle child tabs and nav controls', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get('[id="opentab"]').invoke('removeAttr', 'target').click();
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        // removeattr is a jquary method to remove an attribute from an element. It takes two parameters:
        // https://www.w3schools.com/jquery/html_removeattr.asp

        //How to use Navigating BACK control.
        cy.go('back');
        cy.url().should('include', 'rahulshettyacademy.com/AutomationPractice/');
        cy.url().should('include', 'rahulshettyacademy');

        //How to use Navigating FORWARD control.
        cy.go('forward');
        cy.url().should('include', 'https://www.rahulshettyacademy.com/');


    });
    
    it('How to handle web tables', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        // CSS Selector tr td + :nth-child(2) is used to select the second child of the td element.
        // https://www.w3schools.com/cssref/css_selectors.asp       
    
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("Python"))
            {         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('26')
                })
            }
         
        })
         
         
    });

    it('How to handle mouse hover events', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Click in top option:
        cy.get('div.mouse-hover-content').invoke('show');
        //'show' is a Jquery method to show an element.
        cy.contains('Top').click();
        
        //click in top option method 2:
        //cy.get('div.mouse-hover-content').invoke('show');
        //cy.contains('Top').click({force:true});

        cy.url().should('include', 'top');
        
        
             
         
    })

    it('How to handle child windows', () => {

        // This can be done only if we remain in the same domain
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");      
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.log(url);
            cy.visit(url);
        })
    })


});    
        