<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	crossorigin="anonymous">
<!-- change to match your file/naming structure -->
<link rel="stylesheet" href="/css/style.css">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h1>New Book</h1>

		<ul>
			<c:forEach items="${allBooks}" var="b">
				<li>${b.getTitle() }</li>
			</c:forEach>
		</ul>
		<hr />

		<!-- modelAttribute is the EMPTY object we are going to fill -->
		<!-- we passed it in from the controller with @ModelAttribute -->
		<form:form action="/books" method="post" modelAttribute="unicornBook">
			<p>
				<form:label path="title">Title</form:label>
				<form:errors path="title" />
				<form:input path="title" />
			</p>
			<p>
				<form:label path="description">Description</form:label>
				<form:errors path="description" />
				<form:textarea path="description" />
			</p>
			<p>
				<form:label path="language">Language</form:label>
				<form:errors path="language" />
				<form:input path="language" />
			</p>
			<p>
				<form:label path="numberOfPages">Pages</form:label>
				<form:errors path="numberOfPages" />
				<form:input type="number" path="numberOfPages" />
			</p>
<%-- 				<input type="hidden" name="creator" value="${user_id} }" />
 --%>
			<%-- ${allLibs} --%>
			<form:select path="library">
				<option disabled selected value="">select a library</option>
				<c:forEach items="${allLibs}" var="l">

					<form:option value="${l.id}">
							${l.getName() }
						</form:option>
				</c:forEach>

			</form:select>

			<button>click me to submit</button>
			<!-- <input type="submit" value="create book" /> -->
		</form:form>

	</div>
</body>
</html>