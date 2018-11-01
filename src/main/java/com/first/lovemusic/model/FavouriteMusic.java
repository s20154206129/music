package com.first.lovemusic.model;

import java.util.LinkedHashSet;
import java.util.Set;

/**
 * 我最喜欢的歌曲
 * 一对多
 * @author 0000
 */
public class FavouriteMusic {
      private  int  fid;
      
      private  Account  user;
     
      private  Music  music;
      
	 public int getFid() {
		return fid;
	 }
	public void setFid(int fid) {
		this.fid = fid;
	}
	
	public Account getUser() {
		return user;
	}
	public void setUser(Account user) {
		this.user = user;
	}
	public Music getMusic() {
		return music;
	}
	public void setMusic(Music music) {
		this.music = music;
	}
	@Override
	public String toString() {
		return "FavouriteMusic [fid=" + fid + ", user=" + user + ", music=" + music + "]";
	}
	
      
}
