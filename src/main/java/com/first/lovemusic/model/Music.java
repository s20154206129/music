package com.first.lovemusic.model;

public class Music {
      private  int musicId;
      private  String  musicName;
      private  String  musicTime;//歌曲时长
      private  String  musicSource;
      private  String  musicType;
      private  int   sid;  //推荐歌单的id
      
      private  int     isGroupSing;//是否组合演唱
      private  int     clickNum;//是否组合演唱
      private  String  uploadTime;
      private  int     score;//歌曲好评次数       差评  较差  一般  较好  好  极好   6等   
      private  String  musicImg;
      private  Singer  singer;
      
      private  Album   album;
      
      private  Team    team;
      
      private  SongSheet  songSheet;
      private  String    lyrics;//歌词
	public int getMusicId() {
		return musicId;
	}
	public void setMusicId(int musicId) {
		this.musicId = musicId;
	}
	public String getUploadTime() {
		return uploadTime;
	}
	public void setUploadTime(String uploadTime) {
		this.uploadTime = uploadTime;
	}
	
	
	
	public String getLyrics() {
		return lyrics;
	}
	public void setLyrics(String lyrics) {
		this.lyrics = lyrics;
	}
	public String getMusicImg() {
		return musicImg;
	}
	public void setMusicImg(String musicImg) {
		this.musicImg = musicImg;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getClickNum() {
		return clickNum;
	}
	public void setClickNum(int clickNum) {
		this.clickNum = clickNum;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getMusicName() {
		return musicName;
	}
	public void setMusicName(String musicName) {
		this.musicName = musicName;
	}
	public String getMusicTime() {
		return musicTime;
	}
	public void setMusicTime(String musicTime) {
		this.musicTime = musicTime;
	}
	public String getMusicSource() {
		return musicSource;
	}
	
	
	
	
	public SongSheet getSongSheet() {
		return songSheet;
	}
	public void setSongSheet(SongSheet songSheet) {
		this.songSheet = songSheet;
	}
	public void setMusicSource(String musicSource) {
		this.musicSource = musicSource;
	}
	
	public String getMusicType() {
		return musicType;
	}
	public void setMusicType(String musicType) {
		this.musicType = musicType;
	}
	
	public int getIsGroupSing() {
		return isGroupSing;
	}
	public void setIsGroupSing(int isGroupSing) {
		this.isGroupSing = isGroupSing;
	}
	public Singer getSinger() {
		return singer;
	}
	public void setSinger(Singer singer) {
		this.singer = singer;
	}
	public Album getAlbum() {
		return album;
	}
	public void setAlbum(Album album) {
		this.album = album;
	}
	public Team getTeam() {
		return team;
	}
	public void setTeam(Team team) {
		this.team = team;
	}
	@Override
	public String toString() {
		return "Music [musicId=" + musicId + ", musicName=" + musicName + ", musicTime=" + musicTime + ", musicSource="
				+ musicSource + ", musicType=" + musicType + ", sid=" + sid + ", isGroupSing=" + isGroupSing
				+ ", clickNum=" + clickNum + ", uploadTime=" + uploadTime + ", score=" + score + ", musicImg="
				+ musicImg + ", singer=" + singer + ", album=" + album + ", team=" + team + ", songSheet=" + songSheet
				+ ", lyrics=" + lyrics + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
     
}
