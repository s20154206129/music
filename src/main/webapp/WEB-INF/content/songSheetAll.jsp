<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link
	href="${pageContext.request.contextPath}/resources/css/index/pt_frame_48ecf1d8c6783f05a62f1b052ee04805.css"
	type="text/css" rel="stylesheet">
<title>Insert title here</title>
</head>
<body>
	<%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div class="g-bd">
		<div class="g-wrap p-pl f-pr">
			<div class="u-title f-cb">
				<h3>
					<span class="f-ff2 d-flag">全部</span><a href="javascript:;"
						class="u-btn2 u-btn2-1 menu d-flag" id="cateToggleLink"><i>选择分类<em
							class="u-icn u-icn-38"></em></i></a>
				</h3>
				<div class="u-btn f-fr u-btn-hot d-flag">
					<a href="/discover/playlist/?order=hot" class="a1" data-order="hot">热门</a>
					<a href="/discover/playlist/?order=new" class="a2" data-order="new">最新</a>
				</div>
			</div>
			<ul class="m-cvrlst f-cb" id="m-pl-container">
				<c:forEach items="${songSheetList}" var="sheet">
				<li>
					<div class="u-cover u-cover-1">
						<img class="j-flag"
							src="${pageContext.request.contextPath}/resources/img/${sheet.img}">
						<a title="${sheet.title}" href="${pageContext.request.contextPath}/music/detailSongSheet?sid=${sheet.sid}"
							class="msk"></a>
						<div class="bottom">
							<a class="icon-play f-fr" title="播放" href="javascript:;"
								data-res-type="13" data-res-id="2415481866"
								data-res-action="play"></a> <span class="icon-headset"></span> <span
								class="nb">11万</span>
						</div>
					</div>
					<p class="dec">
						<a title="${sheet.title}" href="${pageContext.request.contextPath}/music/detailSongSheet?sid=${sheet.sid}"
							class="tit f-thide s-fc0">${sheet.title}</a>
					</p>
					<%-- <p>
						<span class="s-fc4">by</span> <a title="${sheet.autor}"
							href="#" class="nm nm-icn f-thide s-fc3">${sheet.autor}</a>
					</p> --%>
				</li>
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