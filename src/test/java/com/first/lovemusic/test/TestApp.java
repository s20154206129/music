package com.first.lovemusic.test;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.Album;
import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.FavouriteMusic;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.model.MyCareSinger;
import com.first.lovemusic.model.PageBean;
import com.first.lovemusic.model.Singer;
import com.first.lovemusic.model.SongSheet;
import com.first.lovemusic.model.UserInformation;
import com.first.lovemusic.service.AlbumService;
import com.first.lovemusic.service.CommentService;
import com.first.lovemusic.service.MusicService;
import com.first.lovemusic.service.SeacherService;
import com.first.lovemusic.service.SingerService;
import com.first.lovemusic.service.UserService;
import com.first.lovemusic.utils.JsonUtils;
import com.first.lovemusic.utils.PinyinUtils;

@RunWith(SpringJUnit4ClassRunner.class) // RunWith注解帮我们创建 Application 对象
@ContextConfiguration("classpath*:applicationContext.xml") // 指定创建容器里
															// Configuration
															// 配置文件
public class TestApp {
	@Resource(name = "musicService")
	private MusicService musicService;
	@Autowired
	private AlbumService albumService;
	@Autowired
	private CommentService commentService;
	@Autowired
	private SingerService singerService;
	@Autowired
	private UserService userService;

	@Autowired
	private SeacherService seacherService;

	/**
	 * 查找music
	 */
	@Test
	public void testapp() {
		Music m = musicService.getMusicById(1);
		System.out.println(m);
	}

	@Test
	public void testapp2() {
		List<Music> m = new ArrayList<>();
		m = musicService.getMusicsBySId(1);
		System.out.println(m);
	}

	@Test
	public void testapp3() {
		Album ablum = albumService.getAlbumById(1);
		System.out.println(ablum);
	}

	// 寻找歌单 歌曲
	@Test
	public void testapp4() {
		List<Music> m = musicService.getMusicsBySId(1);
		System.out.println(m);
	}

	@Test
	public void testapp5() {
		Singer singer = singerService.getSingerById(2);
		System.out.println(singer);
	}

	/**
	 * 专辑查找
	 */
	@Test
	public void testapp6() {
		Album album = albumService.getAlbumById(1);
		System.out.println(album);
	}
	/**
	 * 评论id
	 */
	@Test
	public void testapp18() {
		int commentId = commentService.getLastId();
		System.out.println(commentId);
	}
	/**
	 * saveComment commentObject flag 标志 评论对象是谁 1 Music,2 专辑,3 歌单 向 comment表插入数据
	 */
	@Test
	 public void testapp20(){
		 Comment c=new  Comment();
         commentService.addComment(c);
	 }
	
	/**
	 * get歌单的所有评论
	 */
	@Test
	 public void testapp21(){
		List<Comment> list = commentService.getCommentPageByObjectId(1);
		System.out.println(list);
	 }
	/**
	 * List<Music> musicList=musicService.getMusicsByClickNum(); 音乐榜单
	 */
	@Test
	public void testapp7() {
		List<Music> musicList = musicService.getMusicsByClickNum();
		System.out.println(musicList);
	}

	// List<Music> newMusicList=musicService.getMusicsByTime();
	@Test
	public void testapp8() {
		List<Music> newMusicList = musicService.getMusicsByTime();
		System.out.println(newMusicList);
	}

	@Test
	public void testapp9() {
		List<Music> newMusicList = musicService.getMusicsByScore();
		System.out.println(newMusicList);
	}

	/*
	 * 寻找前5个歌手 findSingerByTop5
	 */
	@Test
	public void findSingerByTop5() {
		List<Singer> singerList = singerService.getSingerByTop5();
		System.out.println(singerList);
	}

	/**
	 * id 查找歌单
	 */
	@Test
	public void findSongSheet() {
		SongSheet singerList = musicService.getSongSheetBySid(1);
		System.out.println(singerList);
	}

	/**
	 * 收藏音乐
	 */
	@Test
	public void test1() {
		int flag = musicService.addFavouriteMusics(1, 1);
		System.out.println(flag);
	}

	/**
	 * 我的音乐
	 */
	@Test
	public void test2() {
		List<FavouriteMusic> myMusicList = musicService.getFavouriteMusicsByUserId(1);
		System.out.println(myMusicList);
	}

	/**
	 * 我关注的歌手们 List<Singer>
	 * mySingerList=singerService.getMyCareSingersByUserId(user.getUserId());
	 */
	@Test
	public void test3() {
		List<Singer> mySingerList = singerService.getMyCareSingersByUserId(1);
		System.out.println(mySingerList);
	}

	/**
	 * 插入关注歌手
	 */
	@Test
	public void test4() {
		int mySingerList = singerService.addSingerToMyCareList(1, 5);
		System.out.println(mySingerList);
	}

	/**
	 * 判断是否已经关注 Singer
	 * singer=singerService.getSingerByUserIdAndSingerId(user.getUserId(),singerId);
	 */
	@Test
	public void test5() {
		MyCareSinger singer = singerService.getSingerByUserIdAndSingerId(1, 5);
		System.out.println(singer);
	}

	/**
	 * 收藏歌曲是否相同
	 * 
	 */
	@Test
	public void test6() {
		FavouriteMusic music = musicService.getFavouriteMusicByUserIdAndMusicId(1, 1);
		System.out.println(music);
	}

	/**
	 * 分页歌手数据
	 * 
	 */
	@Test
	public void test7() {
		PageBean singerPageBeanList = singerService.getPageSingers(1, 10);
		System.out.println(singerPageBeanList);
	}

	/**
	 * 首字母查找 中文汉字
	 */
	@Test
	public void test8() {
		final String letter = PinyinUtils.getFirst("S");// 获的 首字母
		// 根据首字母查找 汉字 或者以首字母开头的英文
		List<?> list = singerService.getListBySingerFirst(letter);
		System.out.println(list);
		System.out.println(JsonUtils.obj2String(list));
	}

	/**
	 * 查询 List<Music> list = seacherService.getSeacherInfo(keyWord);
	 */
	@Test
	public void test9() {
		List<Music> list = seacherService.getSeacherInfo("孙燕姿");
		System.out.println(list);
	}

	/**
	 * 歌单分页 PageBean songSheetPageList=musicService.getPageSongSheet(1,5);
	 * System.out.println(songSheetPageList);
	 */
	@Test
	public void test10() {
		PageBean songSheetPageList = musicService.getPageSongSheet(1, 5);
		System.out.println(songSheetPageList);
	}

	/**
	 * singerService.addSinger(singer); 增加歌手
	 */
	@Test
	public void test11() {
		Singer singer = new Singer();
		singer.setSingerName("周杰伦");
		singerService.addSinger(singer);
	}

	/**
	 * Singer s=singerService.getSingerByName(singerName);
	 */
	@Test
	public void test12() {
		Singer s = singerService.getSingerByName("周杰伦");
		System.out.println(s);
	}

	/**
	 * Album album2=albumService.getAlbumByName(albumName);
	 */
	@Test
	public void test13() {
		Album album2 = albumService.getAlbumByName("完美的一天");
		System.out.println(album2);
	}

	/**
	 * albumService.addAlbum(albumName);
	 */
	@Test
	public void test14() {
		albumService.addAlbum("蓝莲花");
	}

	/**
	 * id---》userInfo
	 */
	@Test
	public void test15() {
		UserInformation userInformation = userService.getUserById(1);
		System.out.println(userInformation);
	}

	/**
	 * 修改用户信息
	 */
	@Test
	public void test16() {
		UserInformation userInfo = new UserInformation();
		userInfo.setUserName("管理小王");
		userInfo.setUserId(1);
		userService.updateUserInfo(userInfo);
	}

	/**
	 * int id=userService.getUserLastId();
	 */
	@Test
	public void test17() {
		int id = userService.getUserLastId();
		System.out.println(id);
	}
	/**
	 * int id=userService.getUserLastId();
	 */
	@Test
	public void test18() {
		userService.addUserIdToUserInfomation(2,"");
	}
	
	/**
	 * List<Comment>  comments=commentService.getCommentsByUserId(user.getUserId());
	 */
	@Test
	public void test19() {
		List<Comment>  comments=commentService.getCommentsByUserId(1);
		System.out.println(comments);
	}
}
