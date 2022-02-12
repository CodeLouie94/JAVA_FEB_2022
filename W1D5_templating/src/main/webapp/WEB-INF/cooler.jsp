<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>this page is cooler!!!</h1>
	<p> and it has a p tag!!!</p>
	<hr />
	<p>
		the size of this array: ${ dojosArray.size()}
	</p>
	<p>
		<c:forEach var="dojo" items="${ dojosArray}">
			<li>
				${dojo }
			</li>
			
		</c:forEach>
	</p>

</body>
</html>