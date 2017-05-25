<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:import url="head.jsp" />
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
  <div id="wrap">
	<c:import url="header.jsp" />
	<c:import url="sidebar.jsp" />

	<div id="content">
      <h1>Add Employee</h1>
      <form action="employeeAddAction" method="post">
        <!-- FIRST NAME -->
        <label for="firstName">First Name: </label>  
        <input type="text"
               name="firstName"
               id="firstName" />
        <br />
        <!-- LAST NAME -->
        <label for="lastName">Last Name: </label>  
        <input type="text"
               name="lastName"
               id="lastName" />
        <br />
        <!-- SSN -->
        <label for="ssn">SSN: </label>  
        <input type="text"
               name="ssn"
               id="ssn" />
        <br />
        <!-- DEPARTMENT -->
        <label for="department">Department: </label>  
        <input type="text"
               name="department"
               id="department" />
        <br />
        <!-- ROOM NUMBER -->
        <label for="roomNumber">Room Number: </label>  
        <input type="text"
               name="roomNumber"
               id="roomNumber" />
        <br />
        <!-- PHONE NUMBER -->
        <label for="phoneNumber">Phone Number: </label>  
        <input type="text"
               name="phoneNumber"
               id="phoneNumber" />
        <br />
        <!-- SUBMIT BUTTON -->
        <input type="submit" 
               class="button"
               value="Submit" />
      </form>
      <h3>${project4AddMessage}</h3>
      <c:remove var="project4AddMessage" scope="session" />
    </div>

	<c:import url="footer.jsp" />
  </div>
</body>
</html>
