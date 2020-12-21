Feature: Validate Luke Sky Walker

  Scenario: Verify Luke Sky Walker on th SWAPI WebSite

    Given User goes to SWAPI
    When User calls GET API for SWAPI
    Then Response is successful and status code is 200
    And Body is generated
