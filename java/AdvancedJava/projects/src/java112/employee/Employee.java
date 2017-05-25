package java112.employee;

public class Employee {
    
    // empty constructor
    public Employee() {
    }

    // instance variables
    private int employeeId;
    private String firstName;
    private String lastName;
    private String ssn;
    private String department;
    private String roomNumber;
    private String phoneNumber;
    
    // getters
    public int getEmployeeId() {
        return this.employeeId;
    }
    public String getFirstName() {
        return this.firstName;
    }
    public String getLastName() {
        return this.lastName;
    }
    public String getSsn() {
        return this.ssn;
    }
    public String getDepartment() {
        return this.department;
    }
    public String getRoomNumber() {
        return this.roomNumber;
    }
    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    // setters
    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setSsn(String ssn) {
        this.ssn = ssn;
    }
    public void setDepartment(String department) {
        this.department = department;
    }
    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    // toString
    public String toString() {
        return "Employee ID: " + this.employeeId + "<br />"
             + "Name: " + this.firstName + " " + this.lastName + "<br />"
             + "SSN: " + this.ssn + "<br />"
             + "Department: " + this.department + "<br />"
             + "Room Number: " + this.roomNumber + "<br />"
             + "Phone Number: " + this.phoneNumber + "<br /><br />";
    }
        
}
