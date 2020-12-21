package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.ResponseSpecification;
import org.testng.Assert;
import utilities.Utilities;

import static io.restassured.RestAssured.given;

public class MultiplePeople extends Utilities {

    ResponseSpecification res;
    Response response;

    @Given("^User goes to SWAPI Website$")
    public void user_goes_to_swapi() throws Throwable {
        res = new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .build();
    }

    @When("^User calls GET API for \"([^\"]*)\" \"([^\"]*)\"$")
    public void user_calls_get_api_for_something_something(String allnoun, String number) throws Throwable {
        response = given().spec(requestSpecification()).when().get(allnoun + "/" + number+ "/").then().spec(responseSpecification()).log().all().extract().response();
    }

    @Then("^Response is successful and status code is 200$")
    public void response_is_successful_and_status_code_is_200() throws Throwable {
        response.getStatusCode();
        Assert.assertEquals(response.getStatusCode(), 200);
    }

    @And("^Body is generated to view$")
    public void body_is_generated() throws Throwable {
        System.out.println("Complete");
    }
}
