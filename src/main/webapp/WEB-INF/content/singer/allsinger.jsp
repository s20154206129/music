<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta name="baidu-site-verification" content="cNhJHKEzsD">
<meta property="qc:admins" content="27354635321361636375">
<link rel="canonical"
	href="https://music.163.com/discover/artist/cat?id=1001">
<meta name="applicable-device" content="pc">
<title>华语男歌手 - 歌手 - 网易云音乐</title>
<meta name="keywords" content="歌手，网易云音乐，推荐歌手，入驻歌手">
<meta name="description"
	content="网易云音乐提供歌手的热门歌曲，全部专辑，演唱会，MV，图片，资料，相似歌手。入驻歌手更会为粉丝创建歌单，分享好音乐。">
<meta property="og:title" content="华语男歌手 - 歌手 - 网易云音乐">
<!-- <base href="//music.163.com/" target="_top"> -->
<link rel="shortcut icon"
	href="//s1.music.126.net/style/favicon.ico?v20180823">
<link
	href="${pageContext.request.contextPath}/resources/css/chinasinger/core_e84fa67f8f877217a0276f9d4867158c.css"
	type="text/css" rel="stylesheet" />
<link
	href="${pageContext.request.contextPath}/resources/css/chinasinger/pt_frame_c333e1c3d1336dfbaaf6a0bd81c379ea.css"
	type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resources/css/chinasinger/style.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">
<script
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js"
	type="text/javascript" charset="utf-8"></script>
</head>
<body >
	<script>
		function guanzhusinger(singerId) {
			$
					.post(
							"${pageContext.request.contextPath}/json/addSingersToMyCare",
							{
								"singerId" : singerId
							}, function(json) {
                                    alert(json.info);
							});
		       }
	</script>
    <%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div class="g-bd2 f-cb">
		<div class="g-sd2">
			<div class="g-wrap4 n-sgernav" id="singer-cat-nav">
				<h2 class="tit">推荐</h2>
				<ul class="nav f-cb">
					<li><a class="cat-flag" data-cat="5001">入驻歌手</a></li>
				</ul>
			</div>
		</div>
		<div class="g-mn2">
			<div class="g-mn2c">
				<div class="g-wrap">
					<div class="u-title f-cb">
						<h3>
							<span class="f-ff2 d-flag">入驻歌手</span>
						</h3>
					</div>
					<script type="text/javascript"
						src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
					<script type="text/javascript"
						src="${pageContext.request.contextPath}/resources/js/jquery-nav.js"></script>
					<script type="text/javascript">
						$('#f-nav').tooltip({
							// default: 3, 
							type : 'scaleChange'
						});
					</script>
					<div class="m-sgerlist">
						<ul class="m-cvrlst m-cvrlst-5 f-cb" id="m-artist-box">
							<c:forEach items="${singersList}" var="singer">
								<li style="margin-top: 10px">
									<div class="u-cover u-cover-5">
										<img
											src="${pageContext.request.contextPath}/resources/img/${singer.singerImg}">
										<a title="薛之谦的音乐" href="" class="msk"></a>
									</div>
									<p>
										<a
											href="${pageContext.request.contextPath}/singer/findSinger?singerId=${singer.singerId}"
											class="nm nm-icn f-thide s-fc0" title="${singer.singerName}">${singer.singerName}</a>
										<c:choose>
											<c:when test="${empty user}">
												<a onclick="top.login();return false;" >
													<span
													class="glyphicon glyphicon-plus">关注</span>
													</a>
											</c:when>
											<c:otherwise>
												<a><i class="u-icn u-icn-5"></i><span
													onclick="guanzhusinger(${singer.singerId})"
													class="glyphicon glyphicon-plus">关注</span> </a>
											</c:otherwise>
										</c:choose>
									</p>

								</li>
							</c:forEach>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="g-ft ">
		<div class="m-ft">
			<div class="wrap f-cb">
				<div class="copy">
					<p class="link">
						<a href="//music.163.com/about" target="_blank" class="item s-fc4">关于网易</a><span
							class="line">|</span> <a href="//help.mail.163.com/service.html"
							target="_blank" class="item s-fc4">客户服务</a><span class="line">|</span>
						<a href="//music.163.com/html/web2/service.html" target="_blank"
							class="item s-fc4">服务条款</a><span class="line">|</span> <a
							href="//sitemap.163.com/" target="_blank" class="item s-fc4">网站导航</a><span
							class="line">|</span> <a id="g_feedback" href="#" class="s-fc4"
							onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
					</p>
					<p class="right s-fc3">
						<span class="sep span">网易公司版权所有©1997-2018</span><span class="span">杭州乐读科技有限公司运营：</span><a
							href="http://p1.music.126.net/MkOOdJqWZdBx05Ias2W3UA==/109951163298654917.png"
							target="_blank" class="alink s-fc3">浙网文[2018]3506-263号</a>
					</p>
					<p class="contact s-fc3">
						<span class="sep span">违法和不良信息举报电话：0571-89853516</span> <span
							class="span">举报邮箱：</span><a class="alink"
							href="mailto:cloudmusicservice@163.com">cloudmusicservice@163.com</a>
					</p>
				</div>
				<ul class="enter f-fr">
					<li class="unit"><a class="logo logonew logo-musician f-tid"
						href="//music.163.com/recruit" target="_blank"></a> <span
						class="tt tt-musician"></span></li>
					<li class="unit"><a class="logo logonew logo-topic f-tid"
						href="//music.163.com/topic/recruit" target="_blank"></a> <span
						class="tt tt-topic"></span></li>
					<li class="unit"><a class="logo logonew logo-midea f-tid"
						href="//music.163.com/topic/selfmedia" target="_blank"></a> <span
						class="tt tt-midea"></span></li>
					<li class="unit"><a class="logo logonew logo-reward f-tid"
						href="//music.163.com/web/reward" target="_blank"></a> <span
						class="tt tt-reward"></span></li>
					<li class="unit"><a class="logo logonew logo-cash f-tid"
						href="//music.163.com/uservideo#/plan" target="_blank"></a> <span
						class="tt tt-cash"></span></li>
				</ul>
			</div>
		</div>
	</div>
	<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true"
		style="display: none;">回到顶部</a>
</body>
</html>