<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h5>Topic Id : ${sessionScope.selected_topic_id }</h5>
<h5> Topic Name : ${sessionScope.selected_topic_name}</h5>
<h5> List of Tutorial Names : ${requestScope.tut_list}</h5>
</body>
</html>