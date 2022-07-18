Feature: Exploring Swaglabs demo site

    @Swag
    Scenario: The user logs in to the site
    Given the user open swaglabs site
    When the user complete the username textbox
    And the user complete the password textbox
    Then clicks the login button
    And the user should be able to see the shop site

    