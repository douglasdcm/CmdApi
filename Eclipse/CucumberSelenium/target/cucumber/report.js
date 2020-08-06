$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("carForSale.feature");
formatter.feature({
  "line": 1,
  "name": "Search for a new car",
  "description": "In order to serach for a new car\r\nas a buyer\r\nI navigate to https://www.cars.com/",
  "id": "search-for-a-new-car",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8915451700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "search-for-a-new-car;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page of https://www.cars.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select Cars for Sale",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select the car usage \"New \u0026 Used Cars\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select the Make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select the model as \"- 128\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select the Max price as \"$40,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the driven miles as \"40 Miles from\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I inform the zip code as \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see a list of searched car from \"BMW\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The title of page should be \"New and Used BMW 128 - in 12345 - on Cars.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarsForSaleSteps.i_am_on_home_page_of_https_www_cars_com()"
});
formatter.result({
  "duration": 36364771600,
  "status": "passed"
});
formatter.match({
  "location": "CarsForSaleSteps.i_select_Cars_for_Sale()"
});
formatter.result({
  "duration": 5993102700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Cars",
      "offset": 24
    }
  ],
  "location": "CarsForSaleSteps.i_select_the_car_usage(String)"
});
formatter.result({
  "duration": 682116300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 22
    }
  ],
  "location": "CarsForSaleSteps.i_select_the_Make_as(String)"
});
formatter.result({
  "duration": 565900700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "- 128",
      "offset": 23
    }
  ],
  "location": "CarsForSaleSteps.i_select_the_model_as(String)"
});
formatter.result({
  "duration": 359271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 27
    }
  ],
  "location": "CarsForSaleSteps.i_select_the_Max_price_as(String)"
});
formatter.result({
  "duration": 1073614900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: 40000aa\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-UJI8L8D\u0027, ip: \u0027192.168.44.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:283)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\r\n\tat steps.CarsForSaleSteps.i_select_the_Max_price_as(CarsForSaleSteps.java:96)\r\n\tat ✽.And I select the Max price as \"$40,000\"(carForSale.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "40 Miles from",
      "offset": 30
    }
  ],
  "location": "CarsForSaleSteps.i_select_the_driven_miles_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 26
    }
  ],
  "location": "CarsForSaleSteps.i_inform_the_zip_code_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarsForSaleSteps.i_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 42
    }
  ],
  "location": "CarsForSaleSteps.i_should_see_a_list_of_searched_cars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New and Used BMW 128 - in 12345 - on Cars.com",
      "offset": 29
    }
  ],
  "location": "CarsForSaleSteps.the_title_of_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 13265227000,
  "status": "passed"
});
});