package com.first.lovemusic.dao;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.MyCareSongSheet;

public interface MyCareSongSheetDao{

	public MyCareSongSheet findSongSheetByUserIdAndSid(@Param("userId")int userId,@Param("sid") int sid);

	public int  saveSongSheetToMyCareList(@Param("userId")int userId, @Param("sid")int sid);

	public int deleteSongSheetFromMyCareSongSheet(@Param("userId")int userId,@Param("sid") int sid);
}
