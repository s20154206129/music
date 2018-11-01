package com.first.lovemusic.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.first.lovemusic.dao.AlbumDao;
import com.first.lovemusic.model.Album;
import com.first.lovemusic.service.AlbumService;
@Service("albumService")
public class AlbumServiceImpl implements  AlbumService{
    
	@Autowired
	private  AlbumDao   albumDao;
	/**
	 * 专辑的    所有歌曲   列表   没有用两张表所以是 集合
	 */
	@Override
	public Album  getAlbumById(int albumId) {
		return  albumDao.findAlbumById(albumId);
	}
	
	/**
	 * 增加专辑  
	 */
	@Override
	public void addAlbum(String albumName) {
		 albumDao.saveAlbum(albumName);
	}
	
	/**
	 * 判断专辑是否已经存在
	 */
	@Override
	public Album getAlbumByName(String albumName) {
		return albumDao.findAlbumByName(albumName);
	}
	/**
	 *  获取最新插入的专辑
	 */
	@Override
	public int getAlbumLastId() {
		return albumDao.saveAlbumLastId();
	}
	
	/**
	 * 查找歌手所有的专辑
	 */
	@Override
	public List<Album> getAlbumsBySingerId(int singerId) {
		return albumDao.findAlbumsBySingerId(singerId);
	}
}
