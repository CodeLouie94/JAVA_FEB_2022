<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>   

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>L I B R A R Y </title>
</head>
<body>
	<div class="container">
		<h2>create a new Library</h2>
		<hr />
		<p>${allLibraries}</p>

		<ul>
			<c:forEach items="${allLibraries}" var="l">
				<li>${l.getName() }</li>
			</c:forEach>
		</ul>

		<form:form action="/libraries" modelAttribute="lib">
			<form:errors path="*" />

			<p>
				<form:label path="name">name:</form:label>
				<form:input path="name" />
			</p>

			<button>create lib</button>

		</form:form>
	</div>
</body>
</html>