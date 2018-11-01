<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<%@ page isELIgnored="false"%>
<html class="f-oh">

<head>
<link rel="shortcut icon"
	href="//s1.music.126.net/style/favicon.ico?v20180823">
<link
	href="${pageContext.request.contextPath}/resources/css/myMusic/pt_frame_5d04cf4bb51391164efd9d7fec6f9bdc.css"
	type="text/css" rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/myMusic/pt_my_index_51c8a1cf17dc7dc796518a86eaa421fb.css"
	type="text/css" rel="stylesheet">
<link href="" type="text/css" rel="stylesheet">

</head>
<body>
	<%@ include file="/WEB-INF/content/public/head.jspf"%>
	<div id="g_mymusic" class="g-mymusic" style="height: 570px;">
		<div class="g-bd3 p-mymusic f-cb" style="min-height: 570px;">
			<div class="g-sd3 u-scroll n-musicsd f-pr j-flag"
				style="height: 570px;">
				<div id="auto-id-KE37JOHVxuCpBruo">
					<div class="n-minelst n-minelst-1">
						<h2 class="f-ff1">
							<!-- <a hidefocus="true" href="javascript:void(0);"
								class="u-btn u-btn-crt f-fr j-flag"
								data-action="create-playlist"><i>新建</i></a>  -->
								<span class="rtitle"
								data-action="spread"><i class="tri tri1"></i>创建的歌单(<span
								class="j-flag">1</span>)</span>
						</h2>
						<ul class="j-flag f-cb">
							<li class="j-iflag z-selected" id="auto-id-g505ntexkg1EuzTJ"
								data-matcher="playlist-2322540606">
								<div class="item f-cb">
									<div class="left">
										<a hidefocus="true" class="avatar"><img
											src="http://p1.music.126.net/hR8hzodHHPRJcF9qWZQrzw==/109951163526100900.jpg?param=40y40"
											alt=""></a>
									</div>
									<p class="name f-thide">
										<a hidefocus="true" href="javascript:void(0);" class="s-fc0"
											title="我喜欢的音乐">我喜欢的音乐</a>
									</p>
									<p class="s-fc4 f-thide num">${size}</p>
								</div>
								<span class="oper hshow" style="display: none;"></span>
							</li>
						</ul>
					</div>
					<div class="n-minelst n-minelst-1">
							<!-- <h2 class="f-ff1">
							<span class="rtitle" data-action="spread"><i
								class="tri tri1"></i>收藏的歌单(<span class="j-flag">1</span>)</span>
						</h2>
					<ul class="f-cb j-flag">
							<li class="j-iflag" id="auto-id-1WFGc14sR2C84GyQ"
								data-matcher="playlist-102774299">
								<div class="item f-cb">
									<div class="left">
										<a hidefocus="true" class="avatar"><img
											src="http://p1.music.126.net/OYEvPk_7HQp4GkIEb4QE6w==/3315027558636624.jpg?param=40y40"
											alt=""></a>
									</div>
									<p class="name f-thide">
										<a hidefocus="true" href="javascript:void(0);" class="s-fc0"
											title="牛津书虫系列&nbsp;第1-6级">牛津书虫系列&nbsp;第1-6级</a>
									</p>
									<p class="s-fc4 f-thide num">509首&nbsp;by 莎士比亚书店</p>
								</div>
								<span class="oper hshow" style="display: none;"><a
									data-action="delete" hidefocus="true" title="删除"
									href="javascript:void(0);" class="u-icn u-icn-11"></a></span>
							</li>
						</ul> -->
					</div>
					<div style="height: 100px;"></div>
				</div>
			</div>
			<div class="g-mn3 f-pr j-flag">
				<div class="f-pr">
					<div class="j-flag">
						<div class="g-wrap">
							<div class="m-info f-cb">
								<div class="cover u-cover u-cover-dj">
									<img id="flag_cover"
										src="http://p1.music.126.net/hR8hzodHHPRJcF9qWZQrzw==/109951163526100900.jpg?param=200y200"><span
										class="msk"></span>
								</div>
								<div class="cnt">
									<div class="cntc m-info">
										<div class="hd f-cb">
											<i class="type u-icn u-icn-13"></i>
											<h2 class="f-ff2 f-thide">我喜欢的音乐</h2>
										</div>
										<div class="user f-cb">
											<a class="face" href="/user/home?id=1525516810"><img
												src="http://p1.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=200y200"></a><span
												class="name f-thide"><a
												href="/user/home?id=1525516810" class="s-fc7" title="${userInfo.userName }">${userInfo.userName }</a></span><span
												class="time s-fc4">2018-07-19&nbsp;创建</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="u-title u-title-1 f-cb">
							<h3>
								<span class="f-ff2">歌曲列表</span>
							</h3>
							<span class="sub s-fc3"><span id="flag_trackCount">${size}</span>首歌</span>
							<!-- <div class="more s-fc3">
								播放：<strong id="flag_playCount" class="s-fc6">6</strong>次
							</div> -->
						</div>
					</div>
					<div class="j-flag" style="background-color: blue">
						<div oncopy="return false;" oncut="return false;"
							ondragstart="return false;" id="auto-id-843I9TViptMI1aM9">
							<div class="j-flag" id="auto-id-RpW2WNpVUstucqia">
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
									<tbody style="font-size: 12px;">
										<c:forEach items="${myMusicList}" var="f" varStatus="status">
											<tr class="even">
												<td class="left">
													<div class="hd ">
														<span data-res-id="297791" data-res-type="18"
															data-res-action="play" data-res-from="13"
															data-res-data="2322540606" class="ply ">&nbsp;</span><span
															class="num">${status.index+1}</span>
													</div>
												</td>
												<td class="">
													<div class="f-cb">
														<div class="tt">
															<div class="ttc">
																<span class="txt"> <a
																	href="${pageContext.request.contextPath}/music/song?musicId=${f.music.musicId }">
																		<b title="${f.music.musicName }">${f.music.musicName }</b>
																</a> <span title="${f.music.album.albumName}" class="s-fc8">
																		- ${f.music.album.albumName}</span> <span
																	data-res-id="297791" data-res-action="mv" title="播放mv"
																	class="mv">MV</span></span>
															</div>
														</div>
													</div>
												</td>
												<td class=" s-fc3"><span class="u-dur candel">${f.music.musicTime}</span>
													<div class="opt hshow">
														<a class="u-icn u-icn-81 icn-add" href="${pageContext.request.contextPath}/json/deleteloveMusics?musicId=${f.music.musicId}"
															title="从喜欢歌单里删除"></a>
													</div></td>
												<td class="">
													<div class="text" title="${f.music.singer.singerName}">
														<span title="${f.music.singer.singerName}"> <a
															class=""
															href="${pageContext.request.contextPath}/singer/findSinger?singerId=${f.music.singer.singerId}"
															hidefocus="true">${f.music.singer.singerName}</a></span>
													</div>
												</td>
												<td class="">
													<div class="text">
														<a href="album/albumInfo?albumId=${f.music.album.albumId}"
															title="${f.music.album.albumName}<">${f.music.album.albumName}</a>
													</div>
												</td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>
							<div class="j-flag"></div>
						</div>
					</div>
					<div class="j-flag f-mgt40">
						<div id="auto-id-X0Ruy2S21oM3ySar">
							<div class="u-title u-title-1">
								<h3>
									<span class="f-ff2">评论</span>
								</h3>
								<span class="sub s-fc3">共<span class="j-flag">${commentsSize}</span>条评论
								</span>
							</div>
							<div class="m-cmmt">
								<div class="iptarea">
									<div class="head">
										<img
											src="${pageContext.request.contextPath}/resources/img/user/${userInfo.userImg}">
									</div>
									<div class="j-flag">
										<div>
											<div class="m-cmmtipt f-cb f-pr">
												<div class="u-txtwrap holder-parent f-pr"
													style="display: block;">
													<textarea class="u-txt area j-flag" data-type="0"
														placeholder="评论" id="content"></textarea>
												</div>
												<div class="btns f-cb f-pr">
													<i class="icn u-icn u-icn-36 j-flag"
														id="auto-id-O0uPBwxQCTgWZf7i"></i><i
														class="icn u-icn u-icn-41 j-flag"
														id="auto-id-ZSWBQ15Ax3u7E52L"></i> <a
														href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag"
														id="comment">评论</a>
												</div>
												<div class="corr u-arr">
													<em class="arrline">◆</em><span class="arrclr">◆</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div id="" class="con"></div>
								<div class="cmmts j-flag" id="auto-id-bWGMzmsnmL3u912H"></div>
								<div class="j-flag"></div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<div style="height: 300px;"></div>
	<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true"
		style="">回到顶部</a>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/resources/js/myMusic/jquery.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/resources/js/myMusic/jquery.comment.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/resources/js/myMusic/bootstrap.min.js"></script>
	<!--初始数据-->
	<script type="text/javascript">
	var arr;
	$(function() {
		//异步获取 用户所有评论
		$.post(
						"${pageContext.request.contextPath}/json/json-get-user-comments",
						{
							"userId" : "${userInfo.userId}"
						},
						function(json) {
							arr=[];
							for(var i=0;i<json.length;i++){
					        var a={
										id : json[i].userId,
										img : "${pageContext.request.contextPath}/resources/img/user/${userInfo.userImg}",
										replyName : "${myMusicList[0].user.account}",
										beReplyName : "",
										content : json[i].commentContent,
										time : json[i].commentTime,
										address : "",
										osname : "",
										browse : "",
										replyBody : []
									}
					        arr.push(a);
							}
							
							$(".con").addCommentList({
								data : arr,
								add : ""
							});
						});
		$("#comment").click(function(){
			
			//异步  评论
			$.post(
					"${pageContext.request.contextPath}/json/json-add-user-comments",
					{
						"userId" :"${userInfo.userId}",
						"commentContent" : $("#content").val()
					},
					function(json) {
					
					});
			var obj = new Object();
			obj.img = "${pageContext.request.contextPath}/resources/img/user/${userInfo.userImg}";
			obj.replyName = "${myMusicList[0].user.account}";
			obj.content = $("#content").val();
			obj.browse = "";
			obj.osname = "win10";
			obj.replyBody = "";
			$(".con").addCommentList({
				data : [],
				add : obj
			});
		});
	})
		</script>

</body>

</html>