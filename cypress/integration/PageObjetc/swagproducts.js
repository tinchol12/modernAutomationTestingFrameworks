class Swagproducts
{
    swagBurgerMenu() {return cy.get('[id="react-burger-menu-btn"]')};
    backToProducts() {return cy.get('[id="back-to-products"]')};
    cartLink() {return cy.get('[class="shopping_cart_link"')};
    continueShoppingButton() {return cy.get('[id="continue-shopping"]')};
    checkoutButton() {return cy.get('[id="checkout"]')};
    continueCheckout() {return cy.get('[id="continue"]')};
    cancelCheckout() {return cy.get('[id="cancel"]')};
    
    prodSauceLabsBackpackAddToCartButton() {return cy.get('[id="add-to-cart-sauce-labs-backpack"]')};
    prodSauceLabsBoltTshirtAddToCartButton() {return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')};
    prodSauceLabsOnesieAddToCartButton(){return cy.get('[name="add-to-cart-sauce-labs-onesie"]')};
        
    prodSauceLabsBoltTshirtRemoveFromCartButton() {return cy.get('[name="remove-sauce-labs-bolt-t-shirt"]')};
    prodSauceLabsOnesieRemoveFromCartButton() {return cy.get('[name="remove-sauce-labs-onesie"]')};
    prodSauceLabsBackpackRemoveFromCartButton() {return cy.get('[id="remove-sauce-labs-backpack"]')};

    removedCartItem() {return cy.get('[class="removed_cart_item"]')};
    
    prodSauceLabsBikeLightsTitle() {return cy.get('[id="item_0_title_link"]')};
    prodSauceLabsBikeLightsPrice() {return cy.get('[class="inventory_details_price"]')};
    prodSauceLabsBikeLightsAddButtonProdWeb() {return cy.get('[id="add-to-cart-sauce-labs-bike-light"]')};
    cartSauceLabsBikeLightsAdded() {return cy.get('[div.page_wrapper div.cart_contents_container div:nth-child(1) div.cart_list div.cart_item:nth-child(4) > div.cart_item_label]')};

    firstNameTextbox() {return cy.get('[id="first-name"]')};
    lastNameTextbox() {return cy.get('[id="last-name"]')};
    zipPostalText() {return cy.get('[id="postal-code"]')};
    errorPostalMissingMessage() {return cy.get('[class="error-message-container error"]')};
}

export default Swagproducts;