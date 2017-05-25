<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:import url="head.jsp" />
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
  <div id="wrap">
	<c:import url="header.jsp" />
	<c:import url="sidebar.jsp" />

	<div id="content">
      <h1>Search Results</h1>
        
        
      <c:if test="${search.results.isEmpty()}">
         <p>No results.</p>
      </c:if>
      <c:if test="${!search.results.isEmpty()}">  
        <table>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>SSN</th>
              <th>Department</th>
              <th>Room Number</th>
              <th>Phone Number</th>
            </tr>
          <c:forEach var="employee" items="${search.results}">
            <tr>
              <td>${employee.employeeId}</td>
              <td>${employee.firstName}</td>
              <td>${employee.lastName}</td>
              <td>${employee.ssn}</td>
              <td>${employee.department}</td>
              <td>${employee.roomNumber}</td>
              <td>${employee.phoneNumber}</td>
            </tr>
          </c:forEach>
        </table>
      </c:if>
    </div>

	<c:import url="footer.jsp" />
  </div>
</body>
</html>
