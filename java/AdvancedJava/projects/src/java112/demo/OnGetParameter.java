package java112.demo;
 
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(
    name = "sum", 
    urlPatterns = { "/sum" }
)

public class OnGetParameter extends HttpServlet  
{
    protected void doPost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		PrintWriter pw = res.getWriter();
		res.setContentType("text/html");
 
		String n1 = req.getParameter("n1");
		String n2 = req.getParameter("n2");
 
		int result = Integer.parseInt(n1) + Integer.parseInt(n2);		
		pw.println("Sum of two numbers " + result);
		pw.close();
 
	}
 
}
