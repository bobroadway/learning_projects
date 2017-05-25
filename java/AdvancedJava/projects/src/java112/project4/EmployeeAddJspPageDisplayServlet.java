package java112.project4;

import java112.employee.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
/**
 *  Employee Add JSP Page Display Servlet
 *  Forwards to the Employee Search JSP Page
 *  @author Bo Broadway
 * 
 */
@WebServlet(
     name = "employeeAdd",
     urlPatterns = { "/employeeAdd" }
)
public class EmployeeAddJspPageDisplayServlet extends HttpServlet {

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

        String url = "/jsp/employeeAdd.jsp";
        RequestDispatcher dispatcher 
                = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);

    }

}
