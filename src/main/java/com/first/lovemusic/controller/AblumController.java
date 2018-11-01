package com.first.lovemusic.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.first.lovemusic.model.Album;
import com.first.lovemusic.model.SongSheet;
import com.first.lovemusic.service.AlbumService;
/**
 * 专辑控制层
 * @author 0000
 *
 */
@Controller
@RequestMapping("album")
public class AblumController {
        
	@Autowired
	private  AlbumService    albumService;
	/**
	 * 根据专辑id  获取到专辑
	 * album/albumInfo?albumId=
	 */
	@RequestMapping("/albumInfo")
	public ModelAndView getAlumInfo(HttpSession session,
			                @RequestParam("albumId")int   albumId) {
		ModelAndView model = new ModelAndView();
		
		Album  album=albumService.getAlbumById(albumId);
		model.addObject("size", album.getMusicList().size());
		
		
		model.addObject("album",album);
		model.setViewName("album/albumInfo");
		System.out.println(album);
		return model;
	}
}
