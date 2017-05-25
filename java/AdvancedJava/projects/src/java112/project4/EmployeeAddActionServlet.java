package java112.project4;

import java112.employee.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
/**
 *  Employee Add Action Servlet
 *  Adds Employee to database from Form
 *  @author Bo Broadway
 * 
 */
@WebServlet(
     name = "employeeAddAction",
     urlPatterns = { "/employeeAddAction" }
)
public class EmployeeAddActionServlet extends HttpServlet {

     /**
     *  Handles HTTP GET requests.
     *
     *@param  request               the HttpServletRequest object
     *@param  response              the HttpServletResponse object
     *@exception  ServletException  if there is a Servlet failure
     *@exception  IOException       if there is an IO failure
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) 
                throws ServletException, IOException {

        // get employeeDirectory from session
        HttpSession session = request.getSession();        
        //EmployeeDirectory employeeDirectory
        //    = (EmployeeDirectory) session.getAttribute("employeeDirectory");
        EmployeeDirectory employeeDirectory = new EmployeeDirectory();

        // assign employee data from form
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String ssn = request.getParameter("ssn");
        String department = request.getParameter("department");
        String roomNumber = request.getParameter("roomNumber");
        String phoneNumber = request.getParameter("phoneNumber");

        // add employee data through employeeDirectory
        int rowsAffected = employeeDirectory.addEmployee(firstName
                                                        ,lastName
                                                        ,ssn
                                                        ,department
                                                        ,roomNumber
                                                        ,phoneNumber);

        // place rowsAffected into session
        String project4AddMessage = rowsAffected + " row(s) affected.";
        session.setAttribute("project4AddMessage", project4AddMessage);

        // redirect to employeeAdd.jsp
        response.sendRedirect("employeeAdd");

    }

}
