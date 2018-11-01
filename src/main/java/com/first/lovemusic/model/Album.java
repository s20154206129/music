package com.first.lovemusic.model;

import java.util.LinkedHashSet;
import java.util.Set;

/**
 * 专辑类
 * 
 * @author 0000
 *
 */
public class Album {
	private int albumId;
	private String albumName;
	private String company; // 出版公司
	private String albumImg;
	// 一对多 一张专辑对应多个歌曲
	private Set<Music> musicList = new LinkedHashSet<Music>();

	public int getAlbumId() {
		return albumId;
	}

	public void setAlbumId(int albumId) {
		this.albumId = albumId;
	}

	public String getAlbumImg() {
		return albumImg;
	}

	public void setAlbumImg(String albumImg) {
		this.albumImg = albumImg;
	}

	public String getAlbumName() {
		return albumName;
	}

	public void setAlbumName(String albumName) {
		this.albumName = albumName;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public Set<Music> getMusicList() {
		return musicList;
	}

	public void setMusicList(Set<Music> musicList) {
		this.musicList = musicList;
	}

	@Override
	public String toString() {
		return "Album [albumId=" + albumId + ", albumName=" + albumName + ", company=" + company + ", albumImg="
				+ albumImg + ", musicList=" + musicList + "]";
	}
}
