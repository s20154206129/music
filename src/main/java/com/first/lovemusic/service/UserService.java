package com.first.lovemusic.service;
import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.UserInformation;
public interface UserService {

	public Account getUser(String account, String password);

	public Account getUserByAcount(String account);

	public int registerUser(String account, String password);

	public UserInformation getUserById(int i);

	public void updateUserInfo(UserInformation userInfo);

	public int getUserLastId();

	public void addUserIdToUserInfomation(int id,String  account);
   
}
