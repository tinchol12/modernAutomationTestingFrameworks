class Productpage
{

    getCheckOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
        
    }

    getFinishPunchaseButton(){
        return cy.get(':nth-child(4) > :nth-child(5) > .btn');
    }

    getAgreeTermsAndConditionsCheckbox(){
        return cy.get('.checkbox');
    }

    getPunchaseButton(){
        return cy.get('form.ng-untouched > .btn');
    }

    getCountryTextBox(){
        return cy.get('[id="country"]');
    }

    getMessageSuccess(){
        return cy.get('.alert')
    }

  

}

export default Productpage;