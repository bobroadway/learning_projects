package java112.project2;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 *  Properties Servlet for Project 2.
 *
 *  @author  bbroadway
 */
@WebServlet(
    name = "propertiesDemo", 
    urlPatterns = { "/properties" }
)
public class PropertiesDemo extends HttpServlet {

    private Properties properties;
    private Set<String> propertyNames;
    
    /**
     *  Init method used to load in the properties file
     */
    public void init() {
        // instantiate properties
        properties = new Properties();
        // load the properties file into the properties object
        try {
            properties.load(this.getClass().getResourceAsStream("/project2.properties"));
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
        // get a list of the keys, aka, property names
        propertyNames = properties.stringPropertyNames();
    }

    // create load method for properties and call from init()

    /**
     *  Handles HTTP GET requests.
     *
     *@param  request                   the HttpServletRequest object
     *@param  response                   the HttpServletResponse object
     *@exception  ServletException  if there is a Servlet failure
     *@exception  IOException       if there is an IO failure
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        // set the response type before sending data
        PrintWriter  out  = response.getWriter();
        out.print("<HTML>");
        out.print("<HEAD><TITLE>Properties Demo Output</TITLE></HEAD>");
        out.print("<BODY>");
        out.print("<div>");
        out.print("<h1>Properties Demo!</h1>");
        out.print("</div><div>");

        out.print("<table>");
	    // iterate through the properties, creating table rows and cells
        for (String key: propertyNames) {
            String value = properties.getProperty(key);
            out.print("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
        }
        out.print("</table>");

        out.print("</div><div>");
        out.print("<p><a href='/java112'>Link to Home Page</a></p>");
        out.print("</div>");
        out.print("</BODY>");
        out.print("</HTML>");
        out.close();

    }

}

