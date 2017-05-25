package java112.project4;

import java112.employee.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
 
/**
 * @author Bo Broadway
 *
 */
@WebServlet(
    name = "applicationStartup", 
    urlPatterns = { "/project4-startup" },
    loadOnStartup = 1
)

public class ApplicationStartup extends HttpServlet {

    public void init(ServletConfig config) {
        Properties properties = new Properties();
        try {
            properties.load(this.getClass().getResourceAsStream("/project4.properties"));
        }
        catch(IOException ioe) {
            System.out.println("Can't load the properties file");
            ioe.printStackTrace();
        }
        catch(Exception e) {
            System.out.println("Problem: " + e);
            e.printStackTrace();
        }
        config.getServletContext().setAttribute("project4Properties", properties);
        
        EmployeeDirectory employeeDirectory = new EmployeeDirectory(properties);
        config.getServletContext().setAttribute("employeeDirectory", employeeDirectory);
    }
    
}
