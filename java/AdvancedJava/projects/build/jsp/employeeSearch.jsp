<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:import url="head.jsp" />
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
  <div id="wrap">
	<c:import url="header.jsp" />
	<c:import url="sidebar.jsp" />

	<div id="content">
      <h1>Employee Search</h1>
      <form action="employeeSearchResults" method="get">

        <!-- SEARCH TERM -->
        <label for="term">Search Term: </label>  
        <input type="text"
               name="term"
               id="term" />
        <br />
        <!-- SEARCH TYPE -->
        <label for="type">Search Type: </label>
        <br />
        <input type="radio" 
               name="type" 
               id="id"
               value="id" checked />
        <label for="id">ID</label>
        <br />
        <input type="radio" 
               name="type" 
               id="lastName"
               value="lastName" /> 
        <label for="lastName">Last Name</label>  
        <br />
        <!-- SUBMIT BUTTON -->
        <input type="submit" 
               class="button"
               value="Search" />
      </form>
    </div>

	<c:import url="footer.jsp" />
  </div>
</body>
</html>
