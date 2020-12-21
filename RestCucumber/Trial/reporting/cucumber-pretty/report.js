$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VerifyLukeSkyWalker.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Luke Sky Walker",
  "description": "",
  "id": "validate-luke-sky-walker",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Luke Sky Walker on th SWAPI WebSite",
  "description": "",
  "id": "validate-luke-sky-walker;verify-luke-sky-walker-on-th-swapi-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User goes to SWAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User calls GET API for SWAPI",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response is successfully and status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Body is generated",
  "keyword": "And "
});
formatter.match({
  "location": "LukeSkyWalker.user_goes_to_SWAPI()"
});
formatter.result({
  "duration": 497606400,
  "status": "passed"
});
formatter.match({
  "location": "LukeSkyWalker.user_calls_GET_API_for_SWAPI()"
});
formatter.result({
  "duration": 2289758700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "LukeSkyWalker.response_is_successful_and_status_code_is(int)"
});
formatter.result({
  "duration": 2601000,
  "status": "passed"
});
formatter.match({
  "location": "LukeSkyWalker.body_is_generated()"
});
formatter.result({
  "duration": 377517200,
  "status": "passed"
});
formatter.uri("VerifyMultipleCharacters.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Multiple People",
  "description": "",
  "id": "validate-multiple-people",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Multiple People on th SWAPI WebSite",
  "description": "",
  "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User goes to SWAPI Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User calls GET API for \"\u003callnoun\u003e\" \"\u003cnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response is successful and status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Body is generated to view",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website;",
  "rows": [
    {
      "cells": [
        "allnoun",
        "number"
      ],
      "line": 11,
      "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website;;1"
    },
    {
      "cells": [
        "people",
        "2"
      ],
      "line": 12,
      "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website;;2"
    },
    {
      "cells": [
        "people",
        "3"
      ],
      "line": 13,
      "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Multiple People on th SWAPI WebSite",
  "description": "",
  "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User goes to SWAPI Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User calls GET API for \"people\" \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response is successful and status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Body is generated to view",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplePeople.user_goes_to_swapi()"
});
formatter.result({
  "duration": 216200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "people",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 33
    }
  ],
  "location": "MultiplePeople.user_calls_get_api_for_something_something(String,String)"
});
formatter.result({
  "duration": 725676200,
  "status": "passed"
});
formatter.match({
  "location": "MultiplePeople.response_is_successful_and_status_code_is_200()"
});
formatter.result({
  "duration": 1317100,
  "status": "passed"
});
formatter.match({
  "location": "MultiplePeople.body_is_generated()"
});
formatter.result({
  "duration": 51600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Multiple People on th SWAPI WebSite",
  "description": "",
  "id": "validate-multiple-people;verify-multiple-people-on-th-swapi-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User goes to SWAPI Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User calls GET API for \"people\" \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response is successful and status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Body is generated to view",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplePeople.user_goes_to_swapi()"
});
formatter.result({
  "duration": 129800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "people",
      "offset": 24
    },
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "MultiplePeople.user_calls_get_api_for_something_something(String,String)"
});
formatter.result({
  "duration": 753371100,
  "status": "passed"
});
formatter.match({
  "location": "MultiplePeople.response_is_successful_and_status_code_is_200()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "location": "MultiplePeople.body_is_generated()"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
});