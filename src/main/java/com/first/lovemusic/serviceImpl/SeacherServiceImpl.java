package com.first.lovemusic.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.first.lovemusic.dao.MusicDao;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.service.SeacherService;

@Service("seacherService")
public class SeacherServiceImpl   implements   SeacherService{
     
	@Autowired
	private  MusicDao   musicDao;
	/**
	 * ͨ��������   ������    ����
	 */
	@Override
	public List<Music> getSeacherInfo(String keyWord) {
		//ģ����ѯ
		keyWord="%"+keyWord+"%";
		return musicDao.findSearcherInfo(keyWord);
	}
    
	
}
