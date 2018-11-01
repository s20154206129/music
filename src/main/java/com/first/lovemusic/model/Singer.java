package com.first.lovemusic.model;

public class Singer {
	private int singerId;
	private String  singerName;
	private String singerIntroduce;
	private String singerSex;
	private int singerAge;
	private String company;
	private  String  registerTime;//加入时间
	private  String  singerImg;
	private Team team;
	private  int attentionNum;//关注人数
	public int getSingerId() {
		return singerId;
	}

	public void setSingerId(int singerId) {
		this.singerId = singerId;
	}

	public String getSingerIntroduce() {
		return singerIntroduce;
	}
    
	public void setSingerIntroduce(String singerIntroduce) {
		this.singerIntroduce = singerIntroduce;
	}
    
	public int getAttentionNum() {
		return attentionNum;
	}

	public void setAttentionNum(int attentionNum) {
		this.attentionNum = attentionNum;
	}

	public String getSingerSex() {
		return singerSex;
	}
	public String getSingerImg() {
		return singerImg;
	}

	public void setSingerImg(String singerImg) {
		this.singerImg = singerImg;
	}

	public void setSingerSex(String singerSex) {
		this.singerSex = singerSex;
	}

	public int getSingerAge() {
		return singerAge;
	}

	public void setSingerAge(int singerAge) {
		this.singerAge = singerAge;
	}
	

	public String getSingerName() {
		return singerName;
	}

	public void setSingerName(String singerName) {
		this.singerName = singerName;
	}

	public String getRegisterTime() {
		return registerTime;
	}

	public void setRegisterTime(String registerTime) {
		this.registerTime = registerTime;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	@Override
	public String toString() {
		return "Singer [singerId=" + singerId + ", singerName=" + singerName + ", singerIntroduce=" + singerIntroduce
				+ ", singerSex=" + singerSex + ", singerAge=" + singerAge + ", company=" + company + ", registerTime="
				+ registerTime + ", singerImg=" + singerImg + ", team=" + team + ", attentionNum=" + attentionNum + "]";
	}

	
	
	
    
	
}
