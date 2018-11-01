LInit(50, "mylegend", 350, 550, main);
var datalist = {};
var music = null;
function main () {
	document.body.style.background = "black";
	document.body.style.margin = "0px";
	document.body.style.padding = "0px";
	if (LGlobal.mobile) {
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	}
	LGlobal.screen(LGlobal.FULL_SCREEN);
	//单独的js 不能用el表达式
	var loadData = [
		{path : "resources/js/ytLyrics.js"},
		{name : "pic", path : "resources/resource/albumpic.jpg"},
		{name : "lyrics", path : "resources/resource/shou_xie_de_cong_qian.js"},
		{name : "music", path : "resources/resource/shou_xie_de_cong_qian.mp3"}
	];
	var loadingLayer = new LoadingSample1();
	addChild(loadingLayer);
	LLoadManage.load(
		loadData,
		function (p) {
			loadingLayer.setProgress(p);
		},
		function (r) {
			datalist = r;
			loadingLayer.remove();
			addBackgroundPic();
			addTitle();
			addAlbumPic();
			addMusic();
			addLyrics();
		}
	);
}

function addTitle () {
	var txt = new LTextField();
    txt.font = "Microsoft YaHei";
	txt.text = "手写的从前";
	txt.color = "white";
	txt.size = 25;
	txt.x = (LGlobal.width - txt.getWidth()) / 2;
	txt.y = 30;
	addChild(txt);
}

function addBackgroundPic () {
	var bmpd = new LBitmapData(datalist["pic"]);
	var bmp = new LBitmap(bmpd);
	bmp.scaleX = bmp.scaleY = 2;
	bmp.x = (LGlobal.width - bmp.getWidth()) / 2;
	bmp.y = (LGlobal.height - bmp.getHeight()) / 2;
	addChild(bmp);

	var curtain = new LSprite();
	curtain.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "black");
	curtain.alpha = 0.8;
	addChild(curtain);
}

function addAlbumPic () {
	var bmpd = new LBitmapData(datalist["pic"]);
	var bmp = new LBitmap(bmpd);
	bmp.scaleX = bmp.scaleY = 0.6;
	bmp.x = (LGlobal.width - bmp.getWidth()) / 2;
	bmp.y = 100;
	addChild(bmp);
}

function addMusic () {
	music = new LSound(datalist["music"]);
	music.play();
}

function addLyrics () {
	var lyricsLayer = new ytLyrics(music, getLyrics(lyrics));
	lyricsLayer.x = (LGlobal.width - lyricsLayer.getWidth()) / 2;
	lyricsLayer.y = 300;
	addChild(lyricsLayer);
} 

function getLyrics (content) {
	var result = new Array();
	var cArr = content.split("[");
	cArr.shift();

	for (var i = 0; i < cArr.length; i++) {
		var o = cArr[i].split("]");

		if (o.length >= 2 && o[1] != "") {
			var tArr = o[0].split(":"), t = 0;

			if (tArr.length >= 2) {
				var mtArr = tArr[0].split(""), mt = 0;

				for (var k = 0; k < mtArr.length; k++) {
					if (Number(mtArr[k]) > 0) {
						mt += mtArr[k] * Math.pow(10, mtArr.length - k - 1);
					}
				}

				t += mt * 60;

				var stArr = tArr[1].split("."), intStArr = stArr[0].split(""), st = 0;

				for (var j = 0; j < intStArr.length; j++) {
					if (Number(intStArr[j]) > 0) {
						st += intStArr[j] * Math.pow(10, intStArr.length - j - 1);					
					}
				}

				t += Number(st + "." + stArr[1]);
			}

			result.push({time : t, content : o[1]});
		}
	}

	return result;
} 