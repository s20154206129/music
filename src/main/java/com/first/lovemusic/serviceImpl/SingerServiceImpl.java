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
	 * ����Id ���Ҹ���
	 */
	@Override
	public Singer getSingerById(int singerId) {
		return singerDao.findSingerById(singerId);
	}

	/**
	 * �����ҹ��ĵĸ���
	 */
	@Override
	public List<Singer> getMyCareSingersByUserId(int userId) {
		return myCareSingerDao.findMyCareSingersByUserId(userId);
	}

	/**
	 * ����ǰ5������ չʾ
	 */
	@Override
	public List<Singer> getSingerByTop5() {
		return singerDao.findSingerByTop5();
	}

	/**
	 * ��ע���� ������ҹ�ע�����б�
	 */
	@Override
	public int addSingerToMyCareList(int userId, int singerId) {
		return myCareSingerDao.saveSingerToMyCareList(userId, singerId);
	}

	/**
	 * ���� ���û��Ƿ� �Ѿ���ע�ø���
	 */
	@Override
	public MyCareSinger getSingerByUserIdAndSingerId(int userId, int singerId) {

		return myCareSingerDao.findSingerByUserIdAndSingerId(userId, singerId);
	}
    
	 /**
	  *  ȡ����ע����  
	  */
	 @Override
	public int deleteSingerByUserIdAndSingerId(int userId, int singerId) {
		return myCareSingerDao.deleteSingerByUserIdAndSingerId(userId,singerId);
	}
	/**
	 * �������и��� ��ҳ��ʾ
	 */
	@Override
	public PageBean getPageSingers(int currentPage,int pageSize) {
		// ���ݿ� ����
		int count = singerDao.getCount();
		int totalPage = (int) Math.ceil(count * 1.0 / pageSize);

		// һҳ����
		List<Singer> courseList = singerDao.findPageSingersList((currentPage - 1) * pageSize, pageSize);
		PageBean pageBean = new PageBean(currentPage, pageSize, count, totalPage, courseList);
		return pageBean;
	}
	
	/**
	 * ͨ����������ĸ ���Ҹ������� ����    Ӣ��
	 */
	@Override
	public List<?> getListBySingerFirst(String letter) {
	    String letters=letter+"%";
		return singerDao.findListBySingerFirst(letter,letters);
	}
	
	/**
	 * ���ݸ��������� ����
	 */
	 @Override
	public Singer getSingerByName(String singerName) {
		return singerDao.findSingerByName(singerName);
	}
	 
	 /**
	  * ���Ӹ���
	  */
	 @Override
	public void addSinger(Singer singer) {
		singerDao.saveSinger(singer);
	}
	 
	 /**
	  * �������²���ĸ���id
	  */
	 @Override
	public int  getSingerLastId() {
		 return  singerDao.findSingerLastId();
	}
	 
	 /**
	  * �������и���
	  */
	  @Override
	public List<Singer> getAllSingers() {
		return singerDao.findAllSingers();
	}
	 
	 /**
	  * ����5λ���Ÿ���
	  * 
	  */
	  @Override
	public List<Singer> getSingerByHot5() {
		
		return singerDao.findSingerByHot5();
	}
}
