<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<title></title>
<meta charset="utf-8">
<link
	href="${pageContext.request.contextPath}/resources/css/index/pt_frame_48ecf1d8c6783f05a62f1b052ee04805.css"
	type="text/css" rel="stylesheet">
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
<body id="page1">
	<%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div class="i_page">
		<div class="i_left">
			<h2 class="i_title">云音乐特色榜</h2>
			<ul  style="height: 800px;">
				<li class="i_li">
					<div class="i_pp">
						<a  href="${pageContext.request.contextPath}/music/musicClickBillboard?type=1"
							class="i_zz"> <img    style="width: 95px;height: 85px"
							src="${pageContext.request.contextPath}/resources/img/c1.png"
							  class="i_im">
						</a>
						<div class="i_ll">
							<a
								href="${pageContext.request.contextPath}/music/musicClickBillboard?type=1"
								class="i_mm">云音乐飙升榜</a><br>
						</div>

					</div>
				</li>
				<li class="i_li">
					<div class="i_pp">
						<a
							href="${pageContext.request.contextPath}/music/musicClickBillboard?type=2"
							class="i_zz"> <img  style="width: 95px;height: 85px"
							src="${pageContext.request.contextPath}/resources/img/c2.png"
							class="i_im" />
						</a>
						<div class="i_ll">
							<a
								href="${pageContext.request.contextPath}/music/musicClickBillboard?type=2"
								class="i_mm">云音乐新歌榜</a><br>
						</div>
					</div>
				</li>
				<li class="i_li">
					<div class="i_pp">
						<a
							href="${pageContext.request.contextPath}/music/musicClickBillboard?type=3"
							class="i_zz"> <img  style="width: 95px;height: 85px"
							src="${pageContext.request.contextPath}/resources/img/c3.png"
							class="i_im">
						</a>
						<div class="i_ll">
							<a  href="${pageContext.request.contextPath}/music/musicClickBillboard?type=3"
								class="i_mm">云音乐好评榜</a><br>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="i_right">
			<div class="i_cnt">
				<c:choose>
					<c:when test="${type eq  1}">
						<a class="i_d"> <img
							src="${pageContext.request.contextPath}/resources/img/c1.png">
						</a>
						<h2 class="i_t">云音乐飙升榜</h2>
					</c:when>
					<c:when test="${type eq  2}">
						<a class="i_d"> <img
							src="${pageContext.request.contextPath}/resources/img/c2.png">
						</a>
						<h2 class="i_t">云音乐新歌榜</h2>
					</c:when>
					<c:otherwise>
						<a      class="i_d"> <img
							src="${pageContext.request.contextPath}/resources/img/c3.png">
						</a>
						<h2 class="i_t">云音乐好评榜</h2>
					</c:otherwise>
				</c:choose>
			</div>

			<div class="i_bottom">
				<div class="i_w">
					<span class="i_qu">歌曲列表</span> <span class="i_qw">${size}</span> 
				</div>
				
				<div class="i_tx">
					<div class="i_kon"></div>
					<div class="i_txq">
						<span class="i_txx">歌手</span>
					</div>
					<div class="i_txw">
						<span class="i_txx">时长</span>
					</div>
					<div class="i_txe">
						<span class="i_txx">标题</span>
					</div>
				</div>
				<c:forEach  items="${musicList}" var="music" varStatus="status">  
				   <div class="i_list">
                        <div class="i_fi"><span class="i_nm">${status.index+1 }</span><span class="i_mn">new</span></div>
                        <a  href="${pageContext.request.contextPath}/singer/findSinger?singerId=${music.singer.singerId}"  class="i_se"><span class="i_zx">${music.singer.singerName}</span></a>
                        <div class="i_th"><span class="i_zx">${music.musicTime}</span></div>
                        <div class="i_fo">
                            <div class="i_tt">
                                <div class="i_tn">
                                    <a href="${pageContext.request.contextPath}/music/song?musicId=${music.musicId}" class="t_de">${music.musicName}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </c:forEach>
			</div>
		</div>
  	 <footer>
		   <div class="padding">
			<div class="main">
				<div class="wrapper">
					<div class="fleft footer-text">
						<span>关于网易</span> &copy; 2018 <strong>服务条款<a
							rel="nofollow" class="link" target="_blank"
							href="http://yihaowangluo.taobao.com/">网站导航</a></strong>
						<!-- {%FOOTER_LINK} -->
					</div>
					<ul class="list-services">
						<li>Link to Us:</li>
						<li><a class="tooltips" title="facebook" href="#"></a></li>
						<li class="item-1"><a class="tooltips" title="twitter"
							href="#"></a></li>
						<li class="item-2"><a class="tooltips" title="linkedin"
							href="#"></a></li>
					</ul>
				</div>
			</div>
		</div> 
		</footer> 
		</div>
</body>
</html>
