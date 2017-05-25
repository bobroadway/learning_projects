package java112.project2;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 *  Lab 5 - Servlet Practice
 *
 *  @author bbroadway
 */
@WebServlet(
    name = "practiceServlet", 
    urlPatterns = { "/practice" }
)
public class PracticeServlet extends HttpServlet {
    
    public void init() {
        log("Made it to init().");      
    }

    private int hitCounter = 0;
    private String initDate = new Date().toString();

    /**
     *  Handles HTTP GET requests.
     *
     *  @param      request           the HttpServletRequest object
     *  @param      response          the HttpServletResponse object
     *  @exception  ServletException  if there is a Servlet failure
     *  @exception  IOException       if there is an IO failure
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        
        log("Made it to doGet().");
        hitCounter++;
        String currentDate = new Date().toString();

        PrintWriter  out  = response.getWriter();
        
        out.print("Hello");
        out.print("</br />");
        out.print("Hit Counter: " + hitCounter);
        out.print("</br />");
        out.print("Date/Time first accessed: " + initDate);
        out.print("</br />");
        out.print("Current Date/Time: " + currentDate);

    }
    
    public void destroy() {
        log("Made it to destroy().");
    }

}
