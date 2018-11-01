package com.first.lovemusic.model;

public class UserInformation {
       private  int  userId;
       private  String  userName;//Í«≥∆
       private  String  userSex;
       private  String  userBirthday;
       private  String  userPhone;
       private  String  userAddress;
       private  String  userImg;
       private  String email;
       private  String userIntroduce;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserImg() {
		return userImg;
	}
	public void setUserImg(String userImg) {
		this.userImg = userImg;
	}
	
	public String getUserIntroduce() {
		return userIntroduce;
	}
	public void setUserIntroduce(String userIntroduce) {
		this.userIntroduce = userIntroduce;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserSex() {
		return userSex;
	}
	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}
	public String getUserBirthday() {
		return userBirthday;
	}
	public void setUserBirthday(String userBirthday) {
		this.userBirthday = userBirthday;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "UserInformation [userId=" + userId + ", userName=" + userName + ", userSex=" + userSex
				+ ", userBirthday=" + userBirthday + ", userPhone=" + userPhone + ", userAddress=" + userAddress
				+ ", userImg=" + userImg + ", email=" + email + ", userIntroduce=" + userIntroduce + "]";
	}
	
}
