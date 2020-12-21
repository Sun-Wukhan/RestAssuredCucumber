package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.ResponseSpecification;
import org.junit.Assert;
import utilities.Utilities;

import static io.restassured.RestAssured.given;

public class LukeSkyWalker extends Utilities {


    ResponseSpecification res;
    Response response;

    @Given("^User goes to SWAPI$")
    public void user_goes_to_SWAPI() throws Throwable {
                 res = new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .build();

    }

    @When("^User calls GET API for SWAPI$")
    public void user_calls_GET_API_for_SWAPI() throws Throwable {
        response = given().spec(requestSpecification()).when().get("people/1/").then().spec(responseSpecification()).log().all().extract().response();

    }

    @Then("^Response is successfully and status code is (\\d+)$")
    public void response_is_successful_and_status_code_is(int arg1) throws Throwable {
        Assert.assertEquals(response.getStatusCode(), 200);

    }

    @Then("^Body is generated$")
    public void body_is_generated() throws Throwable {
        String body = response.asString();
        JsonPath js = new JsonPath(body);

        String answer = js.get("hair_color").toString();
        Assert.assertEquals(answer, "blond");
    }
}
