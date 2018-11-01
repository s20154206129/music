package com.first.lovemusic.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.MyCareSinger;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.Singer;

public interface MyCareSingerDao {
     
	  
	  /**
	   * Ѱ���û��ѹ�ע������ ����
	   */
	public List<Singer> findMyCareSingersByUserId(@Param("userId")int userId);

	
	/**
	 *   ����  ��ע����
	 * @param singerId
	 * @return
	 */
	public  int saveSingerToMyCareList(@Param("userId")int userId,@Param("singerId")int singerId);
    
	
	/**
	 * ���ҹ�ע����
	 * @param userId
	 * @param singerId
	 * @return
	 */
	public MyCareSinger findSingerByUserIdAndSingerId(@Param("userId")int userId, @Param("singerId")int singerId);
     
	/**
	 * ȡ����ע����
	 * @param userId
	 * @param singerId
	 * @return
	 */
	public int deleteSingerByUserIdAndSingerId(@Param("userId")int userId, @Param("singerId")int singerId);

	
}
