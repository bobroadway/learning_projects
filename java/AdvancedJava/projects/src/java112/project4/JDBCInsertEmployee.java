package java112.project4;
  
import java.io.*;
import java.sql.*;
  
/**
 *
 *@author     Eric Knapp
 *
 */
public class JDBCInsertEmployee {
  
    public void runSample(String firstName, String lastName, String ssn, 
            String dept, String room, String phone) {
  
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;
  
        try {
            Class.forName("com.mysql.jdbc.Driver");
  
            connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost/student", "student", "student");
  
            statement = connection.createStatement();
  
            String insertString = "INSERT into employees "
                + " (first_name, last_name, ssn, dept, room, phone)"
                + " VALUES('" + firstName + "', '" + lastName + "', '" 
                + ssn + "', '" + dept + "', '" + room + "', '" + phone + "')";
  
            System.out.println("insertString: " + insertString);
  
            statement.executeUpdate(insertString);
  
            System.out.println();
            /*
            while (resultSet.next()) {
                String employeeId = resultSet.getString("emp_id");
                String firstName = resultSet.getString("first_name");
                String lastName = resultSet.getString("last_name");
                System.out.println(" Row: " + employeeId + " "
                            + firstName + " " + lastName);
            }
  
            System.out.println();
            */
  
        } catch (ClassNotFoundException classNotFound) {
            System.err.println("Cannot find database driver ");
            classNotFound.printStackTrace();
        } catch (SQLException sqlException) {
            System.err.println("Error in connection.ecting to database "
                    + sqlException);
            sqlException.printStackTrace();
        } catch (Exception exception) {
            System.err.println("General Error");
            exception.printStackTrace();
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
  
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
  
    }
  
    /**
     *  The main program for the JDBCSelectWhereExample class
     *
     *@param  args  The command line arguments
     *
     *@since
     *
     */
    public static void main(String[] args) {
  
        JDBCInsertEmployee employee = new JDBCInsertEmployee();
  
        employee.runSample(args[0], args[1], args[2], args[3], args[4], args[5]);
  
    }
  
}
