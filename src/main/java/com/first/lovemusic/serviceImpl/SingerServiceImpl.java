package com.first.lovemusic.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.first.lovemusic.dao.MusicDao;
import com.first.lovemusic.dao.MyCareSingerDao;
import com.first.lovemusic.dao.SingerDao;
import com.first.lovemusic.model.MyCareSinger;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.service.SingerService;

@Service("singerService")
public class SingerServiceImpl implements SingerService {
	@Autowired
	private SingerDao singerDao;

	@Autowired
	private MyCareSingerDao myCareSingerDao;

	/**
	 * 根据Id 查找歌手
	 */
	@Override
	public Singer getSingerById(int singerId) {
		return singerDao.findSingerById(singerId);
	}

	/**
	 * 查找我关心的歌手
	 */
	@Override
	public List<Singer> getMyCareSingersByUserId(int userId) {
		return myCareSingerDao.findMyCareSingersByUserId(userId);
	}

	/**
	 * 查找前5名歌手 展示
	 */
	@Override
	public List<Singer> getSingerByTop5() {
		return singerDao.findSingerByTop5();
	}

	/**
	 * 关注歌手 加入的我关注歌手列表
	 */
	@Override
	public int addSingerToMyCareList(int userId, int singerId) {
		return myCareSingerDao.saveSingerToMyCareList(userId, singerId);
	}

	/**
	 * 查找 该用户是否 已经关注该歌手
	 */
	@Override
	public MyCareSinger getSingerByUserIdAndSingerId(int userId, int singerId) {

		return myCareSingerDao.findSingerByUserIdAndSingerId(userId, singerId);
	}
    
	 /**
	  *  取消关注歌手  
	  */
	 @Override
	public int deleteSingerByUserIdAndSingerId(int userId, int singerId) {
		return myCareSingerDao.deleteSingerByUserIdAndSingerId(userId,singerId);
	}
	/**
	 * 查找所有歌手 分页显示
	 */
	@Override
	public PageBean getPageSingers(int currentPage,int pageSize) {
		// 数据库 行数
		int count = singerDao.getCount();
		int totalPage = (int) Math.ceil(count * 1.0 / pageSize);

		// 一页数据
		List<Singer> courseList = singerDao.findPageSingersList((currentPage - 1) * pageSize, pageSize);
		PageBean pageBean = new PageBean(currentPage, pageSize, count, totalPage, courseList);
		return pageBean;
	}
	
	/**
	 * 通过歌手首字母 查找歌手名字 中文    英文
	 */
	@Override
	public List<?> getListBySingerFirst(String letter) {
	    String letters=letter+"%";
		return singerDao.findListBySingerFirst(letter,letters);
	}
	
	/**
	 * 根据歌手名查找 歌手
	 */
	 @Override
	public Singer getSingerByName(String singerName) {
		return singerDao.findSingerByName(singerName);
	}
	 
	 /**
	  * 增加歌手
	  */
	 @Override
	public void addSinger(Singer singer) {
		singerDao.saveSinger(singer);
	}
	 
	 /**
	  * 返回最新插入的歌手id
	  */
	 @Override
	public int  getSingerLastId() {
		 return  singerDao.findSingerLastId();
	}
	 
	 /**
	  * 查找所有歌手
	  */
	  @Override
	public List<Singer> getAllSingers() {
		return singerDao.findAllSingers();
	}
	 
	 /**
	  * 查找5位热门歌手
	  * 
	  */
	  @Override
	public List<Singer> getSingerByHot5() {
		
		return singerDao.findSingerByHot5();
	}
}
