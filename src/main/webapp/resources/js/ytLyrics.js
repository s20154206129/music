function ytLyrics (music, lyricsList) {
	var s = this;
	LExtends(s, LSprite, []);

	s.index = 0;
	s.list = lyricsList;
	s.music = music;

	s.contentLayer = new LSprite();
	s.addChild(s.contentLayer);

	s.showContent();

	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

ytLyrics.prototype.showContent = function () {
	var s = this;

	for (var i = 0; i < s.list.length; i++) {
		var txt = new LTextField();
		txt.font = "Microsoft YaHei";
		txt.text = s.list[i].content;
		txt.color = "white";
		txt.x = (LGlobal.width - txt.getWidth()) / 2;
		txt.y = s.contentLayer.getHeight() + 20;
		s.contentLayer.addChild(txt)
	}

	var maskLayer = new LSprite();
	maskLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, 210]);

	s.contentLayer.mask = maskLayer;

	s.contentLayer.filters = [new LDropShadowFilter()]
};

ytLyrics.prototype.loop = function (e) {
	var s = e.currentTarget;

	if (s.index >= s.list.length) {
		return;
	}

	var ct = s.music.getCurrentTime();

	var minT = s.list[s.index].time,
	maxT = ((s.index + 1) < s.list.length) ? s.list[s.index + 1].time : s.music.length;

	if (ct >= minT && ct <= maxT) {
		var preTxt = s.contentLayer.getChildAt(s.index - 1);

		if (preTxt) {
			preTxt.color = "white";

			LTweenLite.to(s.contentLayer, 1, {
				y : s.contentLayer.y - preTxt.getHeight() - 20
			});
		}

		var currentTxt = s.contentLayer.getChildAt(s.index);

		if (currentTxt) {
			currentTxt.color = "#33FF00";
		}

		s.index ++;
	}
};