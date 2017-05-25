<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Home Page</title>
	<meta http-equiv="Content-Language" content="German" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
	<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed' rel='stylesheet' type='text/css' />
</head>
<body>
<div id="wrap">
	<div id="header">
		<div id="headerlinks">
		<a href="index.jsp" title="Home">Home</a>
		<a href="#" title="Blog">Blog</a>
		<a href="#" title="About Us">About Us</a>
		<a href="#" title="Contact">Contact</a>
		</div>
		<h1><a href="#">Home Page</a></h1>
	</div>

	<div id="sidebar">
		<h2>Unit 2</h2>
		<div class="box">
		<ul>
		<li><a href="/java112/trivial">Trivial Servlet</a></li>
		<li><a href="linkingDemo.html">Linking Demo</a></li>
		</ul>
        </div>
        <h2>Project 2</h2>
        <div class="box">
        <ul>
		<li><a href="/java112/first">First Servlet</a></li>
		<li><a href="/java112/properties">Properties Servlet</a></li>
		</ul>
		</div>

		<h2>Unit 3</h2>
		<div class="box">
		<ul>
		<li><a href="myFirstJSP.jsp">My First JSP</a></li>
		<li><a href="/java112/mvc-demo">MVC Demo</a></li>
		</ul>
		</div>

		<h2>Project 3</h2>
		<div class="box">
		<ul>
		<li><a href="/java112/request-servlet">HTTP Data Servlet</a></li>
		<li><a href="/java112/project3-properties">Project Properties Servlet</a></li>
		</ul>
		</div>
	</div>

	<div id="content">
        <h1>PROJECT 3 PROPERTIES</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Author</td>
                <td>${properties.getProperty("author")}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${properties.getProperty("email")}</td>
            </tr>
            <tr>
                <td>Course Title</td>
                <td>${properties.getProperty("course.title")}</td>
            </tr>
            <tr>
                <td>Course Schedule</td>
                <td>${properties.getProperty("course.schedule")}</td>
            </tr>
            <tr>
                <td>Course Instructor</td>
                <td>${properties.getProperty("course.instructor")}</td>
            </tr>
            <tr>
                <td>Project Description</td>
                <td>${properties.getProperty("project.description")}</td>
            </tr>
        </table>   
    </div>

	<div id="footer">
		<div style="float: right;">
		<a href="#" title="Contact Us"><img src="images/contact.gif" alt="Contact" /></a>
		<a href="#" title="Sitemap"><img src="images/sitemap.gif" alt="Sitemap" /></a>
		<a href="#" title="Rss Feed"><img src="images/rss.png" alt="Rss Feed" /></a>
		</div>
		Theme #4 &copy; 2013 | <!-- You can use it for practically any personal or commercial use so long as you keep our footer credit links intact. -->Theme by <a target="_blank" href="http://codingdev.de" title="CodingDev">CodingDev</a>
	</div>
</div>
</body>
</html>
