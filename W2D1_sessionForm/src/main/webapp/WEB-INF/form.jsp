<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">

<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<p>
		name: ${name }
	</p>
	<h3>Login</h3>
	<form action='/processForm' method='POST'>
	<h3>${ageError }</h3>
		<p>
			<label>Email:</label> 
			<input type="text" name='email' value="${name }">
		</p>

		<p>
			<label>Password:</label> 
			<input type='password' name='password'>
		</p>
		<p>
			age: 
			<input type="number" name="age" min="1" max="1000"/>
		</p>
		<button>submit</button>
	</form>
</body>
</html>