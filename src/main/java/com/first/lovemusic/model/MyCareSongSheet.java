package com.first.lovemusic.model;

import java.util.LinkedHashSet;
import java.util.Set;

/**
 * ���ղصĸ赥
 * 
 * @author 0000
 *
 */
public class MyCareSongSheet {
	private int id;

	private Account user;
	// һ�Զ�
	private Set<SongSheet> songSheetList = new LinkedHashSet<SongSheet>();
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Account getUser() {
		return user;
	}
	public void setUser(Account user) {
		this.user = user;
	}
	public Set<SongSheet> getSongSheetList() {
		return songSheetList;
	}
	public void setSongSheetList(Set<SongSheet> songSheetList) {
		this.songSheetList = songSheetList;
	}
	@Override
	public String toString() {
		return "MyCareSongSheet [id=" + id + ", user=" + user + ", songSheetList=" + songSheetList + "]";
	}
}
