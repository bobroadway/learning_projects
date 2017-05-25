package java112.project3;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 *  Properties Servlet for Project 3.
 *
 *  @author  bbroadway
 */
@WebServlet(
    name = "project3PropertiesServlet", 
    urlPatterns = { "/project3-properties" }
)
public class PropertiesServlet extends HttpServlet {

    private Properties properties;
    
    /**
     *  Init method used to load in the properties file
     */
    public void init() {
        // instantiate properties
        properties = new Properties();
        // load the properties file into the properties object
        try {
            properties.load(this.getClass().getResourceAsStream("/project3.properties"));
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
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

        request.setAttribute("properties", properties);
        String url = "/projectProperties.jsp";
 
        RequestDispatcher dispatcher 
                = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);

    }

}

