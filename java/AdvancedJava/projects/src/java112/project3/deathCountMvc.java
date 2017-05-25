package java112.project3;
 
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
 
/**
 * @author Bo Broadway
 *
 */
@WebServlet(
    name = "deathCountMvc", 
    urlPatterns = { "/deathcounter", "/deathCountMvc" }
)
public class deathCountMvc extends HttpServlet {
 
    /**
     *  Handles HTTP GET requests.
     *
     *@param  request               the HttpServletRequest object
     *@param  response              the HttpServletResponse object
     *@exception  ServletException  if there is a Servlet failure
     *@exception  IOException       if there is an IO failure
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        char gender = request.getParameter("gender").charAt(0);
        boolean smoker = false;
        boolean riskTaker = false;

        if (request.getParameter("isSmoker") != null) {
            smoker = true;
        }
        if (request.getParameter("isRiskTaker") != null) {
            riskTaker = true;
        }

        DeathCounter deathCounter = new DeathCounter(name, age, gender, smoker, riskTaker);

        // testing /////////////
        /*
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
            out.println("<html><body>");
    
                out.println("<h1>deathCounterTest</h1>");        
        
                out.println("<pre>");
                out.println("Name: " + deathCounter.getName());
                out.println("Age: " + deathCounter.getAge());
                out.println("Gender: " + deathCounter.getGender());
                out.println("Smoker: " + deathCounter.getSmoker());
                out.println("Risk Taker: " + deathCounter.getRiskTaker());
                out.println("Date: " + deathCounter.getDeathDate());
                out.println("</pre>");
    
            out.println("</body></html>");
        out.close();
        */
        /////////////////////////

        request.setAttribute("name", deathCounter.getName());
        request.setAttribute("date", deathCounter.getDeathDate());
        
        //request.setAttribute("thisDeathCounter", deathCounter);
        
        String url = "/results.jsp";
        
        RequestDispatcher dispatcher 
                = getServletContext().getRequestDispatcher(url);
        dispatcher.forward(request, response);
    }
 
}
