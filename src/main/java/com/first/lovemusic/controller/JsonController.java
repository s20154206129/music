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
	 * ��ȡ���� �û����ղظ赥����������
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
	 * ���� �û��� �赥������
	 * sid�赥id
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
		
		System.out.println("�����˸赥����");
	    UserInformation  user=userService.getUserById(userId);
		Comment c = new Comment();
		// ����ת�ַ���
		String commentTime = ConvertUtils.conversionTo(new Date());
		c.setCommentTime(commentTime);
		c.setCommentUser(user);
		c.setCommentContent(commentContent);
		//�赥
		SongSheet songsheet=new  SongSheet();
		songsheet.setSid(sid);
		// �������۶���
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
	 * �����û����Լ��ղظ��� ������
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
		// ����user ���Լ�����������
		// List<Comment> list= commentService.getUserCommentsByUserId(userId);
		System.out.println("����User���� "+ConvertUtils.conversionTo(new Date()));
		int flag = commentService.addUserComments(userId, commentContent,ConvertUtils.conversionTo(new Date()));
		String info = "";
		if (flag > 0) // ����ɹ�
			info = "���۳ɹ�";
		return info;
	}

	/**
	 * ����û����Լ��ղظ��� ������
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
		// ����user ���Լ�����������
		// List<Comment> list= commentService.getUserCommentsByUserId(userId);
		System.out.println("���User����");
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
	 * �ղ����� Ҳ���� ��ϲ�������� �첽����
	 */
	@RequestMapping(value="/addloveMusics")
	@ResponseBody
	public HashMap<String, String> getLoveMusics(HttpSession session, @RequestParam("musicId") int musicId) {
		Account user = (Account) session.getAttribute("user");
		HashMap<String, String> map = new HashMap<String, String>();
		// �ж��Ƿ��Ѿ��ղ�
		FavouriteMusic music = musicService.getFavouriteMusicByUserIdAndMusicId(user.getUserId(), musicId);
		if (music == null) {
			// �ղ�
			musicService.addFavouriteMusics(user.getUserId(), musicId);
		} else {
			map.put("info", "�ø����Ѿ����ղ��б�");
		}
		return map;
	}
	
	/**
	 * ɾ���ղص�����
	 * �ղ����� Ҳ���� ��ϲ�������� �첽����
	 */
	@RequestMapping(value="/deleteloveMusics",method = RequestMethod.POST)
	@ResponseBody
	public HashMap<String, String> deleteLoveMusics(HttpSession session,
			@RequestParam("musicId") int musicId) {
		Account user = (Account) session.getAttribute("user");
		HashMap<String, String> map = new HashMap<String, String>();
		int flag = musicService.deleteFavouriteMusicByUserIdAndMusicId(user.getUserId(), musicId);
		if(flag>0){
			map.put("info","ȡ���ղظ���");
		}
		return map;
	}
	

	/**
	 * ��ע���� �첽 json/addSingersToMyCare
	 */
	@RequestMapping(value = "/addSingersToMyCare",method = RequestMethod.POST)
	@ResponseBody
	public HashMap<String, String> addSingerToMyCare(HttpSession session, 
			@RequestParam("singerId") int singerId) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session ʧЧ");
		}
		// �жϸ����Ƿ� ���û� �Ѿ���ע
		MyCareSinger myCareSinger = singerService.getSingerByUserIdAndSingerId(user.getUserId(), singerId);
		// û�й�ע ���� ��������
		if (myCareSinger == null) {
			singerService.addSingerToMyCareList(user.getUserId(), singerId);
		} else { // �ѹ�ע ������ʾ��Ϣ
			map.put("info", "�ø������ڹ�ע�б�");
		}
		return map;
	}
	
	
	/**
	 *   ɾ�� ��ע���� 
	 */
	@RequestMapping(value = "/deleteSingersToMyCare")
	@ResponseBody
	public HashMap<String, String> deleteSingerToMyCare(HttpSession session, @RequestParam("singerId") int singerId) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session ʧЧ");
		}
		int flag = singerService.deleteSingerByUserIdAndSingerId(user.getUserId(), singerId);
		if(flag>0){
			map.put("info", "ȡ����ע����");
		}
		return map;
	}
	
	
	
	
	/**
	 *  �û��ղظ赥
	 */
	@RequestMapping(value = "/addSongSheetToMyCare")
	@ResponseBody
	public HashMap<String, String> addSongSheetToMyCare(
			HttpSession session, 
			@RequestParam("sid") int sid) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session ʧЧ");
		}
		// �жϸ赥�Ƿ� ���û� �Ѿ����ղ�
		MyCareSongSheet myCareSongSheet = musicService.getSongSheetByUserIdAndSid(user.getUserId(),sid);
		if (myCareSongSheet == null) {
			musicService.addSongSheetToMyCareList(user.getUserId(), sid);
		} else {
			map.put("info", "�ø赥�ѱ��ղ�");
		}
		return map;
	}
    
	/**
	 *  ɾ���û��ղظ赥
	 */
	@RequestMapping(value = "/deleteSongSheetToMyCare")
	@ResponseBody
	public HashMap<String, String> deleteSongSheetToMyCare(
			HttpSession session, 
			@RequestParam("sid") int sid) {
		HashMap<String, String> map = new HashMap<String, String>();
		Account user = (Account) session.getAttribute("user");
		if (user == null) {
			System.out.println("session ʧЧ");
		}
		int flag=musicService.deleteSongSheetFromMyCareSongSheet(user.getUserId(),sid);
		if(flag>0){
			map.put("info", "ɾ���ɹ�");
		}
		return map;
	}
}
