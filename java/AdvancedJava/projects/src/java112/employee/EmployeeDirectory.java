package java112.employee;
import java.io.*;
import java.util.*;
import java.sql.*;

public class EmployeeDirectory {

    // empty constructor
    public EmployeeDirectory() {
    }
    
    // constructor
    public EmployeeDirectory(Properties properties) {
        this.properties = properties;
    }   

    // instance variables
    private Properties properties;
    
    // connection
    private Connection connect() {
        Connection connection = null;
        /*
        String driver = properties.getProperty("driver");
        String url = properties.getProperty("url");
        String username = properties.getProperty("username");
        String password = properties.getProperty("password");
        */
        
        try {
            connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost/student", "student", "student");
        //} catch (ClassNotFoundException classNotFound) {
        //    System.err.println("Cannot find database driver ");
        //    classNotFound.printStackTrace();
        } catch (SQLException sqlException) {
            System.err.println("Error in connection.ecting to database "
                    + sqlException);
            sqlException.printStackTrace();
        } catch (Exception exception) {
            System.err.println("General Error");
            exception.printStackTrace();
        }
        return connection;
    }
    
    // add employee
    public int addEmployee(String firstName
                          ,String lastName
                          ,String ssn
                          ,String department
                          ,String roomNumber
                          ,String phoneNumber) {
        
        Connection connection = null;
        PreparedStatement statement = null;
        int results = 0;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = this.connect();
            String query = "insert into employees " 
                + "(first_name, last_name, ssn, dept, room, phone) "
                + "values (?, ?, ?, ?, ?, ?)";
            statement = connection.prepareStatement(query);
            
            statement.setString(1, firstName);
            statement.setString(2, lastName);
            statement.setString(3, ssn);
            statement.setString(4, department);
            statement.setString(5, roomNumber);
            statement.setString(6, phoneNumber);
            
            results = statement.executeUpdate();
            
        } catch (SQLException sqlException) {
            System.err.println("Error in connection.ecting to database "
                    + sqlException);
            sqlException.printStackTrace();
        } catch (Exception exception) {
            System.err.println("General Error");
            exception.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException sqlException) {
                System.err.println("Error in connection.ecting to database "
                        + sqlException);
                sqlException.printStackTrace();
            } catch (Exception exception) {
                System.err.println("General Error");
                exception.printStackTrace();
            }
        }
        return results;
    
    }
    
    // search by id
    public void searchEmployeeById(Search search) {
        
        Connection connection = null;
        Statement statement = null;
        ResultSet results = null;
        int employeeId = Integer.parseInt(search.getTerm());
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = this.connect();
            String query = "select * from employees " 
                + "where emp_id = '" + employeeId + "';";
            statement = connection.createStatement();
            
            results = statement.executeQuery(query);
            if (results != null) {
                search.setEmployeesFound(true);
            } else {
                search.setEmployeesFound(false);
            }
            if (search.getEmployeesFound()) {
                while (results.next()) {
                    Employee employee = new Employee();
                    employee.setEmployeeId(results.getInt("emp_id"));
                    employee.setFirstName(results.getString("first_name"));
                    employee.setLastName(results.getString("last_name"));
                    employee.setSsn(results.getString("ssn"));
                    employee.setDepartment(results.getString("dept"));
                    employee.setRoomNumber(results.getString("room"));
                    employee.setPhoneNumber(results.getString("phone"));
                    
                    search.addFoundEmployee(employee);
                }
            }
            
            
        } catch (SQLException sqlException) {
            System.err.println("Error in connection.ecting to database "
                    + sqlException);
            sqlException.printStackTrace();
        } catch (Exception exception) {
            System.err.println("General Error");
            exception.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
                if (results != null) {
                    results.close();
                }
            } catch (SQLException sqlException) {
                System.err.println("Error in connection.ecting to database "
                        + sqlException);
                sqlException.printStackTrace();
            } catch (Exception exception) {
                System.err.println("General Error");
                exception.printStackTrace();
            }
        }
    
    }
    
    // search by lastName
    public void searchEmployeeByLastName(Search search) {
        
        Connection connection = null;
        Statement statement = null;
        ResultSet results = null;
        String lastName = search.getTerm();


        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = this.connect();

            String query = "select * from employees " 
                + "where last_name = '" + lastName + "';";
            statement = connection.createStatement();
            
            results = statement.executeQuery(query);
            if (results != null) {
                search.setEmployeesFound(true);
            } else {
                search.setEmployeesFound(false);
            }
            if (search.getEmployeesFound()) {
                while (results.next()) {
                    Employee employee = new Employee();
                    employee.setEmployeeId(results.getInt("emp_id"));
                    employee.setFirstName(results.getString("first_name"));
                    employee.setLastName(results.getString("last_name"));
                    employee.setSsn(results.getString("ssn"));
                    employee.setDepartment(results.getString("dept"));
                    employee.setRoomNumber(results.getString("room"));
                    employee.setPhoneNumber(results.getString("phone"));
                    
                    search.addFoundEmployee(employee);
                }
            }
            
            
        } catch (SQLException sqlException) {
            System.err.println("Error in connection.ecting to database "
                    + sqlException);
            sqlException.printStackTrace();
        } catch (Exception exception) {
            System.err.println("General Error");
            exception.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
                if (results != null) {
                    results.close();
                }
            } catch (SQLException sqlException) {
                System.err.println("Error in connection.ecting to database "
                        + sqlException);
                sqlException.printStackTrace();
            } catch (Exception exception) {
                System.err.println("General Error");
                exception.printStackTrace();
            }
        }
    
    }

}
