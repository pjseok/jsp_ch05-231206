<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 정보</title>
</head>
<body>
	<% 
		request.setCharacterEncoding("utf-8");
		
		String memberId = request.getParameter("memberid");
		String memberPw = request.getParameter("memberpw");
		String memberName = request.getParameter("membername");
		String memberPhone  = request.getParameter("phone");
		String email = request.getParameter("email");
		
	%>
	<h3>회원가입정보</h3>
	<hr>
	가입하신 아이디 : <%= memberId %> <br><br>
	입력하신 비밀번호 : <%= memberPw %> <br><br>
	회원 이름 : <%= memberName %> <br><br>
	회원 연락처 : <%= memberPhone %> <br><br>
	가입하신 이메일 : <%= email %>
	
</body>
</html>