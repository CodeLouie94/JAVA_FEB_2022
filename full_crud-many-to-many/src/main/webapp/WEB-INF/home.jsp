<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h1>welcome: ${thisUser.getUserName()} with id: ${thisUser.getId()} </h1>
		<a href="/logout">logout</a>
		<hr />
		<p>
			<a href="/books/new">create a book</a>
		</p>
		<p>
			<a href="/library/new">create a lib</a>
		</p>
		<p>
			<a href="/books">show all books</a>
		</p>
	</div>
</body>
</html>