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
	 *  ����id Ѱ��  ����
	 */
	@RequestMapping("/findSinger")
	public ModelAndView getRecommentHotMusic(HttpSession session,
			          @RequestParam("singerId")int  singerId) {
		ModelAndView model = new ModelAndView();
	    Singer  singer=	singerService.getSingerById(singerId);
	    
	    //����singerId ����music   ��Ʒ
	    List<Music>   musicList=musicService.getMusicsBySingerId(singerId);      
	    
	    //����ר��
	    List<Album>   albumList=albumService.getAlbumsBySingerId(singerId);
	    
	    //���Ÿ��� 
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
	 *  �������и���
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
	 * ͨ������ĸ ��ѯ����  ���� Ӣ��
	 */
	@RequestMapping("/getFirstList")
	@ResponseBody
    public String getlist(String code){
        final String letter = PinyinUtils.getFirst(code);//����ĸ
        //��������ĸ����  ����  ����������ĸ��ͷ��Ӣ��
        List<?> list=singerService.getListBySingerFirst(letter);
        if (list.size() <= 0) {
            return JsonUtils.obj2String("û��Ҫ��ѯ������");
        }
        //list תΪ json
        return JsonUtils.obj2String(list);
    }
	
}
