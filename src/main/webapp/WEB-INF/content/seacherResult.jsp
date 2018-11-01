<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<!DOCTYPE html>
<html>
<head>
<base
	href="${pageContext.request.scheme }://${pageContext.request.serverName }:${pageContext.request.serverPort }${pageContext.request.contextPath}/">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="resources/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="resources/css/index2.css" />
<link rel="stylesheet" type="text/css" href="resources/css/index.css" />
<link rel="stylesheet" type="text/css"
	href="resources/css/bootstrap-theme.min.css" />
<script src="resources/js/jquery.min.js" type="text/javascript"
	charset="utf-8"></script>
<script src="resources/js/bootstrap.min.js" type="text/javascript"
	charset="utf-8"></script>
</head>
<style>
#auto-id-t3f8vT6PWPytVvC0 {
	height: 39px;
	border: 1px solid #ccc;
	border-top-width: 1px;
	border-right-width: 1px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-width: 0 1px;
	background-position: 0 0;
	background-repeat: repeat-x;
}
</style>
<script>
/* 有时候不进入 sumbimit里 就 加入 $（function */
$(function(){
	$("#search-form").submit(function(event) {
		var content = $("#search").val();
		if (!content) {  //为空不查询
			return false;
		} 
	});
})

</script>
<body>
	<%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div class="g-wrap n-srch">
		<div class="row" style="margin-left: 350px">
			<div class="col-md-9">
				<div class="search-form-box">
					<form id="search-form" action="seacher/seacherInfo" method="post">
						<div class="input-search-box">
							<input type="search" id="search" class="input-search-input"
								name="keyWord" value="${keyWord}" placeholder="搜索">
							<button type="submit" class="input-search-btn">搜索</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div id="m-search" style="margin-left: 200px;">
			<div class="snote s-fc4 ztag">
				搜索“${keyWord}”，找到 <em class="s-fc6">${size}</em> 首单曲
			</div>
			<div class="panel-body" style="width: 900px; height: 800px">
				<table class="m-table ">
					<thead>
						<tr>
							<th class="first w1">
								<div class="wp">&nbsp;</div>
							</th>
							<th>
								<div class="wp af0"></div>
							</th>
							<th class="w2">
								<div class="wp af1"></div>
							</th>
							<th class="w3">
								<div class="wp af2"></div>
							</th>
							<th class="w4">
								<div class="wp af3"></div>
							</th>
							<th class="w4">
								<div class="wp">标签</div>
							</th>
						</tr>
					</thead>
					<!-- 音乐 -->
					<tbody>
						<c:forEach items="${resultList}" var="music" varStatus="status">
							<tr id="3688441536570832328" class="even ">
								<td class="left">
									<div class="hd ">
										<span data-res-id="368844" data-res-type="18"
											data-res-action="play" data-res-from="13"
											data-res-data="2144082923" class="ply ">&nbsp;</span><span
											class="num">${status.index+1 }</span>
									</div>
								</td>
								<td class="">
									<div class="f-cb">
										<div class="tt">
											<div class="ttc">
												<span class="txt"><a
													href="${pageContext.request.contextPath}/music/song?musicId=${music.musicId}">
														<b title="${music.musicName}">${music.musicName}</b>
												</a></span>
											</div>
										</div>
									</div>
								</td>
								<td class="s-fc3"><span>${music.musicTime}</span>
									<div class="opt hshow"></div></td>
								<td class="">
									<div class="text" title="${music.singer.singerName}">
										<span title="${music.singer.singerName}"><a
											href="${pageContext.request.contextPath}/singer/findSinger?singerId=${music.singer.singerId}"
											hidefocus="true"> ${music.singer.singerName}</a></span>
									</div>
								</td>
								<td class="">
									<div class="text">
										<a
											href="${pageContext.request.contextPath}/album/albumInfo?albumId=${music.album.albumId}"
											title="${music.album.albumName}">
											${music.album.albumName} </a>
									</div>
								</td>
								<td class="">
									<div class="text">
										<a href="" title="${music.musicType}"> ${music.musicType}
										</a>
									</div>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
			<div id="zhuanji"
				style="display: none; margin-left: 50px; width: 550px; height: 250px; position: relative;">
				<table class="m-table ">
					<thead>
						<tr>
							<th class="first w1">
								<div class="wp"></div>
							</th>
							<th>
								<div class="wp">专辑名</div>
							</th>
							<th class="w2">
								<div class="wp">出版公司</div>
							</th>
						</tr>
					</thead>
					<!-- 音乐 -->
					<tbody>
						<c:forEach items="${albumList}" var="album" varStatus="status">
							<tr id="3688441536570832328" class="even ">
								<td class="left">
									<div class="hd ">
										<span data-res-id="368844" data-res-type="18"
											data-res-action="play" data-res-from="13"
											data-res-data="2144082923" class="ply ">&nbsp;</span><span
											class="num">${status.index+1 }</span>
									</div>
								</td>
								<td class="">
									<div class="text">
										<a
											href="${pageContext.request.contextPath}/album/albumInfo?albumId=${album.albumId}"
											title="${album.albumName} "> 《${album.albumName}》</a>
									</div>
								</td>
								<td class="">
									<div class="text" title="${album.company}">
										<span title="${album.company}"><a hidefocus="true">
												${album.company}</a></span>
									</div>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div></div>

</body>
</html>