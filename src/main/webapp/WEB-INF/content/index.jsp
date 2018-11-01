<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<%@ page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<%-- <link href="${pageContext.request.contextPath}/resources/css/index/core_41f74718ddb0ce6fc4bca341e0b5356e.css" type="text/css" rel="stylesheet">
 --%>
<link
	href="${pageContext.request.contextPath}/resources/css/index/pt_frame_48ecf1d8c6783f05a62f1b052ee04805.css"
	type="text/css" rel="stylesheet">
<link rel="shortcut icon"
	href="//s1.music.126.net/style/favicon.ico?v20180823">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/index/ft-carousel.css" />
<script
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js"
	type="text/javascript" charset="utf-8"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"
	type="text/javascript" charset="utf-8"></script>
<script  type="text/javascript">
	  $(function(){
		  function  addMusic(musicId){
			   alert(musicId);
			   $.post(
						"${pageContext.request.contextPath}/json/addloveMusics",
						{
							"userId" : "${user.userId}",
							"commentContent" : musicId
						},
						function(json) {
						 alert("收藏歌曲成功");
						})
		 
	  }
	  });
	</script>
</head>
<body>

	<div id="g-topbar" class="g-topbar" style="width: 1349px;">
		<div class="m-subnav m-subnav-up f-pr j-tflag f-hide"></div>
		<%@ include file="/WEB-INF/content/public/head.jspf"%>
		<div id="g_nav2" class="m-subnav j-tflag" style="position: relative;">
			<div class="wrap f-pr">
				<ul class="nav">
					<li><a hidefocus="true" data-module="discover" href=""
						class="z-slt"><em>推荐</em></a></li>
					<li><a hidefocus="true" data-module="toplist" href="${pageContext.request.contextPath}/music/musicClickBillboard?type=1" class=""><em>排行榜</em></a></li>
					<li><a hidefocus="true" data-module="playlist" href="${pageContext.request.contextPath}/music/recommentHotMusic1"
						class=""><em>歌单</em></a></li>
					<li><a hidefocus="true" data-module="artist"
						href="${pageContext.request.contextPath}/singer/findAllSingers?currentPage=1"><em>歌手</em></a></li>
					<li><a hidefocus="true" data-module="album" href=""><em>新碟上架${user.userId }</em></a></li>
				
					<c:choose>
						<c:when test="${user.accountState  eq  1}">
							 <li><a hidefocus="true" data-module="upload"
						href="${pageContext.request.contextPath}/music/goUpload"><em>upload</em></a></li>
						</c:when>
						<c:otherwise>
						</c:otherwise>
					</c:choose>
					
				</ul>
			</div>
		</div>
	</div>
	<!-- 轮播 -->
	<div class="n-ban d-flag" id="index-banner"
		style="margin-top: 91px; background-color: black; background-repeat: repeat-x;">
		<div class="wrap">
			<div class="example">
				<div class="ft-carousel" id="carousel_1">
					<ul class="carousel-inner">
						<li class="carousel-item"><img
							src="${pageContext.request.contextPath}/resources/img/index/109951163542533102.jpg" /></li>
						<li class="carousel-item"><img
							src="${pageContext.request.contextPath}/resources/img/index/109951163542788367.png" /></li>
						<li class="carousel-item"><img
							src="${pageContext.request.contextPath}/resources/img/index/a3.jpg" /></li>
						<li class="carousel-item"><img
							src="${pageContext.request.contextPath}/resources/img/index/a4.jpg" /></li>
						<li class="carousel-item"><img
							src="${pageContext.request.contextPath}/resources/img/index/a5.jpg" /></li>
						<li class="carousel-item"><img
							src="${pageContext.request.contextPath}/resources/img/index/a6.jpg" /></li>
					</ul>
				</div>

				<script
					src="${pageContext.request.contextPath}/resources/js/index/jquery.min.js"></script>
				<script
					src="${pageContext.request.contextPath}/resources/js/index/ft-carousel.min.js"></script>
				<script type="text/javascript">
					$("#carousel_1").FtCarousel();
				</script>

			</div>
			<div class="download f-pr">
				<a id="side-download" href="/download" class="btn" hidefocus="true"
					data-res-action="bilog" data-log-action="page"
					data-log-json="{&quot;type&quot;:&quot;downloadapp&quot;,&quot;source&quot;:&quot;banner&quot;}">下载客户端</a>
				<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
				<span class="shadow"></span><span class="shadowr"></span>
			</div>
		</div>
	</div>

	<div id="discover-module" class="g-bd1 f-cb" style="">
		<div class="g-mn1">
			<div class="g-mn1c">
				<div class="g-wrap3">
					<div class="n-rcmd">
						<div class="v-hd2">
							<a href="" class="tit f-ff2 f-tdn">热门推荐</a>
							<div class="tab">
								<a href="" class="s-fc3">华语</a> <span class="line">|</span> <a
									href="" class="s-fc3">流行</a> <span class="line">|</span> <a
									href="" class="s-fc3">摇滚</a> <span class="line">|</span> <a
									href="" class="s-fc3">民谣</a> <span class="line">|</span> <a
									href="" class="s-fc3">电子</a>
							</div>
							<span class="more"><a href="${pageContext.request.contextPath}/music/recommentHotMusic1" class="s-fc3">更多</a><i
								class="cor s-bg s-bg-6">&nbsp;</i></span>
						</div>
						<!-- 歌单 -->
						<ul class="m-cvrlst f-cb">
							<c:forEach items="${songSheetList}" var="sheet">
								<li>
									<div class="u-cover u-cover-1">
										<img
											src="${pageContext.request.contextPath}/resources/img/${sheet.img}">
										<a title="" class="msk" data-res-id="2202539515"
											data-res-type="13" data-res-action="log"
											data-res-data="recommendclick|0|featured|user-playlist"></a>
										<div class="bottom">
											<a class="icon-play f-fr" title="播放" href="javascript:;"
												data-res-type="13" data-res-id="2202539515"
												data-res-action="play"></a> <span class="icon-headset"></span>
											<span class="nb"></span>
										</div>
									</div>
									<p class="dec">
										<a title="" class="tit s-fc0"
											href="${pageContext.request.contextPath}/music/detailSongSheet?sid=${sheet.sid}"
											data-res-id="2202539515" data-res-type="13"
											data-res-action="log"
											data-res-data="recommendclick|0|featured|user-playlist">${sheet.title}
										</a>
									</p>
								</li>
							</c:forEach>
						</ul>
					</div>
					${user.userId }
					<!-- 榜单 -->
					<div class="n-bill">
						<div class="v-hd2">
							<a class="tit f-ff2 f-tdn">榜单</a> <span class="more"><i
								class="cor s-bg s-bg-6">&nbsp;</i></span>
						</div>
						<div class="n-bilst" id="top-flag">
							<dl class="blk ">
								<dt class="top">
									<div class="cver u-cover u-cover-4">
										<img class="j-img"
											src="${pageContext.request.contextPath}/resources/img/c1.png">
										<a class="msk" title="云音乐点击榜"></a>
									</div>
									<div class="tit">
										<a href="" title="云音乐点击榜"><h3 class="f-fs1 f-thide">云音乐点击榜</h3></a>
										<div class="btn">
											<a href="javascript:;" class="s-bg s-bg-9 f-tdn"
												hidefocus="true" title="播放" data-res-type="13"
												data-res-id="19723756" data-res-action="play"
												data-res-from="31" data-res-data="19723756">播放</a> <a
												href="javascript:;" hidefocus="true"
												class="s-bg s-bg-10 f-tdn subscribe-flag "
												data-plid="19723756" title="收藏">收藏</a>
										</div>
									</div>
								</dt>
								<dd>
									<ol>
										<c:forEach items="${musicList}" var="music" varStatus="status">
											<li onmouseover="this.className='z-hvr'"
												onmouseout="this.className=''"><span class="no no-top">${status.index+1}</span>
												<a
												href="${pageContext.request.contextPath}/music/song?musicId=${music.musicId}"
												class="nm s-fc0 f-thide" title="${music.musicName}">${music.musicName}</a>
												<div class="oper">
													<a
														href="${pageContext.request.contextPath}/music/song?musicId=${music.musicId }"
														class="s-bg s-bg-11" title="播放" hidefocus="true"
														data-res-type="18" data-res-id="1306498681"
														data-res-action="play" data-res-from="31"
														data-res-data="19723756"></a> <a href="#"
														class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true"
														data-res-type="18" data-res-id="1306498681"
														data-res-action="addto" data-res-from="31"
														data-res-data="19723756"></a>
													<c:choose>
														<c:when test="${empty user }">
															<a onclick="top.login();return false;"
																class="s-bg s-bg-12" title="收藏" hidefocus="true"
																data-res-level="0" data-res-fee="0" data-res-type="18"
																data-res-id="1306498681" data-res-action="subscribe"></a>
														</c:when>
														<c:otherwise>
															<a
																href="${pageContext.request.contextPath}/json/addloveMusics?userId=${user.userId}&musicId=${music.musicId}"
																class="s-bg s-bg-12" title="收藏" hidefocus="true"
																data-res-level="0" data-res-fee="0" data-res-type="18"
																data-res-id="1306498681" data-res-action="subscribe"></a>
														</c:otherwise>
													</c:choose>
												</div></li>
										</c:forEach>
									</ol>
									<div class="more">
										<a
											href="${pageContext.request.contextPath}/music/musicClickBillboard?type=2"
											class="s-fc0">查看全部&gt;</a>

									</div>
								</dd>
							</dl>

							<dl class="blk ">
								<dt class="top">
									<div class="cver u-cover u-cover-4">
										<img class="j-img"
											src="${pageContext.request.contextPath}/resources/img/c2.png">
										<a class="msk" title="云音乐新歌榜"></a>
									</div>
									<div class="tit">
										<a title="云音乐新歌榜"><h3 class="f-fs1 f-thide">云音乐新歌榜</h3></a>
										<div class="btn">
											<a href="" class="s-bg s-bg-9 f-tdn" hidefocus="true"
												title="播放" data-res-type="13" data-res-id="3779629"
												data-res-action="play" data-res-from="31"
												data-res-data="3779629">播放</a> <a href="" hidefocus="true"
												class="s-bg s-bg-10 f-tdn subscribe-flag "
												data-plid="3779629" title="收藏">收藏</a>
										</div>
									</div>
								</dt>
								<dd>

									<ol>
										<c:forEach items="${newMusicList}" var="music"
											varStatus="status">
											<li onmouseover="this.className='z-hvr'"
												onmouseout="this.className=''"><span class="no no-top">${status.index+1}</span>
												<a
												href="${pageContext.request.contextPath}/music/song?musicId=${music.musicId}"
												class="nm s-fc0 f-thide" title="${music.musicName}">${music.musicName}</a>
												<div class="oper">
													<a href="#" class="s-bg s-bg-11" title="播放"
														hidefocus="true" data-res-type="18"
														data-res-id="1306498681" data-res-action="play"
														data-res-from="31" data-res-data="19723756"></a> <a
														href="#" class="u-icn u-icn-81" title="添加到播放列表"
														hidefocus="true" data-res-type="18"
														data-res-id="1306498681" data-res-action="addto"
														data-res-from="31" data-res-data="19723756"></a>
													<c:choose>
														<c:when test="${empty user }">
															<a onclick="top.login();return false;"
																class="s-bg s-bg-12" title="收藏" hidefocus="true"
																data-res-level="0" data-res-fee="0" data-res-type="18"
																data-res-id="1306498681" data-res-action="subscribe"></a>
														</c:when>
														<c:otherwise>
															<a
																href="${pageContext.request.contextPath}/json/addloveMusics?userId=${user.userId}&musicId=${music.musicId}"
																class="s-bg s-bg-12" title="收藏" hidefocus="true"
																data-res-level="0" data-res-fee="0" data-res-type="18"
																data-res-id="1306498681" data-res-action="subscribe"></a>
														</c:otherwise>
													</c:choose>
												</div></li>
										</c:forEach>
									</ol>
									<div class="more">
										<a
											href="${pageContext.request.contextPath}/music/musicClickBillboard?type=2"
											class="s-fc0">查看全部&gt;</a>

									</div>
								</dd>
							</dl>

							<dl class="blk blk-1">
								<dt class="top">
									<div class="cver u-cover u-cover-4">
										<img class="j-img"
											src="${pageContext.request.contextPath}/resources/img/c3.png">
										<a class="msk" title=""></a>
									</div>
									<div class="tit">
										<a href="" title="好评榜"><h3 class="f-fs1 f-thide">好评榜</h3></a>
										<div class="btn">
											<a href="" class="s-bg s-bg-9 f-tdn" hidefocus="true"
												title="播放" data-res-type="13" data-res-id="2884035"
												data-res-action="play" data-res-from="31"
												data-res-data="2884035">播放</a> <a href="javascript:;"
												hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag "
												data-plid="2884035" title="收藏">收藏</a>
										</div>
									</div>
								</dt>
								<dd>
									<ol>
										<c:forEach items="${goodMusicList}" var="music"
											varStatus="status">

											<li onmouseover="this.className='z-hvr'"
												onmouseout="this.className=''"><span class="no no-top">${status.index+1}</span>
												<a
												href="${pageContext.request.contextPath}/music/song?musicId=${music.musicId}"
												class="nm s-fc0 f-thide" title="${music.musicName}">${music.musicName}</a>
												<div class="oper">
													<a href="#" class="s-bg s-bg-11" title="播放"
														hidefocus="true" data-res-type="18"
														data-res-id="1306498681" data-res-action="play"
														data-res-from="31" data-res-data="19723756"></a> <a
														href="#" class="u-icn u-icn-81" title="添加到播放列表"
														hidefocus="true" data-res-type="18"
														data-res-id="1306498681" data-res-action="addto"
														data-res-from="31" data-res-data="19723756"></a>
													<c:choose>
														<c:when test="${empty user }">
															<a onclick="top.login();return false;"
																class="s-bg s-bg-12" title="收藏" hidefocus="true"
																data-res-level="0" data-res-fee="0" data-res-type="18"
																data-res-id="1306498681" data-res-action="subscribe"></a>
														</c:when>
														
														<c:otherwise>
															<a 
															    href="${pageContext.request.contextPath}/json/addloveMusics?userId=${user.userId}&musicId=${music.musicId}" 
																class="s-bg s-bg-12" title="收藏" hidefocus="true"
																></a>
														</c:otherwise>
													</c:choose>
												</div></li>

										</c:forEach>
									</ol>
									<%-- 	href="${pageContext.request.contextPath}/json/addloveMusics?userId=${user.userId}&musicId=${music.musicId}" --%>
									<div class="more">
										<a
											href="${pageContext.request.contextPath}/music/musicClickBillboard?type=2"
											class="s-fc0">查看全部&gt;</a>

									</div>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div class="g-sd1">

			<!-- 用户状态是否登录 -->
			<c:choose>
				<c:when test="${empty user}">
					<div class="n-myinfo n-myinfo-1 s-bg s-bg-1">
						<p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
						<a id="index-enter-default" href="#"
							onclick="top.login();return false;" class="btn s-bg s-bg-2 f-tdn"
							tabindex="1">用户登录</a>
					</div>
				</c:when>
				<c:otherwise>

					<div class="n-myinfo s-bg s-bg-5">
						<div class="f-cb">
							<a href="/user/home?id=1525516810" class="head f-pr"> <img
								src="http://p2.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=80y80">
							</a>
							<div class="info">
								<h4 style="overflow: hidden;">
									<a id="j-vip-code-to-home"
										href="${pageContext.request.contextPath}/user/lookUserInfo?userId=${user.userId }"
										class="nm nm-icn f-fs1 f-ib f-thide">${user.account }</a><span
										id="j-vip-code"></span>
								</h4>
								<p>
									<a href="/user/level" class="u-lv u-icn2 u-icn2-lv">3<i
										class="right u-icn2 u-icn2-lvright"></i></a>
								</p>
								<div class="btnwrap f-pr">
									<a data-need-safety="false" data-action="checkin"
										href="${pageContext.request.contextPath}/user/loginOut"
										hidefocus="true" class="sign u-btn2 u-btn2-2"><i>注销</i></a>
								</div>
							</div>
						</div>
						<ul class="dny s-fc3 f-cb">
							<li class="fst"><a href="/user/event?id=1525516810"><strong
									id="event_count">0</strong><span>动态</span></a></li>
							<li><a href="/user/follows?id=1525516810"><strong
									id="follow_count">0</strong><span>关注</span></a></li>
							<li class="lst"><a href="/user/fans?id=1525516810"><strong
									id="fan_count">0</strong><span>粉丝</span></a></li>
						</ul>
					</div>
				</c:otherwise>
			</c:choose>

			<!-- 入驻歌手 -->
			<div class="n-singer">
				<h3 class="v-hd3">
					<span class="f-fl">入驻歌手</span> <a
						href="${pageContext.request.contextPath}/singer/findAllSingers?currentPage=1"
						class="more s-fc3">查看全部 &gt;</a>

				</h3>
				<ul class="n-enter f-cb" id="singer-list">
					<c:forEach items="${singers}" var="singer">
						<li><a
							href="${pageContext.request.contextPath}/singer/findSinger?singerId=${singer.singerId}"
							class="itm f-tdn">
								<div class="head">
									<!-- ${singer.singerImg} -->
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
			<!-- <div class="n-dj n-dj-1">
				<h3 class="v-hd3">热门主播</h3>
				<ul class="n-hotdj f-cb" id="hotdj-list">
					<li><a href="/user/home?id=278438485" class="cver"><img
							class="j-img"
							src="http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg"
							data-src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"></a>
						<div class="info">
							<p>
								<a href="/user/home?id=278438485" class="nm-icn f-thide s-fc0">陈立</a>
								<sup class="u-icn u-icn-1 "></sup>
							</p>
							<p class="f-thide s-fc3">心理学家、美食家陈立教授</p>
						</div></li>
				</ul>
			</div> -->
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
						<span class="sep span">网易公司版权所有©1997-2018</span><span class="span">杭州乐读科技有限公司运营：</span>
						<a
							href="http://p1.music.126.net/MkOOdJqWZdBx05Ias2W3UA==/109951163298654917.png"
							target="_blank" class="alink s-fc3">浙网文[2018]3506-263号</a>
					</p>
					<p class="contact s-fc3">
						<span class="sep span">违法和不良信息举报电话：0571-89853516</span> <span
							class="span">举报邮箱：</span> <a class="alink"
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
	
	
</body>

</html>