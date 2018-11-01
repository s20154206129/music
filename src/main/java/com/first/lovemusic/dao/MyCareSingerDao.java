package com.first.lovemusic.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.MyCareSinger;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.Singer;

public interface MyCareSingerDao {
     
	  
	  /**
	   * 寻找用户已关注的所有 歌手
	   */
	public List<Singer> findMyCareSingersByUserId(@Param("userId")int userId);

	
	/**
	 *   插入  关注歌手
	 * @param singerId
	 * @return
	 */
	public  int saveSingerToMyCareList(@Param("userId")int userId,@Param("singerId")int singerId);
    
	
	/**
	 * 查找关注歌手
	 * @param userId
	 * @param singerId
	 * @return
	 */
	public MyCareSinger findSingerByUserIdAndSingerId(@Param("userId")int userId, @Param("singerId")int singerId);
     
	/**
	 * 取消关注歌手
	 * @param userId
	 * @param singerId
	 * @return
	 */
	public int deleteSingerByUserIdAndSingerId(@Param("userId")int userId, @Param("singerId")int singerId);

	
}
