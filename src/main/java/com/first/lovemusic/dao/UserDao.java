package com.first.lovemusic.dao;

import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.UserInformation;

public interface UserDao {

	public Account findUser(@Param("userName")   String userName, @Param("userPassword") String userPassword);

	public Account findUserByAcount(@Param("account")String account);

	public int saveUser(@Param("account")String account,  @Param("password")String password);

	public UserInformation findUserById(@Param("userId")int userId);

	public void updateUserInfo(UserInformation userInfo);

	public int findUserLastId();

	public void saveUserIdToUserInfomation(@Param("userId")int id,@Param("account")String account);
	
	
}
