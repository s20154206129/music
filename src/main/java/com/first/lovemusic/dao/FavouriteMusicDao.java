package com.first.lovemusic.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.FavouriteMusic;
import com.first.lovemusic.model.Music;

public interface FavouriteMusicDao {
	public int saveFavouriteMusics(@Param("userId") int userId, @Param("musicId") int musicId);

	public List<FavouriteMusic> findFavouriteMusicsByUserId(@Param("userId") int userId);

	public FavouriteMusic findFavouriteMusicByUserIdAndMusicId(@Param("userId")int userId,@Param("musicId") int musicId);

	public int deleteFavouriteMusicByUserIdAndMusicId(@Param("userId")int userId,@Param("musicId") int musicId);

}
