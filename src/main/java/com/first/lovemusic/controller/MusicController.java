package com.first.lovemusic.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.lucene.index.SingleTermsEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.Album;
import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.SongSheet;
import com.first.lovemusic.model.UserInformation;
import com.first.lovemusic.service.AlbumService;
import com.first.lovemusic.service.CommentService;
import com.first.lovemusic.service.MusicService;
import com.first.lovemusic.service.SingerService;
import com.first.lovemusic.service.UserService;
import com.first.lovemusic.utils.ConvertUtils;

@Controller
@RequestMapping("music")
public class MusicController {

	private static int currentSize = 15;
	private static String destinationPath = "D:\\DevCloud2\\music\\src\\main\\webapp\\resources\\music\\";

	@Autowired
	private MusicService musicService;
  
	@Autowired
	private UserService userService;
	
	@Autowired
	private SingerService singerService;

	@Autowired
	private AlbumService albumService;
	
	@Autowired
	private CommentService commentService;
	/**
	 * 
	 * ��ҳ �����Ƽ��ĸ赥 �����ֵİ� ��פ����
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/recommentHotMusic")
	public ModelAndView getRecommentHotMusic(HttpSession session) {
		Account user = (Account) session.getAttribute("user");
		ModelAndView model = new ModelAndView();
		List<SongSheet> songSheetList = new ArrayList<SongSheet>();
		songSheetList = musicService.getSongSheetList();
		model.addObject("songSheetList", songSheetList);

		// �����
		List<Music> musicList = musicService.getMusicsByClickNum();
		model.addObject("musicList", musicList);

		// �¸��
		List<Music> newMusicList = musicService.getMusicsByTime();
		model.addObject("newMusicList", newMusicList);

		// ������
		List<Music> goodMusicList = musicService.getMusicsByScore();
		model.addObject("goodMusicList", goodMusicList);

		// ����5������
		List<Singer> singers = singerService.getSingerByTop5();
		model.addObject("singers", singers);
		model.setViewName("index");
		return model;
	}
	
	@RequestMapping("/recommentHotMusic1")
	public ModelAndView getRecommentHotMusic1(HttpSession session) {
		Account user = (Account) session.getAttribute("user");
		ModelAndView model = new ModelAndView();
		List<SongSheet> songSheetList = new ArrayList<SongSheet>();
		songSheetList = musicService.getSongSheetList();
		model.addObject("songSheetList", songSheetList);

		// �����
		List<Music> musicList = musicService.getMusicsByClickNum();
		model.addObject("musicList", musicList);

		// �¸��
		List<Music> newMusicList = musicService.getMusicsByTime();
		model.addObject("newMusicList", newMusicList);

		// ������
		List<Music> goodMusicList = musicService.getMusicsByScore();
		model.addObject("goodMusicList", goodMusicList);

		// ����5������
		List<Singer> singers = singerService.getSingerByTop5();
		model.addObject("singers", singers);
		model.setViewName("songSheetAll");
		return model;
	}

	/**
	 * ���ݸ赥Id ���Ҹ赥�����и� detailSongSheet?sid=1
	 * 
	 * @param session
	 * @return
	 */
	@RequestMapping("/detailSongSheet")
	public ModelAndView getDetailSongSheet(HttpSession session, 
			@RequestParam("sid") int sid) {
		ModelAndView model = new ModelAndView();
		Account user = (Account) session.getAttribute("user");
		if(user!=null){
			UserInformation userInfo = userService.getUserById(user.getUserId());
			model.addObject("userInfo", userInfo);// ��ϸ�û���Ϣ  
		}
		SongSheet songSheet = musicService.getSongSheetBySid(sid);
		List<Music> musicList = new ArrayList<Music>();
		// ����sid �� music ����Ҷ�Ӧ��music
		musicList = musicService.getMusicsBySId(sid);
		//�õ�һ���赥����������
		List<Comment>  commentList=commentService.getCommentsBySid(sid);
		
		                         
		
		
		
		System.out.println(commentList);
		model.addObject("songSheet", songSheet);
		model.addObject("musicList", musicList);
		model.addObject("size", musicList.size());
		model.addObject("commentList", commentList);
		model.addObject("commentListSize", commentList.size());
		// �赥 ��ǩ����
		System.out.println(songSheet.getTag());
		String[] tags = songSheet.getTag().split(",");
		model.addObject("tags", tags);
		model.setViewName("songSheet/songsheet");
		return model;
	}

	@RequestMapping("/goIndex")
	public String goIndex(HttpSession session) {
		return "redirect:/index.jsp";
	}

	/**
	 * ���ְ� �����ֵ����
	 * type  =1   �����
	 * 2  �¸��
	 * 3 ������
	 * @param session
	 * @return
	 */
	@RequestMapping("/musicClickBillboard")
	public ModelAndView getMusicUpFastBillboard(HttpSession session
			,@RequestParam("type")int  type) {
		List<Music> musicList=null;
		ModelAndView model = new ModelAndView();
		if(type==1){
			 musicList = musicService.getAllMusicsByClickNum();
			 model.addObject("type", 1);
		}else if(type==2){
			musicList=musicService.getAllMusicsByTime();
			model.addObject("type", 2);
		}else{
			musicList=musicService.getAllMusicsByScore();
			model.addObject("type", 3);
		}
		
		model.addObject("musicList", musicList);
		model.addObject("size", musicList.size());
		model.setViewName("clickBillboard");
		return model;
	}

	/**
	 * ����ĳ��Id music music/song?musicId=${music.musicId}
	 */
	@RequestMapping("/song")
	public ModelAndView getSong(HttpSession session, @RequestParam("musicId") int musicId) {
		ModelAndView model = new ModelAndView();
		Music music = musicService.getMusicById(musicId);

		String[] tags = music.getMusicType().split(",");
		model.addObject("tags", tags);
		model.addObject("music", music);
		System.out.println(music);
		model.setViewName("songSheet/songInfo");
		return model;
	}

	/**
	 * ��ø赥ҳ�� music/songSheets currentPage ��ǰҳ Ĭ��Ϊ��һҳ
	 */
	@RequestMapping("/songSheets")
	public ModelAndView getSongSheets(HttpSession session, @RequestParam("currentPage") int currentPage) {
		ModelAndView model = new ModelAndView();
		PageBean songSheetPageList = musicService.getPageSongSheet(currentPage, currentSize);
		model.addObject("songSheetPageList", songSheetPageList);
		model.setViewName("songSheet/songSheetType");
		return model;
	}

	/**
	 * ���ݱ�ǩ ���Ҹ赥 music/songSheetByTag
	 */
	@RequestMapping("/songSheetsByTag")
	public ModelAndView getSongSheetsByTag(HttpSession session, @RequestParam("tag") int tag) {
		ModelAndView model = new ModelAndView();
		List<Music> musicTagList = musicService.getSongSheetListByTag(tag);
		model.addObject("musicTagList", musicTagList);
		model.setViewName("songSheet/songSheetType");
		return model;
	}
	
	/**
	 * �޸�musicClick  music/updateMusicClickNum
	 */
	@RequestMapping(value="/updateMusicClickNum",method = RequestMethod.POST)
	@ResponseBody
	public HashMap<String, String> updateMusicClickNum(HttpSession session, 
			@RequestParam("musicId") int musicId) {
		//�޸��û����
	     int flag=musicService.updateMusicClickNum(musicId);
	     HashMap<String, String> map = new HashMap<String, String>();
		 if(flag>0){
				map.put("info","�޸�Music��������ɹ�");
		 }
		return map;
	}

	/**
	 * �ϴ�music music/music-upload
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/music-upload", method = RequestMethod.POST)
	public String upload(HttpSession session, HttpServletRequest request, HttpServletResponse response,
			@RequestParam("file") MultipartFile files, 
			@RequestParam("musicName") String musicName,
			@RequestParam("singerName") String singerName, 
			@RequestParam("albumName") String albumName,
			@RequestParam("musicType") String musicType,
			@RequestParam("singerImgFile") MultipartFile singerImgFile) throws Exception {
		Account user = (Account) session.getAttribute("user");
		Album album = new Album();
		album.setAlbumName(albumName);
		Singer singer = new Singer();
		singer.setSingerName(singerName);
		// �жϸ����Ƿ����
		Singer s = singerService.getSingerByName(singerName);
		if (s == null) { // �������
			singerService.addSinger(singer);
			// �������²��� ����id
			int singerId = singerService.getSingerLastId();
			singer.setSingerId(singerId);
		} else { //���ڸ��� ���ظ���id Music ����singerid
			singer.setSingerId(s.getSingerId());
		}

		// �ж�ר���Ƿ����
		Album album2 = albumService.getAlbumByName(albumName);
		if (album2 == null) { // ����ר��
			albumService.addAlbum(albumName);
			int albumId = albumService.getAlbumLastId();
			album.setAlbumId(albumId);
		} else {
			album.setAlbumId(album2.getAlbumId());
		}
         //��ʱ·��
		String path=request.getServletContext().getRealPath("/");
		System.out.println("path:" + path);
		path = path + "resources\\music";
		String name = "";
		String singerImgName="";
		try {
			name = files.getOriginalFilename();
			singerImgName=singerImgFile.getOriginalFilename();
			System.out.println(singerImgName);
			File file = new File(destinationPath);
			File file2 = new File(path);
			File file3 = new File(destinationPath);
			File file4 = new File(path);
			if (!file.exists()){
				file.mkdirs();
				file2.mkdirs();
				file3.mkdirs();
				file4.mkdirs();
			}
			//ͬ���������ļ� �����ϴ��ᱨ��  already exists and could not deleted
			//���ױ���   ֻ����һ��
			
			if (!new File(file, name).exists()) {   //������
				files.transferTo(new File(file, name));
				files.transferTo(new File(file2, name));
			}
			if (!new File(file3, singerImgName).exists()) {   //������
				singerImgFile.transferTo(new File(file3, singerImgName));
				singerImgFile.transferTo(new File(file4, singerImgName));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		//�жϸ��׸������ĸ��赥  ���� type  �ϴ������ֵ�  clickNum  score Ϊ0
		Integer  sid=musicService.getSongSheetSidByTag(musicType);
		Music music = new Music();
		if(sid!=null){
			music.setSid(sid);
		}else{   //��� �������� ������ �� ����һ���µĸ赥  ��Ÿ���
			//musicService.addSongSheet(songSheet);
		}
		music.setMusicName(musicName);
		music.setMusicType(musicType);
		music.setAlbum(album);
		music.setSinger(singer);
		music.setMusicSource(name);// ��¼ ������
		music.setMusicImg(singerImgName);
		music.setUploadTime(ConvertUtils.conversionTo(new Date()));
		// �жϸ������Ƿ��Ѿ����� ���ݸ���
		Music m = musicService.getMusicByMusicName(musicName);
		if (m == null) { // �ø��������� �����
			musicService.addMusic(music);
		} else {
			System.out.println("�����Ѵ���");
		}
		return "music/localupload";
	}
	/**
	 * ��ת���ϴ�musicҳ�� ��ת
	 */
	@RequestMapping("/goUpload")
	public String goUploadJsp(HttpSession session) {
		return "music/localupload";
	}

	/**
	 * ����Ա
	 * delete  ����
	 */
	@RequestMapping("/deleteMusic")
	public ModelAndView deleteMusic(HttpSession session,
			@RequestParam("musicId") int musicId,
			@RequestParam("sid") int sid) {
		ModelAndView model = new ModelAndView();
		musicService.deleteMusicById(musicId);
		List<Music> musicList = musicService.getMusicsBySId(sid);
		model.addObject("musicList", musicList);
		model.setViewName("songSheet/songsheet");
		return model;
	}
    
	
	
	/**
	 *  ����Ա�����赥
	 */
	@RequestMapping("/createSongSheet")
	public String deleteMusic(HttpSession session,
			@RequestParam("title") String title,
			@RequestParam("introduce") String introduce,
			@RequestParam("tag") String tag,
			@RequestParam("img") String img) {
		SongSheet   songSheet=new SongSheet();
		songSheet.setImg(img);
		songSheet.setIntroduce(introduce);
		songSheet.setTag(tag);
		songSheet.setTag(title);
		songSheet.setNumber(0);
		musicService.addSongSheet(songSheet);
		return "songSheet/createSongSheet";
	}
	
}
