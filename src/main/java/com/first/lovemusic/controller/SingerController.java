package com.first.lovemusic.controller;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.first.lovemusic.model.Album;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.SongSheet;
import com.first.lovemusic.service.AlbumService;
import com.first.lovemusic.service.MusicService;
import com.first.lovemusic.service.SingerService;
import com.first.lovemusic.utils.JsonUtils;
import com.first.lovemusic.utils.PinyinUtils;

@Controller
@RequestMapping("singer")
public class SingerController {
	private  static  int  currentSize=15;
	@Autowired
	private  SingerService singerService;
	@Autowired
	private  MusicService musicService;
	@Autowired
	private  AlbumService albumService;
	/**
	/**
	 *  根据id 寻找  歌手
	 */
	@RequestMapping("/findSinger")
	public ModelAndView getRecommentHotMusic(HttpSession session,
			          @RequestParam("singerId")int  singerId) {
		ModelAndView model = new ModelAndView();
	    Singer  singer=	singerService.getSingerById(singerId);
	    
	    //根据singerId 查找music   作品
	    List<Music>   musicList=musicService.getMusicsBySingerId(singerId);      
	    
	    //查找专辑
	    List<Album>   albumList=albumService.getAlbumsBySingerId(singerId);
	    
	    //热门歌手 
	    List<Singer>    hotSingerList= singerService.getSingerByHot5();
	    System.out.println(singer);
		model.addObject("singer",singer);
		model.addObject("musicList",musicList);
		model.addObject("hotSingerList",hotSingerList);
		model.addObject("size",musicList.size());
		model.addObject("albumList",albumList);
		model.setViewName("singer/singer");
		return model;
	}
	/**
	 *  查找所有歌手
	 */
	@RequestMapping("/findAllSingers")
	public ModelAndView getAllSingers(HttpSession session,
			@RequestParam("currentPage")int currentPage){
		ModelAndView model = new ModelAndView();
//      PageBean  singerPageBeanList=singerService.getPageSingers(currentPage,currentSize);
		List<Singer>    singersList= singerService.getAllSingers();
//		model.addObject("singerPageBeanList",singerPageBeanList);
		model.addObject("singersList",singersList);
		model.setViewName("singer/allsinger");
		return model;
	}
	
	
	/**
	 * 通过首字母 查询歌手  中文 英文
	 */
	@RequestMapping("/getFirstList")
	@ResponseBody
    public String getlist(String code){
        final String letter = PinyinUtils.getFirst(code);//首字母
        //根据首字母查找  汉字  或者以首字母开头的英文
        List<?> list=singerService.getListBySingerFirst(letter);
        if (list.size() <= 0) {
            return JsonUtils.obj2String("没有要查询的数据");
        }
        //list 转为 json
        return JsonUtils.obj2String(list);
    }
	
}
