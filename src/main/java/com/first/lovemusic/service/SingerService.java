package com.first.lovemusic.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.MyCareSinger;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.Singer;

public interface SingerService {
   
	  public  Singer  getSingerById(int singerId);
	  
	 
	  public  List<Singer>    getMyCareSingersByUserId(int userId);


	  public List<Singer> getSingerByTop5();


	  public  int addSingerToMyCareList(int userId,int singerId);


	  public MyCareSinger getSingerByUserIdAndSingerId(int userId, int singerId);


	  public PageBean getPageSingers(int currentPage,int pageSize);


	  public List<?> getListBySingerFirst(String letter);


	  public Singer getSingerByName(String singerName);


	  public void addSinger(Singer singer);


	  public int  getSingerLastId();


	  public int deleteSingerByUserIdAndSingerId(int userId, int singerId);


	  public List<Singer> getAllSingers();


	  public List<Singer> getSingerByHot5();
	
}
