<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h1>new book</h1>
		<hr />

		<%-- ${allBooks } --%>
		<%-- ${allLibs } --%>

		<c:forEach items="${allBooks }" var="b">
			<li>${b.getTitle() } - ${b.library.name } - ${b.getLibrary().getBooks().size() }</li>
		</c:forEach>

		<hr />
		<form:form action="/books" method="post" modelAttribute="book">
			<p>
				<form:label path="title">Title</form:label>
				<form:errors path="title" />
				<form:input path="title" />
			</p>
			<!-- <input type="text" placeholder="hello" name="hello"> -->
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
			<form:select path="library">
				<c:forEach items="${allLibs }" var="lib">
					<form:option value="${lib }">
						${lib.getName() }
				
				</form:option>
				</c:forEach>
			</form:select>


			<input type="submit" value="Submit" />
		</form:form>
<%-- 		<c:out value="${test }"/>
	${test } --%>
	</div>
</body>
</html>