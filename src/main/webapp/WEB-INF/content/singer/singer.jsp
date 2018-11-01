<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<title></title>
<link
	href="${pageContext.request.contextPath}/resources/css/index/pt_frame_48ecf1d8c6783f05a62f1b052ee04805.css"
	type="text/css" rel="stylesheet">
<meta charset="utf-8">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/reset.css"
	type="text/css" media="screen">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/style.css"
	type="text/css" media="screen">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/layout.css"
	type="text/css" media="screen">
<script
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js"
	type="text/javascript" charset="utf-8"></script>
</head>
<script>
	function zuoping() {
	
		$("#zuoping").css("display", "block");
		$("#zhuanji").css("display", "none");
		$("#introduce").css("display", "none");
	}
	function albums() {
		$("#zhuanji").css("display", "block");
		$("#zuoping").css("display", "none");
		$("#introduce").css("display", "none");
	}
	function singerIntroduce() {
		$("#zhuanji").css("display", "none");
		$("#zuoping").css("display", "none");
		$("#introduce").css("display", "block");
	}
</script>
<body>
	<%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div class="s_page">
		<div class="s_left">
			<div class="s_l_top">
				<span class="s_name">${singer.singerName}</span>
				<div style="position: relative; margin-top: 50px">
					<img style="width: 600px; height: 300px"
						src="${pageContext.request.contextPath}/resources/img/${singer.singerImg}"
						alt="">
				</div>
			</div>
			<div class="s_l_mid">
				<ul class="s_l_u">
					<li class="s_l_li"><a onclick="zuoping()" class="s_l_a"><em>热门作品</em></a></li>
					<li class="s_l_li"><a onclick="albums()" class="s_l_a"><em>所有专辑</em></a></li>
					<li class="s_l_li"><a onclick="singerIntroduce()"
						class="s_l_a"><em>艺人介绍</em></a></li>
				</ul>
			</div>
			<div id="introduce"
				style="margin-left: 50px; width: 550px; height: 250px; position: relative;">
				${singer.singerIntroduce}</div>
			<div id="zuoping"
				style="display: none; margin-left: 50px; width: 550px; height: 250px; position: relative;">
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
						</tr>
					</thead>
					
					<!-- 音乐 -->
					<tbody>
						<c:forEach items="${musicList}"   var="music">
							<tr id="3688441536570832328" class="even ">
								<td class="left">
									<div class="hd ">
										<span data-res-id="368844" data-res-type="18"
											data-res-action="play" data-res-from="13"
											data-res-data="2144082923" class="ply ">&nbsp;</span><span
											class="num">1</span>
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
									<div class="opt hshow">
									</div></td>
								<td class="">
									<div class="text" title="${music.singer.singerName}">
										<span title="${music.singer.singerName}"><a
											hidefocus="true"> ${music.singer.singerName}</a></span>
									</div>
								</td>
								<td class="">
									<div class="text">
										<a
											href="${pageContext.request.contextPath}/album/albumInfo?albumId=${music.album.albumId}"
											title="燃烧吧！小宇宙"> ${music.album.albumName} </a>
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
						<c:forEach items="${albumList}"   var="album">
							<tr id="3688441536570832328" class="even ">
								<td class="left">
									<div class="hd ">
										<span data-res-id="368844" data-res-type="18"
											data-res-action="play" data-res-from="13"
											data-res-data="2144082923" class="ply ">&nbsp;</span><span
											class="num">1</span>
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
										<span title="${album.company}"><a
											hidefocus="true"> ${album.company}</a></span>
									</div>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
		
		<!--热门歌手  -->
		<div class="n-singer">
				<h3 class="v-hd3">
					<span class="f-fl">热门歌手</span> <a
						href="${pageContext.request.contextPath}/singer/findAllSingers?currentPage=1"
						class="more s-fc3">查看全部 &gt;</a>
				</h3>
				<ul class="n-enter f-cb" id="singer-list">
					<c:forEach items="${hotSingerList}" var="singer">
						<li><a href="${pageContext.request.contextPath}/singer/findSinger?singerId=${singer.singerId}"  class="itm f-tdn">
								<div class="head">
									<img class="j-img"
										src="${pageContext.request.contextPath}/resources/img/${singer.singerImg}">
								</div>
								<div class="ifo">
									<h4>
										<span class="nm f-fs1 f-ib f-thide">${singer.singerName}</span>
									</h4>
									<p class="f-thide s-fc3">${singer.company}</p>
								</div>
						</a></li>
					</c:forEach>
				</ul>
			</div>

	</div>
	<div class="g-ft ">
<div class="m-ft">
<div class="wrap f-cb">
<div class="copy">
<p class="link">
<a href="//music.163.com/about" target="_blank" class="item s-fc4">关于网易</a><span class="line">|</span>
<a href="//help.mail.163.com/service.html" target="_blank" class="item s-fc4">客户服务</a><span class="line">|</span>
<a href="//music.163.com/html/web2/service.html" target="_blank" class="item s-fc4">服务条款</a><span class="line">|</span>
<a href="//sitemap.163.com/" target="_blank" class="item s-fc4">网站导航</a><span class="line">|</span>
<a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
</p>
<p class="right s-fc3">
<span class="sep span">网易公司版权所有©1997-2018</span><span class="span">杭州乐读科技有限公司运营：</span><a href="http://p1.music.126.net/MkOOdJqWZdBx05Ias2W3UA==/109951163298654917.png" target="_blank" class="alink s-fc3">浙网文[2018]3506-263号</a>
</p>
<p class="contact s-fc3">
<span class="sep span">违法和不良信息举报电话：0571-89853516</span>
<span class="span">举报邮箱：</span><a class="alink" href="mailto:cloudmusicservice@163.com">cloudmusicservice@163.com</a>
</p>
</div>
<ul class="enter f-fr">
<li class="unit">
<a class="logo logonew logo-musician f-tid" href="//music.163.com/recruit" target="_blank"></a>
<span class="tt tt-musician"></span>
</li>
<li class="unit">
<a class="logo logonew logo-topic f-tid" href="//music.163.com/topic/recruit" target="_blank"></a>
<span class="tt tt-topic"></span>
</li>
<li class="unit">
<a class="logo logonew logo-midea f-tid" href="//music.163.com/topic/selfmedia" target="_blank"></a>
<span class="tt tt-midea"></span>
</li>
<li class="unit">
<a class="logo logonew logo-reward f-tid" href="//music.163.com/web/reward" target="_blank"></a>
<span class="tt tt-reward"></span>
</li>
<li class="unit">
<a class="logo logonew logo-cash f-tid" href="//music.163.com/uservideo#/plan" target="_blank"></a>
<span class="tt tt-cash"></span>
</li>
</ul>
</div>
</div>
</div>
</body>
</html>
