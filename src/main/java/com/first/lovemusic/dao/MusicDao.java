package com.first.lovemusic.dao;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.SongSheet;
public interface MusicDao {
	/**
	 * 查找music
	 * @param musicId
	 * @return
	 */
	public  Music   findMusicById(@Param("musicId")int musicId);

    /**
     * 查找推荐歌单
     * @return
     */
	public List<SongSheet> findSongSheetList();

	
	public SongSheet findSongSheetBySid(@Param("sid")int sid);

	
	public List<Music> findMusicsBySId(@Param("sid")int sid);


	public List<Music> findMusicsByClickNum();


	public List<Music> findMusicsByTime();


	public List<Music> findMusicsByScore();


	public List<Music> findSearcherInfo(@Param("keyWord")String keyWord);

	/**
	 * 查找songSheet表行数
	 * @return
	 */
	public int findSongSheetCount();
    
	/**
	 * 歌单  展示一页的数据
	 * @param i
	 * @param pageSize
	 * @return
	 */
	public List<SongSheet> findPageSongSheetsList(@Param("currentPage")int currentPage,@Param("pageSize") int pageSize);

	public List<Music> getAllMusicsByClickNum();

	public List<Music> findAllMusicsByClickNum();

	public List<Music> findSongSheetListByTag(@Param("tag")int tag);

	public Music findMusicByMusicName(@Param("musicName")String musicName);

	public void saveMusic(Music music);

	public void deleteMusicById(@Param("musicId")int musicId);
     
	//当返回数据可能为 空的时候   返回类型用 Integer
	public Integer findSongSheetSidByTag(@Param("musicType")String musicType);

	public void saveSongSheet(SongSheet songSheet);

	public int  updateMusicClickNum(@Param("musicId")int musicId);

	public List<Music> findMusicsBySingerId(@Param("singerId")int singerId);

	public List<Music> findAllMusicsByTime();

	public List<Music> findAllMusicsByScore();

}
