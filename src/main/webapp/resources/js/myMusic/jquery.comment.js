(function($){
	function crateCommentInfo(obj){
		
		if(typeof(obj.time) == "undefined" || obj.time == ""){
			obj.time = getNowDateFormat();
		}
		var el="<div class='cmmts j-flag'><div id='' class='itm' data-id='1242923108'><div class='head'><a href='/user/home?id=1525516810'><img src='"+obj.img+"'></a></div>"
				+"<div class='cntwrap'><div class=''><div class='cnt f-brk'><a href='#' class='s-fc7'>"+obj.replyName+"</a>："+obj.content+"</div></div>"
			    +"<div class='rp'><div class='time s-fc4'>"+obj.time+"</div><span class='dlt'>"
				+"<a href='javascript:void(0)' class='del' data-id='1242923108' data-type='delete'></a><span class='sep'></span></span>"
				+"<a data-id='1242923108' data-type='like' href='javascript:void(0)'><i class='zan u-icn2 u-icn2-12'></i></a><span class='sep'>|</span><a href='javascript:void(0)' class='s-fc3 reply-btn' data-id='1242923108' data-type='reply'></a></div></div></div><div><div class='reply-list'>";
	
		if(obj.replyBody != "" && obj.replyBody.length > 0){
			var arr = obj.replyBody;
			for(var j=0;j<arr.length;j++){
				var replyObj = arr[j];
				el = el+createReplyComment(replyObj);
			}
		}
		el = el+"</div></div></div>";
		return el;
	}
	
	//返回每个回复体内容
	function createReplyComment(reply){
		var replyEl = "<div class='reply que f-brk f-pr s-fc3'><div><a href='javascript:void(0)' class='replyname s-fc7'>"+reply.replyName+"</a>:<a href='javascript:void(0)' class='s-fc7'>@"+reply.beReplyName+"</a><span>"+reply.content+"</span></div>"
						+ "<p style='padding-top:10px;'><span>"+reply.time+"</span> <a class='reply-list-btn' style='float:right;'>回复</a></p></div>";
		return replyEl;
	}
	
	/*function createReplyComment(reply){
		var replyEl = "<div class='reply que f-brk f-pr s-fc3'><div><a href='javascript:void(0)' class='replyname'>"+reply.replyName+"</a>:<a href='javascript:void(0)' class='s-fc7'>@"+reply.beReplyName+"</a><span>"+reply.content+"</span></div>"
						+ "<p style='padding-top:10px;'><span>"+reply.time+"</span> <a class='reply-list-btn' style='float:right;'>回复</a></p></div>";
		return replyEl;
	}*/
	
	function getNowDateFormat(){
		var nowDate = new Date();
		var year = nowDate.getFullYear();
		var month = filterNum(nowDate.getMonth()+1);
		var day = filterNum(nowDate.getDate());
		var hours = filterNum(nowDate.getHours());
		var min = filterNum(nowDate.getMinutes());
		var seconds = filterNum(nowDate.getSeconds());
		return year+"-"+month+"-"+day+" "+hours+":"+min+":"+seconds;
	}
	function filterNum(num){
		if(num < 10){
			return "0"+num;
		}else{
			return num;
		}
	}
	/*function replyClick(el){
		el.parent().parent().append("<div class='replybox'><textarea cols='80' rows='3' placeholder='评论......' class='mytextarea' ></textarea><span class='send btn u-btn u-btn-1 j-flag' style='position: absolute;'>发送</span></div>")
		.find(".send").click(function(){
			var content = $(this).prev().val();
			if(content != ""){
				var parentEl = $(this).parent().parent().parent().parent();
				var obj = new Object();
				obj.replyName="";
				if(el.parent().parent().hasClass("reply")){
					obj.beReplyName = el.parent().parent().find("a:first").text();
				}else{
					obj.beReplyName=parentEl.find("h3").text();
				}
				obj.content=content;
				obj.time = getNowDateFormat();
				var replyString = createReplyComment(obj);
				$(".replybox").remove();
				parentEl.find(".reply-list").append(replyString).find(".reply-list-btn:last").click(function(){alert("不能回复自己");});
			}else{
				alert("空内容");
			}
		});
	}*/
	
	
	$.fn.addCommentList=function(options){
		var defaults = {
			data:[],
			add:""
		}
		var option = $.extend(defaults, options);
		//加载数据
		if(option.data.length > 0){
			var dataList = option.data;
			var totalString = "";
			for(var i=0;i<dataList.length;i++){
				var obj = dataList[i];
				var objString = crateCommentInfo(obj);
				totalString = totalString+objString;
			}
			$(this).append(totalString).find(".reply-btn").click(function(){
				if($(this).parent().parent().find(".replybox").length > 0){
					$(".replybox").remove();
				}else{
					$(".replybox").remove();
					replyClick($(this));
				}
			});
			$(".reply-list-btn").click(function(){
				if($(this).parent().parent().find(".replybox").length > 0){
					$(".replybox").remove();
				}else{
					$(".replybox").remove();
					replyClick($(this));
				}
			})
		}
		
		//添加新数据
		if(option.add != ""){
			obj = option.add;
			var str = crateCommentInfo(obj);
			$(this).prepend(str).find(".reply-btn").click(function(){
				replyClick($(this));
			});
		}
		
	}
	
	
})(jQuery);
