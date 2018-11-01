<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resources/css/upload.css" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js"
	charset="utf-8"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"
	type="text/javascript" charset="utf-8"></script>
<title>上传</title>
</head>
<body>
	<%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div class="container content-box">
		<div class="row">
			<div class="col-md-10">
				<div class="panel panel-default">
					<div class="panel-heading"></div>
					<div class="panel-body">
						<form class="form-horizontal" id="music-upload-form"
							action="${pageContext.request.contextPath}/music/music-upload"
							method="post" enctype="multipart/form-data">
							<div class="form-group" style="margin-left: 200px">
								<div class="avatar_select">
									<label><span id="filets">选择MP3</span></label> <input
										id="avatar_image" name="file" type="file" />
								</div>
							</div>
							<div class="form-group">
								<label for="inputDocName" class="col-sm-2 control-label">音乐名称</label>
								<div class="col-sm-8">
									<input id="musicName" type="text" class="form-control"
										id="inputDocName" name="musicName" placeholder="musicName"
										value="">
								</div>
							</div>
							<div class="form-group">
								<label for="inputDocName" class="col-sm-2 control-label">歌手</label>
								<div class="col-sm-8">
									<input id="singerName" type="text" class="form-control"
										id="inputDocName" name="singerName" placeholder="singerName"
										value="">
								</div>
							</div>
							<div class="form-group">
								<label for="inputDocName" class="col-sm-2 control-label">歌手照片</label>
								<div class="col-sm-8">
									<input id="singerImgFile" type="file" class="form-control"
										id="inputDocName" name="singerImgFile"
										placeholder="singerImgFile" value="">
								</div>
							</div>
							<div class="form-group">
								<label for="inputDocName" class="col-sm-2 control-label">专辑</label>
								<div class="col-sm-8">
									<input id="albumName" type="text" class="form-control"
										id="inputDocName" name="albumName" placeholder="albumName"
										value="">
								</div>
							</div>

							<div class="form-group">
								<label for="inputDocName" class="col-sm-2 control-label">歌曲标签</label>
								<div class="col-sm-8">
									<input id="musicType" type="text" class="form-control"
										id="inputDocName" name="musicType" placeholder="musicType"
										value="">
								</div>
							</div>


							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="submit" class="btn btn-default">提交</button>
								</div>
							</div>
							<div class="form-group">
								<span id="ts" style="margin-left: 100px; font-size: 20px"></span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>