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
	
	<h3>in getscrappostbyId.jsp</h3>
	<h5>Hello , ${sessionScope.user_info.fullname} </h5>
		<h5 >Scrap Post Details : ${requestScope.getScrapPostById.scrappost.id}</h5>
	<table style="background-color: lightgrey; margin: auto">
		<caption >Scrap Post Details under ID : ${param.scrap_id}</caption>
	
<c:forEach var="scrappost" items="${requestScope.getScrapPostById}">    
		<tr value="${scrappost.id}">
				<td>${scrappost.user.fullname }</td>
					<td>${scrappost.uploadingDate}</td>
					<td>${scrappost.city}</td>
					<td>${scrappost.weight}</td>
					<td>${scrappost.materialType}</td>
					<td>${scrappost.scrapImage}</td>
			<td><a href="<spring:url value='/user/getScrapPostById?scrap_id=${scrappost.id}'/>">${scrappost.city}</a></td>
		</tr>
		
	
	</c:forEach>
	</table>
	


</body>
</html>