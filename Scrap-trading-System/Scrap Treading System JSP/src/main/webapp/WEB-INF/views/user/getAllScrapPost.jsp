<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scrap Treading System</title>

<style>
table, th, td {
	border: 1px solid black;
}

logout {
	align: Right;
}
</style>
</head>
<body>
	<h3>Hello , ${sessionScope.user_info.fullname} , Login Successful !!!</h3>
	<a class="logout" href="<spring:url value='/user/logout'/>" >Logout</a>
	<h3>in getAllScrapPost.jsp</h3>
	<table
		style="background-color: white; margin: auto; border-width: 2 cm">
		<!--   <caption>Tutorials Under Topic ID : ${param.topicId}</caption>   -->

		<thead>
			<tr>
				<th>Uploading Date</th>
				<th>City</th>
				<th>Total weight</th>
				<th>Types Of Material</th>
				<th>Images</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="scrappost" items="${requestScope.allscrappost}">
				<tr value="${scrappost.id}">
				<td>${scrappost.user.fullname }</td>
					<td>${scrappost.uploadingDate}</td>
					<td>${scrappost.city}</td>
					<td>${scrappost.weight}</td>
					<td>${scrappost.materialType}</td>
					<td>${scrappost.scrapImage}</td>
					<td><a href="<spring:url value='/user/addBid'/>">Bid</a></td>
					<td><a href="<spring:url value='/user/getScrapPostById?scrap_id=${scrappost.id}'/>">Bid getscarppostbyid</a></td> 

				</tr>


			</c:forEach>
		</tbody>
	</table>




	<h3>
		<a href="<spring:url value='/user/addBid'/>">Bid</a> 
		<a href="<spring:url value='/user/logout'/>">Logout</a>

	</h3>


</body>
</html>