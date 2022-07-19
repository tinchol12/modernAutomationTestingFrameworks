class Swagproducts
{
    swagBurgerMenu() {return cy.get('[id="react-burger-menu-btn"]')};
    backToProducts() {return cy.get('[id="back-to-products"]')};
    cartLink() {return cy.get('[class="shopping_cart_link"')};
    continueShoppingButton() {return cy.get('[id="continue-shopping"]')};
    prodSauceLabsBackpackAddToCartButton() {return cy.get('[id="add-to-cart-sauce-labs-backpack"]')};
    prodSauceLabsBackpackRemoveFromCartButton() {return cy.get('[id="remove-sauce-labs-backpack"]')};
    prodSauceLabsBikeLightsTitle() {return cy.get('[id="item_0_title_link"]')};
    prodSauceLabsBikeLightsPrice() {return cy.get('[class="inventory_details_price"]')};
    prodSauceLabsBikeLightsAddButtonProdWeb() {return cy.get('[id="add-to-cart-sauce-labs-bike-light"]')};
    cartSauceLabsBikeLightsAdded() {return cy.get('[div.page_wrapper div.cart_contents_container div:nth-child(1) div.cart_list div.cart_item:nth-child(4) > div.cart_item_label]')};
}

export default Swagproducts;