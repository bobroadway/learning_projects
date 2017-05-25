package java112.project2;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 *  This is part of a lab and is the first servlet for the course.
 *
 *@author    eknapp
 */
@WebServlet(
    name = "trivialServlet", 
    urlPatterns = { "/trivial", "/simple" }
)
public class TrivialServlet extends HttpServlet {

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
        out.print("<HEAD><TITLE>TrivialServlet Output</TITLE></HEAD>");
        out.print("<BODY>");
        out.print("<div>");
        out.print("<h1>TrivialServlet Here!</h1>");
	    out.print("<h3>A simple change...</h3>");
        out.print("</div><div>");
	    out.print("<ul><li>@WebServlet - annotation used to declare a servlet</li>"
            + "<li>name - the name of the servlet</li>"
            + "<li>urlPatterns - array of urlPatterns accepted by the servlet</li></ul>");
        out.print("</div><div>");
        out.print("<p><a href='/java112'>Link to Home Page</a></p>");
        out.print("</div><div>");
        out.print("<img src='images/dance.gif' alt='an image' height='200'>");
        out.print("</div>");
        System.out.println("Is this logging? - log from println");
        log("Is this logging? - log from log()");
        out.print("</BODY>");
        out.print("</HTML>");
        out.close();
    }

}

