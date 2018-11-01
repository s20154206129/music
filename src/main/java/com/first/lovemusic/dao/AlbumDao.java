package com.first.lovemusic.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.Album;

public interface AlbumDao {
	//·µ»Ø×¨¼­
    public Album  findAlbumById(@Param("albumId")int albumId);

	public void saveAlbum(@Param("albumName")String albumName);

	public Album findAlbumByName(@Param("albumName")String albumName);

	public int saveAlbumLastId();

	public List<Album> findAlbumsBySingerId(@Param("singerId")int singerId);
}
