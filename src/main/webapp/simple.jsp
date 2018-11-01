<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form id="search-form" action="seacher/seacherInfo" method="post">
		<div class="input-search-box">
			<input type="search" id="search" class="input-search-input"
				name="keyWord" placeholder="请输入搜索的内容">
			<button type="submit" class="input-search-btn">
				<i class="glyphicon glyphicon-search"></i> 搜索
			</button>
		</div>
	</form>

</body>
</html>