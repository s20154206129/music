package com.first.lovemusic.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.first.lovemusic.dao.UserDao;
import com.first.lovemusic.model.Account;
import com.first.lovemusic.model.UserInformation;
import com.first.lovemusic.service.UserService;
@Service("userService")
public class UserServiceImpl implements  UserService{
	@Autowired
	private  UserDao userDao;
	
	/**
	 * 登录
	 */
	@Override
	public Account getUser(String userName, String userPassword) {
		return userDao.findUser(userName,userPassword);
	}
	/**
	 * 检查用户名是否唯一
	 */
	@Override
	public Account getUserByAcount(String account) {
		return userDao.findUserByAcount(account);
	}
	
	/**
	 * 注册
	 */
	@Override
	public int registerUser(String account, String password) {
		return userDao.saveUser(account,password);
	}
	
	/**
	 * 根据userId 查找用户完整信息
	 */
	@Override
	public UserInformation getUserById(int userId) {
		return userDao.findUserById(userId);
	}
	/**
	 * 修改用户信息
	 */
	@Override
	public void updateUserInfo(UserInformation userInfo) {
		 userDao.updateUserInfo(userInfo);
	}
	
	
	/**
	 *    获得的注册用户  Id
	 */
	@Override
	public int getUserLastId() {
		return userDao.findUserLastId();
	}
	
	/**
	 * 向用户详细表插入
	 */
	@Override
	public void addUserIdToUserInfomation(int id,String account) {
		userDao.saveUserIdToUserInfomation(id,account);
	}
}
