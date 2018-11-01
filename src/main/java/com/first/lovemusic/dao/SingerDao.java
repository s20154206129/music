package com.first.lovemusic.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.Singer;

public interface SingerDao {
    public  Singer  findSingerById(@Param("singerId")int singerId);

	public List<Singer> findSingerByTop5();

	public int getCount();
	
	public List<Singer> findPageSingersList(@Param("currentPage")int currentPage,@Param("pageSize") int pageSize);

	public List<?> findListBySingerFirst(@Param("letter")String letter, @Param("letters")String letters);

	public Singer findSingerByName(@Param("singerName")String singerName);

	public void saveSinger(Singer singer);

	public int findSingerLastId();

	public List<Singer> findAllSingers();

	public List<Singer> findSingerByHot5();
}
