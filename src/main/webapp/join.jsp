<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/joinCheck.js"></script>
<title>회원 가입</title>
</head>
<body>
	<h3>회원 가입</h3>
	<hr>
	<form action = "joinOk.jsp" method = "post" name="joinForm" onsubmit="return joinCheck()">
		아이디: <input type = "text" name="memberid"><br><br>
		비밀번호: <input type="password" name="memberpw"><br><br>
		이름 : <input type = "text" name ="membername"><br><br>
		전화번호 : <input type="text" name="phone"> -없이 숫자만 입력하세요<br><br>
		이메일 : <input type="email" name="email"><br><br>
		<input type = "submit" value="회원가입">
	</form>
</body>
</html>