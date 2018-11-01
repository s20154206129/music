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
	 * 通过歌手名   歌曲名    查找
	 */
	@Override
	public List<Music> getSeacherInfo(String keyWord) {
		//模糊查询
		keyWord="%"+keyWord+"%";
		return musicDao.findSearcherInfo(keyWord);
	}
    
	
}
