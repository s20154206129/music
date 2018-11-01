package com.first.lovemusic.service;


import java.util.List;

import com.first.lovemusic.model.Album;

public interface AlbumService {
	public Album  getAlbumById(int albumId);

	public void addAlbum(String  albumName);

	public Album getAlbumByName(String albumName);

	public int getAlbumLastId();

	public List<Album> getAlbumsBySingerId(int singerId);
}
