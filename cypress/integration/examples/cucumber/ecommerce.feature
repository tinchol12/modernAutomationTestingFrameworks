Feature: Buying products from the ecommerce

    @Regression
    Scenario: Complete the form
    Given I open the Ecommerce site
    When i fill the form detail
        |name | gender |
        |bob< | Male   |
    Then validate the form behavior
        |name |
        |bob< |
    And select the shop page

    @Smoke
    Scenario: Ecommerce products are on sale and the user buy some of them
    Given I open the Ecommerce site
    When i add items to the cart
    And validate the total price of the items
    Then select the country submit and get a success message

 

