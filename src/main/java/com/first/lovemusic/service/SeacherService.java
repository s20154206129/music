package com.first.lovemusic.service;

import java.util.List;

import com.first.lovemusic.model.Music;

public interface SeacherService {

	public List<Music> getSeacherInfo(String keyWord);

}
