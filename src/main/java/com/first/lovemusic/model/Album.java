package com.first.lovemusic.model;

import java.util.LinkedHashSet;
import java.util.Set;

/**
 * ר����
 * 
 * @author 0000
 *
 */
public class Album {
	private int albumId;
	private String albumName;
	private String company; // ���湫˾
	private String albumImg;
	// һ�Զ� һ��ר����Ӧ�������
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
