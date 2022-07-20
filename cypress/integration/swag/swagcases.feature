Feature: Exploring Swaglabs demo site

    @Swag
    Scenario: The user logs in to the site
    Given the user open swaglabs site
    When the user complete the username textbox
    And the user complete the password textbox
    Then clicks the login button
    And the user should be able to see the shop site

    Scenario: Password missing Validation
    Given the user open swaglabs site
    When the user complete the username textbox    
    Then clicks the login button
    And the user should be able to see an error message about password is missing

    Scenario: User missing Validation
    Given the user open swaglabs site
    When the user complete the password textbox    
    Then clicks the login button
    And the user should be able to see an error message about user is missing

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
   
    Scenario: The user add products and checks the cart, then removes a product from the cart
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site
    And adds products "Sauce Labs Backpack" to the cart from the shop site
    And adds products "Sauce Labs Bolt T-Shirt" to the cart from the shop site
    And adds products "Sauce Labs Onesie" to the cart from the shop site
    And the user clicks on the cart icon
    Then the user remove a product from the cart
    And the user validates the product is removed or not from the cart

    Scenario: The user starts the checkout process and cancel
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site
    And adds products "Sauce Labs Backpack" to the cart from the shop site
    And adds products "Sauce Labs Bolt T-Shirt" to the cart from the shop site
    And adds products "Sauce Labs Onesie" to the cart from the shop site
    And the user clicks on the cart icon
    Then the user clicks on the Checkout button
    And the user clicks on the Cancel button

    Scenario: Checkout form validations (step 1)
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site
    And adds products "Sauce Labs Backpack" to the cart from the shop site
    And adds products "Sauce Labs Bolt T-Shirt" to the cart from the shop site
    And adds products "Sauce Labs Onesie" to the cart from the shop site
    And the user clicks on the cart icon   
    And the user clicks on the Checkout button 
    Then the user complete the name textbox
    And the user complete the last name textbox    
    And the user clicks on Continue button
    And the user must be able to display an error message related to the postal code missing
    Then the user complete the postal code textbox
    And the user complete clear the last name textbox
    And the user clicks on Continue button
    And the user must be able to display an error message related to the last name missing
    And the user complete the last name textbox
    And the user complete clear the name textbox
    And the user clicks on Continue button
    And the user must be able to display an error message related to the name missing
    And the user complete clear the name textbox
    And the user complete clear the last name textbox
    And the user complete clear the postal code textbox
    And the user clicks on Continue button
    And the user must be able to display an error message related to the name missing

    Scenario: Checkout Overview (step2)
    Given the user open swaglabs site
    And the user logs in
    Then the user should be able to see the shop site
    And adds products "Sauce Labs Backpack" to the cart from the shop site
    And adds products "Sauce Labs Bolt T-Shirt" to the cart from the shop site
    And adds products "Sauce Labs Onesie" to the cart from the shop site
    And the user clicks on the cart icon   
    And the user clicks on the Checkout button 
    Then the user complete the name textbox
    And the user complete the last name textbox
    And the user complete the postal code textbox
    And the user clicks on Continue button