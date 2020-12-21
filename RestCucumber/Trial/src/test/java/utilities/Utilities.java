package utilities;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

import java.io.*;
import java.util.Properties;

public class Utilities {

    RequestSpecification req;
    ResponseSpecification res;

    public RequestSpecification requestSpecification() throws IOException {
        PrintStream log = new PrintStream(new FileOutputStream("Reporting.txt"));

        req = new RequestSpecBuilder()
                .addFilter(RequestLoggingFilter.logRequestTo(log))
                .addFilter(ResponseLoggingFilter.logResponseTo(log))
                .setContentType("application/json")
                .setRelaxedHTTPSValidation()
                .setUrlEncodingEnabled(false)
                .setBaseUri(getGlobalValues("baseURL"))
                .build();

        return req;
    }

    public ResponseSpecification responseSpecification(){

        res = new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .build();

        return res;
    }

    public static String getGlobalValues(String keys) throws IOException {

        Properties props = new Properties();
        File filepath = new File(System.getProperty("user.dir") +  "/src/test/resources/global.properties");
        InputStream files = new FileInputStream(filepath.getAbsolutePath());
        props.load(files);
        files.close();
        return props.getProperty(keys);

    }
}
