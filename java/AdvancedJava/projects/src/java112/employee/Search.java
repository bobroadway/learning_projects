package java112.employee;
import java.util.*;

public class Search {
    
    // empty constructor
    public Search() {
    }

    // instance variables
    private String type;
    private String term;
    private ArrayList<Employee> results = new ArrayList<Employee>();
    private boolean employeesFound;
    
    // getters
    public String getType() {
        return this.type;
    }
    public String getTerm() {
        return this.term;
    }
    public ArrayList<Employee> getResults() {
        return this.results;
    }
    public boolean getEmployeesFound() {
        return this.employeesFound;
    }
    
    // setters
    public void setType(String type) {
        this.type = type;
    }
    public void setTerm(String term) {
        this.term = term;
    }
    public void setResults(ArrayList<Employee> results) {
        this.results = results;
    }
    public void setEmployeesFound(boolean employeesFound) {
        this.employeesFound = employeesFound;
    }
    
    // addFoundEmployee
    public void addFoundEmployee(Employee employee) {
        results.add(employee);
    }   

}
