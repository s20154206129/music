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
	 * ר����    ���и���   �б�   û�������ű������� ����
	 */
	@Override
	public Album  getAlbumById(int albumId) {
		return  albumDao.findAlbumById(albumId);
	}
	
	/**
	 * ����ר��  
	 */
	@Override
	public void addAlbum(String albumName) {
		 albumDao.saveAlbum(albumName);
	}
	
	/**
	 * �ж�ר���Ƿ��Ѿ�����
	 */
	@Override
	public Album getAlbumByName(String albumName) {
		return albumDao.findAlbumByName(albumName);
	}
	/**
	 *  ��ȡ���²����ר��
	 */
	@Override
	public int getAlbumLastId() {
		return albumDao.saveAlbumLastId();
	}
	
	/**
	 * ���Ҹ������е�ר��
	 */
	@Override
	public List<Album> getAlbumsBySingerId(int singerId) {
		return albumDao.findAlbumsBySingerId(singerId);
	}
}
