package java112.project4;

import java112.employee.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
/**
 *  Employee Search Results JSP Page Display Servlet
 *  Retrieves Search Query, Forwards to the Employee Search Results JSP Page
 *  @author Bo Broadway
 * 
 */
@WebServlet(
     name = "employeeSearchResults",
     urlPatterns = { "/employeeSearchResults" }
)
public class EmployeeSearchResultsJspPageDisplayServlet extends HttpServlet {

     /**
     *  Handles HTTP GET requests.
     *
     *@param  request               the HttpServletRequest object
     *@param  response              the HttpServletResponse object
     *@exception  ServletException  if there is a Servlet failure
     *@exception  IOException       if there is an IO failure
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) 
                throws ServletException, IOException {

        // get employeeDirectory from session
        HttpSession session = request.getSession();        
        //EmployeeDirectory employeeDirectory
        //    = (EmployeeDirectory) session.getAttribute("employeeDirectory");
        EmployeeDirectory employeeDirectory = new EmployeeDirectory();

        // assign search items from form
        String type = request.getParameter("type");
        String term = request.getParameter("term");
        Search search = new Search();
        search.setType(type);
        search.setTerm(term);

        // determine search type, call appropriate method
        if (type.equals("id")) {
            employeeDirectory.searchEmployeeById(search);
        } else if (type.equals("lastName")) {
            employeeDirectory.searchEmployeeByLastName(search);
        }

        // place search into session
        request.setAttribute("search", search);

        // forward to employeeSearchResults.jsp
        String url = "/jsp/employeeSearchResults.jsp";
        RequestDispatcher dispatcher 
            = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);

    }

}
