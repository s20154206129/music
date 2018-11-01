package com.first.lovemusic.model;

/**
 * 歌单
 * @author 0000
 *
 */
public class SongSheet {
      private  int  sid;
      private  String  title;
      private  String  introduce;
      private  String  tag;
      private  int   number;//听过该歌单人数
      private  String  img;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getIntroduce() {
		return introduce;
	}
	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	
	
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	@Override
	public String toString() {
		return "SongSheet [sid=" + sid + ", title=" + title + ", introduce=" + introduce + ", tag=" + tag + ", number="
				+ number + ", img=" + img + "]";
	}
}
