Feature: Exploring Swaglabs demo site

    @Swag
    Scenario: The user logs in to the site
    Given the user open swaglabs site
    When the user complete the username textbox
    And the user complete the password textbox
    Then clicks the login button
    And the user should be able to see the shop site

    Scenario: The user logs in to the site (Shorter path)
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site

    Scenario: The user add a product in the cart
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site
    And adds products "Sauce Labs Backpack" to the cart from the shop site
    And the user clicks on the cart icon


    Scenario: The user add products with conditional
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site
    And adds products "Sauce Labs Backpack" to the cart from the shop site
    And adds in order to add the product "Sauce Labs Bike Light" the user clicks on the product title name
    Then the user validates the price is less than $12.00 and adds the product to the cart
    And the user clicks on the cart icon
    Then the user validates the product is added or not to the cart
    And the user clicks the button continue shopping
   
    