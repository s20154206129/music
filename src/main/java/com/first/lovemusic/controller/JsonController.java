package com.first.lovemusic.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.fasterxml.jackson.core.JsonEncoding;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.FavouriteMusic;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.MyCareSinger;
import com.first.lovemusic.model.MyCareSongSheet;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.SongSheet;
import com.first.lovemusic.model.UserInformation;
import com.first.lovemusic.service.CommentService;
import com.first.lovemusic.service.MusicService;
import com.first.lovemusic.service.SingerService;
import com.first.lovemusic.service.UserService;
import com.first.lovemusic.utils.ConvertUtils;

@Controller
@RequestMapping("json")
public class JsonController {

	@Autowired
	private CommentService commentService;

	@Autowired
	private MusicService musicService;

	@Autowired
	private SingerService singerService;

	
	@Autowired
	private UserService userService;
	/**
	 * 获取所有 用户对收藏歌单的所有评论
	 * @param session
	 * @param commentContext
	 * @param parentId
	 * @param docId
	 * @return
	 * @throws JsonProcessingException
	 */
	@RequestMapping("/json-songsheet-comments")
	@ResponseBody
	public String getSongSheetCommentList(HttpSession session, 
			@RequestParam("sid") int sid) throws Exception {
		List<Comment> list = commentService.getCommentPageByObjectId(sid);
		String jsonStr = "";
		if (list.size() > 0) {
			ObjectMapper objectMapper = new ObjectMapper();
			jsonStr = objectMapper.writeValueAsString(list);
			System.out.println("json" + jsonStr);
		} else {
			System.out.println("");
		}
		return jsonStr.toString();
	}
	
	
	/**
	 * 增加 用户对 歌单的评论
	 * sid歌单id
	 * @param session
	 * @param commentContext
	 * @param parentId
	 * @param docId
	 * @return
	 * @throws JsonProcessingException
	 */
	@RequestMapping(value="/json-add-songsheet-comments", method = RequestMethod.POST)
	@ResponseBody
	public String addSongSheetCommentList(HttpSession session, 
			@RequestParam("userId") int userId,
			@RequestParam("sid") int sid,
			@RequestParam("parentId") Integer parentId ,
			@RequestParam("commentContent") String commentContent) throws Exception {
		
		System.out.println("进入了歌单评论");
	    UserInformation  user=userService.getUserById(userId);
		Comment c = new Comment();
		// 日期转字符串
		String commentTime = ConvertUtils.conversionTo(new Date());
		c.setCommentTime(commentTime);
		c.setCommentUser(user);
		c.setCommentContent(commentContent);
		//歌单
		SongSheet songsheet=new  SongSheet();
		songsheet.setSid(sid);
		// 加入评论对象
		c.setCommentObject(songsheet);
		if (parentId != null) {
			Comment parentComment = new Comment();
			parentComment.setCommentId(parentId);
			c.setParentComment(parentComment);
		}
		commentService.addComment(c);
		int commentId = commentService.getLastId();
		c.setCommentId(commentId);
		ObjectMapper objectMapper = new ObjectMapper();
		String jsonStr = objectMapper.writeValueAsString(c);
		System.out.println("json:" + jsonStr);
		return jsonStr.toString();
	}
	/**
	 * 增加用户对自己收藏歌曲 的评论
	 * 
	 * @param session
	 * @param commentContext
	 * @param parentId
	 * @param docId
	 * @return
	 * @throws JsonProcessingException
	 */
	@RequestMapping(value = "/json-add-user-comments", method = RequestMethod.POST)
	@ResponseBody
	public String addUsreCommentList(HttpSession session, 
			@RequestParam("userId") int userId,
			@RequestParam("commentContent") String commentContent) throws Exception {
		// 查找user 对自己歌曲的评价
		// List<Comment> list= commentService.getUserCommentsByUserId(userId);
		System.out.println("进入User评论 "+ConvertUtils.conversionTo(new Date()));
		int flag = commentService.addUserComments(userId, commentContent,ConvertUtils.conversionTo(new Date()));
		String info = "";
		if (flag > 0) // 插入成功
			info = "评论成功";
		return info;
	}

	/**
	 * 获得用户对自己收藏歌曲 的评论
	 * 
	 * @param session
	 * @param commentContext
	 * @param parentId
	 * @param docId
	 * @return
	 * @throws JsonProcessingException
	 */
	@RequestMapping(value = "/json-get-user-comments", method = RequestMethod.POST)
	@ResponseBody
	public String getUsreCommentList(HttpSession session, @RequestParam("userId") int userId) throws Exception {
		// 查找user 对自己歌曲的评价
		// List<Comment> list= commentService.getUserCommentsByUserId(userId);
		System.out.println("获得User评论");
		List<Comment> list = commentService.getUserCommentsByUserId(1);
		String jsonStr="";
		if (list.size() > 0) {
			ObjectMapper objectMapper = new ObjectMapper();
			jsonStr = objectMapper.writeValueAsString(list);
			System.out.println("json" + jsonStr);
		}
		return jsonStr.toString();
	}

	/**
	 * 收藏音乐 也就是 我喜欢的音乐 异步请求
	 */
	@RequestMapping(value="/addloveMusics")
	@ResponseBody
	public HashMap<String, String> getLoveMusics(HttpSession session, @RequestParam("musicId") int musicId) {
		Account user = (Account) session.getAttribute("user");
		HashMap<String, String> map = new HashMap<String, String>();
		// 判断是否已经收藏
		FavouriteMusic music = musicService.getFavouriteMusicByUserIdAndMusicId(user.getUserId(), musicId);
		if (music == null) {
			// 收藏
			musicService.addFavouriteMusics(user.getUserId(), musicId);
		} else {
			map.put("info", "该歌曲已经在收藏列表");
		}
		return map;
	}
	
	/**
	 * 删除收藏的音乐
	 * 收藏音乐 也就是 我喜欢的音乐 异步请求
	 */
	@RequestMapping(value="/deleteloveMusics",method = RequestMethod.POST)
	@ResponseBody
	public HashMap<String, String> deleteLoveMusics(HttpSession session,
			@RequestParam("musicId") int musicId) {
		Account user = (Account) session.getAttribute("user");
		HashMap<String, String> map = new HashMap<String, String>();
		int flag = musicService.deleteFavouriteMusicByUserIdAndMusicId(user.getUserId(), musicId);
		if(flag>0){
			map.put("info","取消收藏歌曲");
		}
		return map;
	}
	

	/**
	 * 关注歌手 异步 json/addSingersToMyCare
	 */
	@RequestMapping(value = "/addSingersToMyCare",method = RequestMethod.POST)
	@ResponseBody
	public HashMap<String, String> addSingerToMyCare(HttpSession session, 
			@RequestParam("singerId") int singerId) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session 失效");
		}
		// 判断歌手是否 该用户 已经关注
		MyCareSinger myCareSinger = singerService.getSingerByUserIdAndSingerId(user.getUserId(), singerId);
		// 没有关注 才能 插入数据
		if (myCareSinger == null) {
			singerService.addSingerToMyCareList(user.getUserId(), singerId);
		} else { // 已关注 给出提示信息
			map.put("info", "该歌手已在关注列表");
		}
		return map;
	}
	
	
	/**
	 *   删除 关注歌手 
	 */
	@RequestMapping(value = "/deleteSingersToMyCare")
	@ResponseBody
	public HashMap<String, String> deleteSingerToMyCare(HttpSession session, @RequestParam("singerId") int singerId) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session 失效");
		}
		int flag = singerService.deleteSingerByUserIdAndSingerId(user.getUserId(), singerId);
		if(flag>0){
			map.put("info", "取消关注歌手");
		}
		return map;
	}
	
	
	
	
	/**
	 *  用户收藏歌单
	 */
	@RequestMapping(value = "/addSongSheetToMyCare")
	@ResponseBody
	public HashMap<String, String> addSongSheetToMyCare(
			HttpSession session, 
			@RequestParam("sid") int sid) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session 失效");
		}
		// 判断歌单是否 该用户 已经被收藏
		MyCareSongSheet myCareSongSheet = musicService.getSongSheetByUserIdAndSid(user.getUserId(),sid);
		if (myCareSongSheet == null) {
			musicService.addSongSheetToMyCareList(user.getUserId(), sid);
		} else {
			map.put("info", "该歌单已被收藏");
		}
		return map;
	}
    
	/**
	 *  删除用户收藏歌单
	 */
	@RequestMapping(value = "/deleteSongSheetToMyCare")
	@ResponseBody
	public HashMap<String, String> deleteSongSheetToMyCare(
			HttpSession session, 
			@RequestParam("sid") int sid) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session 失效");
		}
		int flag=musicService.deleteSongSheetFromMyCareSongSheet(user.getUserId(),sid);
		if(flag>0){
			map.put("info", "删除成功");
		}
		return map;
	}
}
