<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Scrap Treading System</title>
</head>
<body>
	<h3>in addBid.jsp</h3>
	<h5>Hello , ${sessionScope.user_info.fullname} </h5>
<table style="background-color: lightgrey; margin: auto">
		<caption>Tutorials Under Topic ID : ${param.scrap_id}</caption>
		<c:forEach var="scrappost" items="${requestScope.getScrapPostById}">
		<h3>in addBid.jsp</h3>
		<tr>
			<td><a href="<spring:url value='/user/getScrapPostById?getScrapPostById=${scrappost.id}'/>">${scrappost.user.fullname}</a></td>
			<td><a href="<spring:url value='/user/getScrapPostById?getScrapPostById=${scrappost.id}'/>">${scrappost.uploadingDate}</a></td>
			<td><a href="<spring:url value='/user/getScrapPostById?getScrapPostById=${scrappost.id}'/>">${scrappost.city}</a></td>
			<td><a href="<spring:url value='/user/getScrapPostById?getScrapPostById=${scrappost.id}'/>">${scrappost.weight}</a></td>
			<td><a href="<spring:url value='/user/getScrapPostById?getScrapPostById=${scrappost.id}'/>">${scrappost.materialType}</a></td>
			<td><a href="<spring:url value='/user/getScrapPostById?getScrapPostById=${scrappost.id}'/>">${scrappost.scrapImage}</a></td>
			
		</tr>
		</c:forEach>
	</table>


</body>
</html>