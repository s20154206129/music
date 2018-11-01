package com.first.lovemusic.service;

import java.util.List;

import com.first.lovemusic.dao.FavouriteMusicDao;
import com.first.lovemusic.model.FavouriteMusic;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.SongSheet;

public interface MusicService {
	public  Music   getMusicById(int musicId);
	
	public List<SongSheet> getSongSheetList();
	
	
	public SongSheet getSongSheetBySid(int sid);

	public List<Music> getMusicsBySId(int sid);

	public List<Music> getMusicsByClickNum();

	public List<Music> getMusicsByTime();

	public List<Music> getMusicsByScore();
	
	
    public int addFavouriteMusics(int userId,int musicId);
	
    public   List<FavouriteMusic>   getFavouriteMusicsByUserId(int userId);

	public FavouriteMusic getFavouriteMusicByUserIdAndMusicId(int userId, int musicId);

	public  PageBean getPageSongSheet(int currentPage, int currentSize);

	public List<Music> getAllMusicsByClickNum();

	public List<Music> getSongSheetListByTag(int tag);

	public Music getMusicByMusicName(String musicName);
  
	public void addMusic(Music music);

	public void deleteMusicById(int musicId);

	public Integer getSongSheetSidByTag(String musicType);

	public void addSongSheet(SongSheet songSheet);

	public MyCareSongSheet getSongSheetByUserIdAndSid(int userId, int sid);

	public int addSongSheetToMyCareList(int userId, int sid);

	public int deleteSongSheetFromMyCareSongSheet(int userId, int sid);

	public int deleteFavouriteMusicByUserIdAndMusicId(int userId, int musicId);

	public int  updateMusicClickNum(int musicId);

	public List<Music> getMusicsBySingerId(int singerId);

	public List<Music> getAllMusicsByTime();

	public List<Music> getAllMusicsByScore();

	
}
