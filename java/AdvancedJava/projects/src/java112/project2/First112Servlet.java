package java112.project2;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 *  Properties Servlet for Project 2.
 *
 *  @author  bbroadway
 */
@WebServlet(
    name = "first112Servlet", 
    urlPatterns = { "/first", "/first112" }
)
public class First112Servlet extends HttpServlet {

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
        out.print("<HEAD><TITLE>First112Servlet Output</TITLE></HEAD>");
        out.print("<BODY>");
        out.print("<div>");
        out.print("<h1>First112Servlet</h1>");
        out.print("</div><div>");
	    out.print("<ul><li>Name: Bo Broadway</li>"
            + "<li>Course: Advanced Java Day</li></ul>");
        out.print("</div><div>");
        out.print("<img src='images/dance.gif' alt='an image' height='200'>");
        out.print("</div><div>");
        out.print("<p><a href='/java112'>Link to Home Page</a></p>");
        out.print("</div>");
        out.print("</BODY>");
        out.print("</HTML>");
        out.close();
    }

}

