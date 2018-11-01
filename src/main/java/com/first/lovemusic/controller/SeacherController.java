package com.first.lovemusic.controller;

import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.first.lovemusic.model.Music;
import com.first.lovemusic.service.SeacherService;
import com.first.lovemusic.service.SingerService;
@Controller
@RequestMapping("seacher")
public class SeacherController {
	@Autowired
	private  SeacherService seacherService;
	@RequestMapping("/seacherInfo")
	public ModelAndView getSeacherInfo(HttpSession session,
			                  @RequestParam("keyWord")String keyWord) {
	    List<Music>  list = seacherService.getSeacherInfo(keyWord);
	    System.out.println(list);
	    ModelAndView   data=new ModelAndView();
	    data.addObject("resultList", list);
	    data.addObject("keyWord", keyWord);
	    data.addObject("size", list.size());
	    data.setViewName("seacherResult");
		return data;
	}
}
