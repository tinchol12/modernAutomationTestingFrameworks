class Swaghome
{
    userNameTextbox() {return cy.get('[id="user-name"]');}
    userPasswordTextbox() {return cy.get('[id="password"]');}   
    btnLogin() { return cy.get('[data-test="login-button"]')};
    
    swagLabsLogo() {return cy.get('[class="login_logo"]');}
    swagLabsBot() {return cy.get('[class="bot_column"]');}
    

}

export default Swaghome;