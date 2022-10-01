<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<c:set var="contextPath" value="${pageContext.request.contextPath}" />

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">

<title>Scrap Treading System Create an account</title>

<link href="${contextPath}/resources/css/bootstrap.min.css"
	rel="stylesheet">
<link href="${contextPath}/resources/css/common.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
	<h3>in addUser.jsp</h3>
	<div class="container">

		<form:form method="POST" modelAttribute="user" class="form-signin">
			<h2 class="form-signin-heading">Create your account</h2>
			
			<spring:bind path="fullname">
				<div class="form-group ${status.error ? 'has-error' : ''}">
					<form:input type="fullname" path="fullname" class="form-control"
						placeholder="fullname" autofocus="true"></form:input>
					<form:errors path="fullname"></form:errors>
				</div>
			</spring:bind>
			
			<spring:bind path="email">
				<div class="form-group ${status.error ? 'has-error' : ''}">
					<form:input type="email" path="email" class="form-control"
						placeholder="email"></form:input>
					<form:errors path="email"></form:errors>
				</div>
			</spring:bind>
			
			<spring:bind path="contactNo">
				<div class="form-group ${status.error ? 'has-error' : ''}">
					<form:input type="contactNo" path="contactNo" class="form-control"
						placeholder="contactNo"></form:input>
					<form:errors path="contactNo"></form:errors>
				</div>
			</spring:bind>
			
			<spring:bind path="address">
				<div class="form-group ${status.error ? 'has-error' : ''}">
					<form:input type="address" path="address" class="form-control"
						placeholder="address"></form:input>
					<form:errors path="address"></form:errors>
				</div>
			</spring:bind>
					
			<spring:bind path="username">
				<div class="form-group ${status.error ? 'has-error' : ''}">
					<form:input type="text" path="username" class="form-control"
						placeholder="Username" ></form:input>
					<form:errors path="username"></form:errors>
				</div>
			</spring:bind>

			<spring:bind path="password">
				<div class="form-group ${status.error ? 'has-error' : ''}">
					<form:input type="password" path="password" class="form-control"
						placeholder="Password"></form:input>
					<form:errors path="password"></form:errors>
				</div>
			</spring:bind>

			

			<button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
		</form:form>

	</div>
	<!-- /container -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="${contextPath}/resources/js/bootstrap.min.js"></script>
</body>
</html>
