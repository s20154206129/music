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
	 * 根据Id查找music
	 */
	public Music getMusicById(int musicId) {
		return musicDao.findMusicById(musicId);
	}

	/**
	 * 查找推荐歌单 前8首
	 */
	@Override
	public List<SongSheet> getSongSheetList() {
		return musicDao.findSongSheetList();
	}

	/**
	 * 加入用户收藏 即用户喜欢的歌曲
	 */
	public int addFavouriteMusics(int userId, int musicId) {
		return favouriteMusicDao.saveFavouriteMusics(userId, musicId);
	}

	/**
	 * 查找用户喜欢的歌曲 即收藏的歌曲
	 */
	public List<FavouriteMusic> getFavouriteMusicsByUserId(int userId) {
		return favouriteMusicDao.findFavouriteMusicsByUserId(userId);
	}

	/**
	 * 根据Id 查找对应歌单
	 */
	@Override
	public SongSheet getSongSheetBySid(int sid) {
		return musicDao.findSongSheetBySid(sid);
	}

	/**
	 * 根据歌单id 查找属于该歌单的歌
	 */
	@Override
	public List<Music> getMusicsBySId(int sid) {
		return musicDao.findMusicsBySId(sid);
	}

	/**
	 * 音乐飙升榜单
	 */
	@Override
	public List<Music> getMusicsByClickNum() {
		return musicDao.findMusicsByClickNum();
	}

	/**
	 * 新歌榜
	 */
	@Override
	public List<Music> getMusicsByTime() {
		return musicDao.findMusicsByTime();
	}

	/**
	 * 
	 * 好评榜
	 */
	@Override
	public List<Music> getMusicsByScore() {
		return musicDao.findMusicsByScore();
	}

	/**
	 * 判断 是否已经 收藏
	 */
	@Override
	public FavouriteMusic getFavouriteMusicByUserIdAndMusicId(int userId, int musicId) {

		return favouriteMusicDao.findFavouriteMusicByUserIdAndMusicId(userId, musicId);
	}

	/**
	 * 分页展示歌单
	 */
	@Override
	public PageBean getPageSongSheet(int currentPage, int pageSize) {
		// 数据库 行数
		int count = musicDao.findSongSheetCount();
		int totalPage = (int) Math.ceil(count * 1.0 / pageSize);
		// 一页数据
		List<SongSheet> songSheetList = musicDao.findPageSongSheetsList((currentPage - 1) * pageSize, pageSize);
		PageBean pageBean = new PageBean(currentPage, pageSize, count, totalPage, songSheetList);
		return pageBean;
	}

	
	/**
	 * 获得点击榜  
	 * 所有歌曲
	 */
	@Override
	public List<Music> getAllMusicsByClickNum() {
	
		return musicDao.findAllMusicsByClickNum();
	}
	
	/**
	 * 根据标签查找歌单
	 */
	@Override
	public List<Music> getSongSheetListByTag(int tag) {
		return musicDao.findSongSheetListByTag(tag);
	}
	
	/**
	 * 根据歌名 查找歌曲是否已经存在
	 */
	@Override
	public Music getMusicByMusicName(String musicName) {
		return musicDao.findMusicByMusicName(musicName);
	}
	
	/**
	 * 插入歌曲
	 */
	@Override
	public void addMusic(Music music) {
		 musicDao.saveMusic(music);
	}
	
	/**
	 * 删除music  根据Id
	 */
	@Override
	public void deleteMusicById(int musicId) {
		musicDao.deleteMusicById(musicId);
	}
	
	/**
	 * 判断歌属于歌单哪一种类型
	 */
	@Override
	public Integer getSongSheetSidByTag(String musicType) {
		musicType="%"+musicType+"%";
		return musicDao.findSongSheetSidByTag(musicType);
	}
	
	/**
	 * 增加歌单
	 */
	@Override
	public void addSongSheet(SongSheet songSheet) {
		musicDao.saveSongSheet(songSheet);
	}
	
	
	/**
	 *  获得用户收藏的歌单
	 */
	@Override
	public MyCareSongSheet getSongSheetByUserIdAndSid(int userId, int sid) {
		return myCareSongSheetDao.findSongSheetByUserIdAndSid(userId,sid);
	}
	
	/**
	 * 增加用户收藏歌单
	 */
	@Override
	public int addSongSheetToMyCareList(int userId, int sid) {
		return myCareSongSheetDao.saveSongSheetToMyCareList(userId,sid);
	}
	
	/**
	 * 删除用户收藏的歌单
	 */
	@Override
	public int deleteSongSheetFromMyCareSongSheet(int userId, int sid) {
		return myCareSongSheetDao.deleteSongSheetFromMyCareSongSheet(userId,sid);
	}
	
	/**
	 * 用户取消收藏歌曲
	 */
	@Override
	public int deleteFavouriteMusicByUserIdAndMusicId(int userId, int musicId) {
		return favouriteMusicDao.deleteFavouriteMusicByUserIdAndMusicId(userId, musicId);
	}
	
	/**
	 * 修改音乐 听歌次数
	 */
	@Override
	public int  updateMusicClickNum(int musicId) {
		  return   musicDao.updateMusicClickNum(musicId);
	}
	
	/**
	 * 根据SingerId 查找歌手演唱过的歌
	 */
	@Override
	public List<Music> getMusicsBySingerId(int singerId) {
		return musicDao.findMusicsBySingerId(singerId);
	}
	
	/**
	 * 获取所有的新歌榜单  歌曲
	 */
	@Override
	public List<Music> getAllMusicsByTime() {
		return musicDao.findAllMusicsByTime();
	}
	
	/**
	 * 获取所有的 好评榜歌曲  
	 */
	@Override
	public List<Music> getAllMusicsByScore() {
		return musicDao.findAllMusicsByScore();
	}
}
