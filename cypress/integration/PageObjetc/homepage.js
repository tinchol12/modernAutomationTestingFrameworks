class Homepage
{

    getEditBox() {
        return cy.get('[name="name"]:nth-child(2)')
    }

    getTwoDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('select')
    }

    getEntrepreneaur() {
       return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default Homepage;