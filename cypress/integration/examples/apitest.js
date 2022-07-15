/// <reference types="cypress" />

describe('My first tests using intercept', () => {

    it('API TESTS', () => {
    
        cy.request('http://216.10.245.166/Library/Addbook.php', { 

            "name": "Learning Automation with Shetty",
            "isbn": "ASA",
            //Need change the aisle number to a valid one
            "aisle": "4251",
            "author": "Shetty"
        }).then(response => {
        
        expect(response.body).to.have.property("Msg", "successfully added");
        expect(response.status).to.eq(200);

         })  


    });

});