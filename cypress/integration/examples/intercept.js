/// <reference types="cypress" />

describe('My first tests using intercept', () => {


    it('First test with Intercept', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')   
        cy.intercept(
            {            
                //requobject        
                method : 'GET',
                url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            }, 
            {
                //responseobject
                status : 200,
                body :  [{
                            "book_name" : "RestAssured with Java",
                            "isbn" : "ASU",
                            "aisle" : "2301"
                        }]
            }).as('bookretrievals')

       cy.get("button[class='btn btn-primary']").click();
       cy.wait('@bookretrievals');
       cy.get('p').should('have.text','Oops only 1 Book available');


    });

    it('Second test with Intercept', () => {
    
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
     
        req.continue((res)=>
        {
           // expect(res.statusCode).to.equal(403)
        })
     }
     ).as("dummyUrl")
     
     cy.get("button[class='btn btn-primary']").click()
     cy.wait('@dummyUrl')
    
    });
 






});