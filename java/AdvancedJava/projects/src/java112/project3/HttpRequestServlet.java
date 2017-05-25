package java112.project3;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 *  HTTP Request Servlet for Project 3.
 *
 *  @author  bbroadway
 */
@WebServlet(
    name = "requestServlet", 
    urlPatterns = { "/request-servlet" }
)
public class HttpRequestServlet extends HttpServlet {

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

        HttpRequestData hrd = new HttpRequestData();
        hrd.setRemoteHost(request.getRemoteHost());
        hrd.setRemoteHostAddress(request.getRemoteAddr());
        hrd.setHttpMethod(request.getMethod());
        hrd.setRequestURI(request.getRequestURI());
        hrd.setRequestURL(request.getRequestURL().toString());
        hrd.setRequestProtocol(request.getProtocol());
        hrd.setServerName(request.getServerName());
        hrd.setServerPort(Integer.toString(request.getServerPort()));
        hrd.setServerLocale(request.getLocale().toString());
        hrd.setQueryString(request.getQueryString());
        hrd.setQueryParameterValue(request.getParameter("queryParameter"));
        hrd.setRequestHeaderUserAgentValue(request.getHeader("User-Agent"));
        
        request.setAttribute("httpRequestData", hrd);
        String url = "/httpRequestData.jsp";
 
        RequestDispatcher dispatcher 
                = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);
        
    }

}

