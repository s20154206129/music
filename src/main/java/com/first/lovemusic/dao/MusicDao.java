package com.first.lovemusic.dao;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.SongSheet;
public interface MusicDao {
	/**
	 * ����music
	 * @param musicId
	 * @return
	 */
	public  Music   findMusicById(@Param("musicId")int musicId);

    /**
     * �����Ƽ��赥
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
	 * ����songSheet������
	 * @return
	 */
	public int findSongSheetCount();
    
	/**
	 * �赥  չʾһҳ������
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
     
	//���������ݿ���Ϊ �յ�ʱ��   ���������� Integer
	public Integer findSongSheetSidByTag(@Param("musicType")String musicType);

	public void saveSongSheet(SongSheet songSheet);

	public int  updateMusicClickNum(@Param("musicId")int musicId);

	public List<Music> findMusicsBySingerId(@Param("singerId")int singerId);

	public List<Music> findAllMusicsByTime();

	public List<Music> findAllMusicsByScore();

}
