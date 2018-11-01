package com.first.lovemusic.serviceImpl;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.first.lovemusic.dao.FavouriteMusicDao;
import com.first.lovemusic.dao.MusicDao;
import com.first.lovemusic.dao.MyCareSingerDao;
import com.first.lovemusic.dao.MyCareSongSheetDao;
import com.first.lovemusic.model.FavouriteMusic;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.SongSheet;
import com.first.lovemusic.service.MusicService;

@Service("musicService")
public class MusicServiceImpl implements MusicService {
	@Autowired
	private MusicDao musicDao;

	@Autowired
	private FavouriteMusicDao favouriteMusicDao;

	
	@Autowired
	private MyCareSongSheetDao  myCareSongSheetDao;
	/**
	 * ����Id����music
	 */
	public Music getMusicById(int musicId) {
		return musicDao.findMusicById(musicId);
	}

	/**
	 * �����Ƽ��赥 ǰ8��
	 */
	@Override
	public List<SongSheet> getSongSheetList() {
		return musicDao.findSongSheetList();
	}

	/**
	 * �����û��ղ� ���û�ϲ���ĸ���
	 */
	public int addFavouriteMusics(int userId, int musicId) {
		return favouriteMusicDao.saveFavouriteMusics(userId, musicId);
	}

	/**
	 * �����û�ϲ���ĸ��� ���ղصĸ���
	 */
	public List<FavouriteMusic> getFavouriteMusicsByUserId(int userId) {
		return favouriteMusicDao.findFavouriteMusicsByUserId(userId);
	}

	/**
	 * ����Id ���Ҷ�Ӧ�赥
	 */
	@Override
	public SongSheet getSongSheetBySid(int sid) {
		return musicDao.findSongSheetBySid(sid);
	}

	/**
	 * ���ݸ赥id �������ڸø赥�ĸ�
	 */
	@Override
	public List<Music> getMusicsBySId(int sid) {
		return musicDao.findMusicsBySId(sid);
	}

	/**
	 * ���������
	 */
	@Override
	public List<Music> getMusicsByClickNum() {
		return musicDao.findMusicsByClickNum();
	}

	/**
	 * �¸��
	 */
	@Override
	public List<Music> getMusicsByTime() {
		return musicDao.findMusicsByTime();
	}

	/**
	 * 
	 * ������
	 */
	@Override
	public List<Music> getMusicsByScore() {
		return musicDao.findMusicsByScore();
	}

	/**
	 * �ж� �Ƿ��Ѿ� �ղ�
	 */
	@Override
	public FavouriteMusic getFavouriteMusicByUserIdAndMusicId(int userId, int musicId) {

		return favouriteMusicDao.findFavouriteMusicByUserIdAndMusicId(userId, musicId);
	}

	/**
	 * ��ҳչʾ�赥
	 */
	@Override
	public PageBean getPageSongSheet(int currentPage, int pageSize) {
		// ���ݿ� ����
		int count = musicDao.findSongSheetCount();
		int totalPage = (int) Math.ceil(count * 1.0 / pageSize);
		// һҳ����
		List<SongSheet> songSheetList = musicDao.findPageSongSheetsList((currentPage - 1) * pageSize, pageSize);
		PageBean pageBean = new PageBean(currentPage, pageSize, count, totalPage, songSheetList);
		return pageBean;
	}

	
	/**
	 * ��õ����  
	 * ���и���
	 */
	@Override
	public List<Music> getAllMusicsByClickNum() {
	
		return musicDao.findAllMusicsByClickNum();
	}
	
	/**
	 * ���ݱ�ǩ���Ҹ赥
	 */
	@Override
	public List<Music> getSongSheetListByTag(int tag) {
		return musicDao.findSongSheetListByTag(tag);
	}
	
	/**
	 * ���ݸ��� ���Ҹ����Ƿ��Ѿ�����
	 */
	@Override
	public Music getMusicByMusicName(String musicName) {
		return musicDao.findMusicByMusicName(musicName);
	}
	
	/**
	 * �������
	 */
	@Override
	public void addMusic(Music music) {
		 musicDao.saveMusic(music);
	}
	
	/**
	 * ɾ��music  ����Id
	 */
	@Override
	public void deleteMusicById(int musicId) {
		musicDao.deleteMusicById(musicId);
	}
	
	/**
	 * �жϸ����ڸ赥��һ������
	 */
	@Override
	public Integer getSongSheetSidByTag(String musicType) {
		musicType="%"+musicType+"%";
		return musicDao.findSongSheetSidByTag(musicType);
	}
	
	/**
	 * ���Ӹ赥
	 */
	@Override
	public void addSongSheet(SongSheet songSheet) {
		musicDao.saveSongSheet(songSheet);
	}
	
	
	/**
	 *  ����û��ղصĸ赥
	 */
	@Override
	public MyCareSongSheet getSongSheetByUserIdAndSid(int userId, int sid) {
		return myCareSongSheetDao.findSongSheetByUserIdAndSid(userId,sid);
	}
	
	/**
	 * �����û��ղظ赥
	 */
	@Override
	public int addSongSheetToMyCareList(int userId, int sid) {
		return myCareSongSheetDao.saveSongSheetToMyCareList(userId,sid);
	}
	
	/**
	 * ɾ���û��ղصĸ赥
	 */
	@Override
	public int deleteSongSheetFromMyCareSongSheet(int userId, int sid) {
		return myCareSongSheetDao.deleteSongSheetFromMyCareSongSheet(userId,sid);
	}
	
	/**
	 * �û�ȡ���ղظ���
	 */
	@Override
	public int deleteFavouriteMusicByUserIdAndMusicId(int userId, int musicId) {
		return favouriteMusicDao.deleteFavouriteMusicByUserIdAndMusicId(userId, musicId);
	}
	
	/**
	 * �޸����� �������
	 */
	@Override
	public int  updateMusicClickNum(int musicId) {
		  return   musicDao.updateMusicClickNum(musicId);
	}
	
	/**
	 * ����SingerId ���Ҹ����ݳ����ĸ�
	 */
	@Override
	public List<Music> getMusicsBySingerId(int singerId) {
		return musicDao.findMusicsBySingerId(singerId);
	}
	
	/**
	 * ��ȡ���е��¸��  ����
	 */
	@Override
	public List<Music> getAllMusicsByTime() {
		return musicDao.findAllMusicsByTime();
	}
	
	/**
	 * ��ȡ���е� ���������  
	 */
	@Override
	public List<Music> getAllMusicsByScore() {
		return musicDao.findAllMusicsByScore();
	}
}
