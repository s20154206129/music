package com.first.lovemusic.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.FavouriteMusic;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.UserInformation;
import com.first.lovemusic.service.CommentService;
import com.first.lovemusic.service.MusicService;
import com.first.lovemusic.service.SingerService;
import com.first.lovemusic.service.UserService;
import com.first.lovemusic.utils.ConvertUtils;

@Controller
@RequestMapping("user")
public class UserController {
	// 用户 存放 头像地址
	private static final String USERIMGADDRESS = "D:\\DevCloud2\\music\\src\\main\\webapp\\resources\\img\\user\\";
	
	@Autowired
	private UserService userService;

	@Autowired
	private MusicService musicService;

	@Autowired
	private SingerService singerService;
	
	
	@Autowired
	private CommentService commentService;

	/**
	 * 登陆
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(HttpSession session, @RequestParam("account") String account,
			@RequestParam("password") String password) {
		Account user = userService.getUser(account, password);
		UserInformation userInfo=userService.getUserById(user.getUserId());
		
		if (user != null) {
			session.setAttribute("user", user);
			session.setAttribute("userInfo", userInfo);
			System.out.println(userInfo);
		}
		//跳转到 首页的  controller 不同controller跳转
		return  "forward:/music/recommentHotMusic";
	}

	
	/**
	 * 注册 ResponseBody
	 */
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(@RequestParam("account") String account, @RequestParam("password") String password) {
		ModelAndView map = new ModelAndView();
		int result = userService.registerUser(account, password);
		if (result > 0) {
			//获得新注册用户 的id   插入到用户详细表
			int  id=userService.getUserLastId(); 
	    	 //向用户详细表插入新用户的id   默认的昵称  和用户名一致
			userService.addUserIdToUserInfomation(id,account);
			map.addObject("registerInfo", "注册成功");
		} else {
			map.addObject("registerInfo", "注册失败!");
		}
		return  "forward:/music/recommentHotMusic";
	}
	/**
	 * user/mymusics 我的音乐 展示我收藏的音乐
	 */
	@RequestMapping(value = "/mymusics")
	public ModelAndView getMyMusics(HttpSession session) {
		ModelAndView data = new ModelAndView();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session 失效");
		}
		 List<FavouriteMusic> myMusicList=musicService.getFavouriteMusicsByUserId(user.getUserId());
		//我的评论对我的音乐 的 评论
		List<Comment>  comments=commentService.getCommentsByUserId(user.getUserId());
		UserInformation userInfo = userService.getUserById(user.getUserId());
		data.addObject("userInfo", userInfo);// 详细用户信息
		data.addObject("comments", comments);
		data.addObject("commentsSize", comments.size());
		data.addObject("myMusicList", myMusicList);
		data.addObject("size", myMusicList.size());// 我喜欢的音乐歌曲数量
		data.setViewName("user/myMusics");
		return data;
	}


	/**
	 * user/mysingers 查找 我关注的歌手
	 */
	@RequestMapping(value = "/mysingers")
	public ModelAndView getMyCareSingers(HttpSession session) {
		ModelAndView data = new ModelAndView();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session 失效");
		}
		 List<Singer> mySingerList=singerService.getMyCareSingersByUserId(user.getUserId());
		UserInformation userInfo=userService.getUserById(user.getUserId());
		data.addObject("mySingerList", mySingerList);
		data.addObject("userInfo", userInfo);// 详细用户信息
		data.setViewName("user/mySingers");
		return data;
	}

	/**
	 * 修改user信息 包括上传头像等等 user/updateUserInfo
	 * @RequestParam("userId") int  userId
	 */
	@RequestMapping(value = "/updateUserInfo")
	public ModelAndView updateUserInfo(HttpSession session, 
			HttpServletRequest request, HttpServletResponse response,
			@RequestParam("file") MultipartFile files,
			@RequestParam("userName") String userName, // 昵称
			@RequestParam("userSex") String userSex,
			@RequestParam("userBirthday") String userBirthday,
			@RequestParam("userPhone") String userPhone, 
			@RequestParam("userAddress") String userAddress,
			@RequestParam("email") String email,
			@RequestParam("userIntroduce") String userIntroduce,
			@RequestParam("userId") int  userId) {
		String name = files.getOriginalFilename(); // 文件全名称
		System.out.println("文件名"+name);
		UserInformation  userInfo=new  UserInformation();
		userInfo.setEmail(email);
		userInfo.setUserAddress(userAddress);
		userInfo.setUserBirthday(userBirthday);
		userInfo.setUserId(userId);
		userInfo.setUserImg(name);
		userInfo.setUserName(userName);
		userInfo.setUserPhone(userPhone);
		userInfo.setUserSex(userSex);
		userInfo.setUserIntroduce(userIntroduce);
		//向数据库修改用户信息
	  	userService.updateUserInfo(userInfo);
	  	//上传用户头像
	  	String path=request.getServletContext().getRealPath("/");
		path = path + "resources\\img\\user\\";
		File file = new File(USERIMGADDRESS);
		File file2 = new File(path);
		File  f3=new File(file, name);
		if (!file.exists())
			file.mkdirs();
	     	file2.mkdirs();
		try {
			if (f3.exists()) {   //
				f3.delete();
			}else{
				files.transferTo(new File(file, name));
				files.transferTo(new File(file2, name));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//获取修改后的用户信息
		UserInformation  userInformation=userService.getUserById(userId);
		ModelAndView  data=new ModelAndView();
		data.addObject("userInfo", userInformation);
		data.setViewName("user/userInfo");
		return data;
	}
	/**
	 * 跳转到用户信息界面
	 * 展示user信息 user/lookUserInfo
	 */
	@RequestMapping(value = "/lookUserInfo")
	public ModelAndView getLookUserInfo(HttpSession session, 
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam("userId") int  userId) {
		UserInformation  userInformation=userService.getUserById(userId);
		ModelAndView  data=new ModelAndView();
		data.addObject("userInfo", userInformation);
		data.setViewName("user/userInfo");
		return  data;
	}
      
	/**
	 * 注销
	 */
	@RequestMapping(value = "/loginOut")
	public String goLoginOut(HttpSession session, 
			HttpServletRequest request, 
			HttpServletResponse response) {
		session.removeAttribute("user");
		return  "forward:/music/recommentHotMusic";
	}
}
