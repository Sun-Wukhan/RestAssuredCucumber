Feature: Validate Multiple People

  Scenario Outline: Verify Multiple People on th SWAPI WebSite

    Given User goes to SWAPI Website
    When User calls GET API for "<allnoun>" "<number>"
    Then Response is successful and status code is 200
    And Body is generated to view

    Examples:
    | allnoun | number |
    | people | 2    |
    | people | 3    |
    | people | 4    |
    | planets| 2    |
    | people | 1    |
