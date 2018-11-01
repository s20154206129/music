<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="viewport"
	content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<title>歌曲播放</title>
<base
	href="${pageContext.request.scheme }://${pageContext.request.serverName }:${pageContext.request.serverPort }${pageContext.request.contextPath}/">
<link rel="shortcut icon"
	href="//s1.music.126.net/style/favicon.ico?v20180823">
<link
	href="//s2.music.126.net/web/s/core_c464156eac837ff361441d7da9704d6d.css?c464156eac837ff361441d7da9704d6d"
	type="text/css" rel="stylesheet">
<link
	href="//s2.music.126.net/web/s/pt_frame_5d04cf4bb51391164efd9d7fec6f9bdc.css?5d04cf4bb51391164efd9d7fec6f9bdc"
	type="text/css" rel="stylesheet">
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/lib/lufylegend-1.9.11.simple.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/resources/lib/lufylegend.LoadingSample1-0.1.0.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js"
	type="text/javascript" charset="utf-8"></script>


<script>
	   window.onload = function() {
		var audio = document.getElementById('audio'), // 音乐
		sourceList = audio.getElementsByTagName('source'), // 音乐列表
		play = document.getElementById('play'), // 播放按钮
		prev = document.getElementById('prev'), // 上一曲
		next = document.getElementById('next'), // 下一曲
		jingyin = document.getElementById('jingyin'), // 静音
		voiceBar = document.getElementById('voice-bar'), // 音量调节
		musicBar = document.getElementById('music-bar'), // 播放进度控制
		playedBar = document.getElementById('played-bar'), // 已播放进度条
		voicedBar = document.getElementById('voiced-bar'), // 已播放进度条
		musicTitle = document.getElementById('title'), // 音乐标题
		loadBar = document.getElementById('load-bar'), // 加载进度条
		currentTime = document.getElementById('current-time'), // 当前音乐时间
		totalTime = document.getElementById('total-time'), // 当前音乐时间
		musicImg = document.getElementById('music-img'), // 音乐封面
		xunhuan = document.getElementById('xunhuan'); // 循环按钮
		currentSrcIndex = 0;
		// 网易云音乐模块
		var keyword = document.getElementById('keyword'); // 搜索歌名
		var result = document.getElementById('result'); // 结果区
		var toPlay = document.getElementById('to-play'); // 立即播放按钮

		// 是否循环播放 
		audio.loop = false;
	
		// 是否自动播放
		audio.autoplay = false;
		
		
		// 初始化音量
		audio.volume = 0.5;
		var voicedBarWidth = (audio.volume / 1) * voiceBar.clientWidth;
		voicedBar.style.width = voicedBarWidth + 'px';

		// 是否自动缓冲加载
		audio.autobuffer = false;

		// 显示第一首歌曲时长    显示总时长
		(function() {
			var fen = parseInt(audio.duration / 60);
			var miao = parseInt(audio.duration % 60);
			if (miao < 10) {
				miao = '0' + miao;
			}
			totalTime.innerHTML = fen + ':' + miao;
		})();

		// 播放    或者暂停
		play.onclick = function() {
			if (audio.paused) {
				audio.play();
				//音乐每播放一下   修改一下该音乐的  播放量
				$.post("${pageContext.request.contextPath}/music/updateMusicClickNum",
							{
								"musicId" : "${music.musicId}"
							},
							function(json) {
							
							});
							
				
				this.innerHTML = 'Pause';
				musicImg.style.animation = 'xuanzhuan 5s linear infinite';
			} else {
				audio.pause();
				this.innerHTML = 'Play';
				musicImg.removeAttribute('style');
			}
			musicTime();
		};

		// 下一曲
		next.onclick = function() {
			changeMusic('next');
		};

		// 上一曲
		prev.onclick = function() {
			changeMusic('prev');
		};

		// 切换歌曲
		function changeMusic(direct) {
			if (direct === 'next') {
				++currentSrcIndex > sourceList.length - 1
						&& (currentSrcIndex = 0); // 下一曲
			} else {
				--currentSrcIndex < 0
						&& (currentSrcIndex = sourceList.length - 1); // 上一曲
			}
			currentSrc = sourceList[currentSrcIndex].getAttribute('src');
			currentImg = sourceList[currentSrcIndex].getAttribute('data-img')
			musicImg.setAttribute('src', currentImg);
			audio.setAttribute('src', currentSrc);
			audio.play();
			play.innerHTML = 'Pause';
			musicImg.style.animation = 'xuanzhuan 5s linear infinite';
			musicTime();
		}
		voiceBar.onclick = function(event) {
			var voiceBarWidth = voiceBar.clientWidth;
			var newVolume = (event.offsetX / voiceBarWidth);
			audio.volume = newVolume;
			var voicedBarWidth = (audio.volume / 1) * voiceBarWidth;
			voicedBar.style.width = voicedBarWidth + 'px';

		};

		// 播放进度控制
		musicBar.onclick = function(event) {
			var musicBarWidth = musicBar.clientWidth;
			var newCurrentTime = (event.offsetX / musicBarWidth)
					* audio.duration;
			audio.currentTime = newCurrentTime;
			var playedBarWidth = (audio.currentTime / audio.duration)
					* musicBarWidth;
			playedBar.style.width = playedBarWidth + 'px';
		};

		// 播放进度实时更新(修改为歌曲播放时开启定时器，暂停和页面load时清除定时器)
		setInterval(function updatePlayedBar() {
			var musicBarWidth = musicBar.clientWidth;
			var playedBarWidth = (audio.currentTime / audio.duration)
					* musicBarWidth;
			playedBar.style.width = playedBarWidth + 'px';
			if (audio.currentTime % 60 < 10) {
				currentTime.innerHTML = parseInt(audio.currentTime / 60) + ':0'
						+ parseInt(audio.currentTime % 60);
			} else {
				currentTime.innerHTML = parseInt(audio.currentTime / 60) + ':'
						+ parseInt(audio.currentTime % 60);
			}
			//如果是时间结束，并且是非单曲循环，自动下一曲
			if (audio.currentTime === audio.duration && !audio.loop) {
				next.onclick();
			}
		}, 1000);

		// 静音
		jingyin.onclick = function() {
			if (!audio.muted) {
				audio.muted = true;
				voicedBar.style.width = 0 + 'px';
			} else {
				audio.muted = false;
				var voiceBarWidth = voiceBar.clientWidth;
				// 音量大小更新
				var voicedBarWidth = (audio.volume / 1) * voiceBarWidth;
				voicedBar.style.width = voicedBarWidth + 'px';
			}
		};

		// 判断文件缓冲进度
		setInterval(function updateCache() {
			var buffered, percent;
			// 已缓冲部分
			audio.readyState == 4 && (buffered = audio.buffered.end(0));

			// 已缓冲百分百
			audio.readyState == 4
					&& (percent = Math.round(buffered / audio.duration * 100)
							+ '%');
			loadBar.style.width = (Math.round(buffered / audio.duration * 100)
					* musicBar.clientWidth * 0.01)
					+ 'px';
		}, 1000);

		// 计算音乐时间
		function musicTime() {
			// 更换播放歌曲
			musicTitle.innerHTML = sourceList[currentSrcIndex].title;
			// 播放时间显示
			audio.addEventListener("canplay", function() {
				var sc = audio.duration;

				var fen = parseInt(sc / 60);
				var miao = parseInt(sc % 60);
				if (miao < 10) {
					totalTime.innerHTML = fen + ':0' + miao;
				} else {
					totalTime.innerHTML = fen + ':' + miao;
				}
			});
		};
		// 是否单曲循环
		xunhuan.onclick = function() {
			if (audio.loop) {
				audio.loop = false;
				this.innerHTML = '循环';
			} else {
				audio.loop = true;
				this.innerHTML = '单曲';
			}
		};
		var toPlay = document.getElementById('to-play'); // 立即播放按钮
		var result = document.getElementById('result'); // 结果区
	};
	 //显示歌词的元素
	   var  lyricContainer = document.getElementById('lyricContainer');
	 //监听ontimeupdate事件
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

html, body {
	height: 100%;
	font: lighter 16px -apple-system, PingFang SC, Hiragino Sans GB, Arial,
		Microsoft YaHei, Helvetica Neue, sans-serif;
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
	color: #fff;
}

.container {
	width: 1020px;
	margin: 0 auto;
	padding-top: 20px;
	height: 500px;
}

.music {
	width: 320px;
	height: 500px;
	float: right;
	background: rgba(44, 44, 0, 0.5);
	color: #fff;
	border-radius: 3px;
	margin-left: 50px;
}

.header {
	height: 60px;
	text-align: center;
	line-height: 60px;
	border-bottom: 1px solid #fec514;
}

.header h1 {
	font-size: 24px;
	color: #a2a2a2;
}

.fengmian {
	height: 260px;
	position: relative;
}

.fengmian img {
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -64px;
	margin-top: -64px;
	width: 128px;
	height: 128px;
	border-radius: 50%;
}

#title {
	text-align: center;
	height: 40px;
	line-height: 40px;
}

.jindu {
	padding-top: 5px;
	height: 25px;
}

#music-bar {
	display: inline-block;
	width: 218px;
	height: 4px;
	background: #6d6d6d;
	margin-right: 7px;
	border-radius: 4px;
	margin-left: 5px;
	position: relative;
}

#voice-bar {
	display: inline-block;
	width: 80px;
	height: 4px;
	background: #6d6d6d;
	border-radius: 4px;
	position: relative;
}

#played-bar, #voiced-bar {
	display: inline-block;
	height: 4px;
	float: left;
	border-radius: 4px;
	background: -webkit-linear-gradient(left, #fec514, #EE4000);
	background: linear-gradient(left, #fec514, #EE4000);
	position: absolute;
	z-index: 2;
	transition: all 0.5s;
}

#played-bar:after, #voiced-bar:after {
	content: '';
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	right: -2px;
	top: -2px;
}

#load-bar {
	display: inline-block;
	height: 4px;
	float: left;
	border-radius: 4px;
	background: #a2a2a2;
	position: absolute;
	z-index: 1;
	transition: all 3s; /* 进度加载动画 */
}

#time {
	width: 216px;
	font-size: 12px;
	overflow: hidden;
	padding: 3px 0 0 6px;
}

#time span:nth-child(1) {
	float: left;
}

#time span:nth-child(2) {
	float: right;
}

.controls {
	padding-top: 20px;
	text-align: center;
}

.controls a {
	display: inline-block;
	color: #000;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	margin-right: 5px;
	border-radius: 50%;
	background: #fec514;
}

#play {
	font-size: 14px;
	transition: all 0.3s;
}

#play:hover {
	background: rgba(254, 197, 20, 0.7);
}

#prev, #next {
	width: 30px;
	height: 30px;
	line-height: 30px;
	background: transparent;
	color: #fec514;
	border: 2px solid #fec514;
	transition: all 0.3s;
}

#prev:hover, #next:hover {
	border-color: rgba(254, 197, 20, 0.7);
}

#xunhuan, #jingyin {
	width: 30px;
	height: 16px;
	line-height: 16px;
	font-size: 12px;
	background: transparent;
	color: #fec514;
	margin: 0 20px;
}
/* 歌单部分 */
.music-list {
	width: 680px;
	height: 470px;
	margin-right: 20px;
	float: left;
	color: #ccc;
}

.music-list .title {
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 22px;
}

.music-list .list {
	padding: 20px;
}

.music-list .list li {
	display: block;
	line-height: 30px;
	border-bottom: 1px dotted #ccc;
}
/* 搜索部分 */
.search {
	height: 100px;
	margin: 0 auto;
	width: 1020px;
	color: #ccc;
	position: relative;
}

#keyword {
	width: 219px;
	height: 35px;
	line-height: 35px;
	border: 1px solid #ccc;
	color: #ccc;
	padding: 0 10px;
	border-radius: 20px;
	background: transparent;
	outline: none;
	font-size: 14px;
	position: absolute;
	top: 30px;
	left: 10px;
}

#search-btn {
	display: inline-block;
	height: 35px;
	line-height: 35px;
	border: 1px solid #ccc;
	font-size: 14px;
	padding: 0 10px;
	border-radius: 0 20px 20px 0;
	position: absolute;
	top: 30px;
	left: 186px;
}

#result {
	display: inline-block;
	border: 1px dashed #ccc;
	height: 35px;
	line-height: 35px;
	padding: 0 20px;
	border-radius: 20px;
	font-size: 14px;
	opacity: 0;
	transition: all 0.7s;
	position: absolute;
	top: 30px;
	left: 320px;
}

#result strong {
	font-weight: normal;
	margin-right: 20px;
}

#to-play {
	color: #fec514;
}

/* 渐变质感背景 */
.blueHour {
	background: -webkit-linear-gradient(left, #7E898F 0%, #636C75 100%),
		-webkit-radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 0, 0, 0.55) 100%),
		-webkit-radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 0, 0, 0.08) 63%);
	background: linear-gradient(90deg, #7E898F 0%, #636C75 100%),
		radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 0, 0, 0.55) 100%),
		radial-gradient(at top, rgba(255, 255, 255, 0.5) 0%,
		rgba(0, 0, 0, 0.08) 63%);
	background-blend-mode: multiply, screen;
}

@
keyframes xuanzhuan { 0% {
	transform: rotate(0deg);
}

50%
{
transform


:rotate(180
deg)


;
}
100%
{
transform


:


rotate


(360
deg


);
}
}

/* 响应式 */
@media screen and (max-width: 450px) {
	/*  body {
		background: #fff;
	}  */
	/* .container {
		width: 100%;
		height: 100%;
		padding: 0;
	} */
	.music-list, #footer {
		display: none;
	}
	.music {
		width: 100%;
		height: 100%;
	}
	.controls {
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		text-align: center;
	}
	#music-bar {
		width: 70%;
		margin-left: 5%;
		margin-right: 5%;
	}
	#voice-bar {
		width: 15%;
	}
	#time {
		width: 70%;
		margin-left: 5%;
		margin-right: 5%;
		padding-left: 0;
	}
	.jindu {
		position: absolute;
		bottom: 80px;
		left: 0;
		width: 100%;
	}
	#title {
		position: absolute;
		bottom: 110px;
		left: 0;
		width: 100%;
	}
	.search {
		width: 100%;
		position: absolute;
		bottom: 170px;
	}
	#result {
		padding: 0 5%;
		width: 80%;
		left: auto;
		right: 5%;
		top: 75px;
		transition: all 0.2s;
	}
	#keyword {
		width: 80%;
		padding: 0 5%;
		left: auto;
		right: 5%;
	}
	#search-btn {
		left: auto;
		right: 5%;
	}
	.fengmian img {
		left: 25%;
		top: 50%;
		width: 50%;
		height: auto;
		margin: 0;
	}
}

/* 无关紧要 */
#footer {
	position: fixed;
	right: 5px;
	top: 10px;
}

#footer a {
	display: inline-block;
	padding: 2px 10px;
	border-radius: 17px;
	color: #afafaf;
	border: 1px solid #afafaf;
	transition: all .3s;
}

#footer a:hover {
	background: #afafaf;
	color: #000;
}
</style>
</head>
<!-- class="blueHour" -->
<body>
	<div>
		<div>
			<%@ include file="/WEB-INF/content/public/head.jspf"%>
		</div>
		<div id="g_nav2" class="m-subnav j-tflag" style="position: relative;">
			<div class="wrap f-pr">
				<ul class="nav">
					<li><a hidefocus="true" data-module="discover" href=""
						class="z-slt"><em>推荐</em></a></li>
					<li><a hidefocus="true" data-module="toplist" href="" class=""><em>排行榜</em></a></li>
					<li><a hidefocus="true" data-module="playlist" href=""
						class=""><em>歌单</em></a></li>
					<li><a hidefocus="true" data-module="artist" href=""><em>歌手</em></a></li>
					<li><a hidefocus="true" data-module="album" href=""><em>新碟上架</em></a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="m-info f-cb" id="auto-id-tR4Gag7tgCnnfwP"
		style="margin-left: 220px; margin-top: 60px">
		<div class="cover u-cover u-cover-dj">
			<img
				src="${pageContext.request.contextPath}/resources/img/default-music.jpg"
				class="j-img">
		</div>
		<div class="cnt">
			<div class="cntc">
				<div class="hd f-cb">
					<i class="lab u-icn u-icn-37"></i> <label class="tit tit3">
						<h2 class="f-ff2 f-brk">${music.musicName}</h2>
					</label>
				</div>
				<p id="album-desc-dot" class="intr f-brk">
					<b>歌手：</b> ${music.singer.singerName}<br> <br>
				</p>
				<p id="album-desc-dot" class="intr f-brk">
					<b>所属专辑：</b> ${music.album.albumName}<br> <br>
				</p>
			</div>
		</div>
	</div>
	<div>
		<span id="data-audio" style="display: none;"></span> <span
			id="data-img" style="display: none;"></span> <span id="data-music"
			style="display: none;"></span> <span id="data-singer"
			style="display: none;"></span>
	</div>
	<div id="lyricContainer"></div>
	<!-- 该首歌的信息 -->
	<div class="container" style="position: absolute; top: 160px;">
		<audio id="audio"> <source title="${music.musicName}"
			data-img="http://p1.music.126.net/ddhcDeGSl9VhXJLfOsNDEA==/3433774824740403.jpg"
			src="${pageContext.request.contextPath}/resources/music/${music.musicSource}"></audio>
		<div class="music" style="margin-top: -20px;">
			<div class="header">
				<h1>
					<small>音乐播放器</small>
				</h1>
			</div>
			<div class="fengmian">
				<img
					src="${pageContext.request.contextPath}/resources/img/music.png"
					id="music-img" alt="">
			</div>
			<div id="info"
				style="width: 100; height: 20px; display: block; color: yellow;">
				<label>歌手</label> <span>${music.singer.singerName}</span> <label>歌曲</label>
				<span id="r">${music.musicName}</span>
			</div>
			<div id="title">hello !!!!</div>
			<!-- 进度 -->
			<div class="jindu">
				<span id="music-bar"> <span id="load-bar"></span> <span
					id="played-bar"></span>
				</span> <span id="voice-bar"> <span id="voiced-bar"></span>
				</span>
				<div id="time">
					<span id="current-time">0:00</span> <span id="total-time"></span>
				</div>
			</div>
			<div class="controls">
				<a id="xunhuan">循环</a> <a id="prev"><</a> <a id="play"
					href="javascript:;">Play</a> <a id="next" href="javascript:;">></a>
				<a id="jingyin" href="javascript:;">静音</a>
			</div>
		</div>
	</div>
	<div class="g-ft " style="margin-top:310px">
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
