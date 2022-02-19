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
<link rel="stylesheet" type="text/css" href="/css/style.css">

<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h1>all books!</h1>
		<h3>User: ${thisUser.getUserName() }</h3>
		<h4>books this author wrote: ${thisUser.getBooks().size()}</h4>
		<p>
			<a href="/">home</a> | 
			<a href="/books/new">new book</a> | 
			<a href="/library/new">new library</a>
		</p>
		<%-- ${ allBooks} --%>
		<hr />

		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<!-- <th>Description</th> -->
					<th>Language</th>
					<th>Pages</th>
					<th>Library</th>
					<th>add/remove</th>
					<th>Authors</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allBooks }" var="b">
					<tr>
						<td>${b.id }</td>
						<td><a href="/books/${b.id}"> ${b.title } </a></td>
						<%-- <td>${b.description }</td> --%>
						<td>${b.language }</td>
						<td>${b.getNumberOfPages() }</td>
						<td>${b.getLibrary().getName() } - ${b.getLibrary().books.size() }</td>
						
						
						
						
						<td> 
							<c:if test="${b.authors.contains(thisUser) == false}">
								<a href="/add/${b.id}">add to book</a> 
							</c:if>
							<c:if test="${b.authors.contains(thisUser)}"> 
								<a href="/remove/${b.id }">remove</a>
							</c:if>
							
						</td>
						<td>
							<c:forEach items="${b.getAuthors() }" var="a">
								<li> ${a.userName }</li>
							</c:forEach>
						</td>
					
						
						<td>
							<!-- EDIT --> 
							<a href="/books/${b.id}/edit">EDIT</a> 
							
							<!-- DELETE -->
							<form action="/books/${b.id}" method="post">
								<input type="hidden" name="_method" value="delete"> 
								<input class="btn-link" type="submit" value="Delete">
							</form>
						</td>
					</tr>

				</c:forEach>
				<!-- loop over all the books to show the details as in the wireframe! -->
			</tbody>
		</table>
	</div>
</body>
</html>