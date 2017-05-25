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
        <ul>
            <li>${httpRequestData.remoteHost}</li>
            <li>${httpRequestData.remoteHostAddress}</li>
            <li>${httpRequestData.httpMethod}</li>
            <li>${httpRequestData.requestURI}</li>
            <li>${httpRequestData.requestURL}</li>
            <li>${httpRequestData.requestProtocol}</li>
            <li>${httpRequestData.serverName}</li>
            <li>${httpRequestData.serverPort}</li>
            <li>${httpRequestData.serverLocale}</li>
            <li>${httpRequestData.queryString}</li>
            <li>${httpRequestData.queryParameterValue}</li>
            <li>${httpRequestData.requestHeaderUserAgentValue}</li>
            
        </ul>
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
