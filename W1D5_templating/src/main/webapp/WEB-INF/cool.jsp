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
	<h1>Hello templating with JSP pages!</h1>
	<p>	
		model mykey c:cout : <c:out value="${myKey}"/>
	</p>
	<hr />
	<p>
		model without c:out = ${myKey }
	</p>
	<hr />
	<c:out value="${x }"/>

</body>
</html>