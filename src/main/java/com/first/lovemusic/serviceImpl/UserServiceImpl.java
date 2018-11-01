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
	 * ��¼
	 */
	@Override
	public Account getUser(String userName, String userPassword) {
		return userDao.findUser(userName,userPassword);
	}
	/**
	 * ����û����Ƿ�Ψһ
	 */
	@Override
	public Account getUserByAcount(String account) {
		return userDao.findUserByAcount(account);
	}
	
	/**
	 * ע��
	 */
	@Override
	public int registerUser(String account, String password) {
		return userDao.saveUser(account,password);
	}
	
	/**
	 * ����userId �����û�������Ϣ
	 */
	@Override
	public UserInformation getUserById(int userId) {
		return userDao.findUserById(userId);
	}
	/**
	 * �޸��û���Ϣ
	 */
	@Override
	public void updateUserInfo(UserInformation userInfo) {
		 userDao.updateUserInfo(userInfo);
	}
	
	
	/**
	 *    ��õ�ע���û�  Id
	 */
	@Override
	public int getUserLastId() {
		return userDao.findUserLastId();
	}
	
	/**
	 * ���û���ϸ�����
	 */
	@Override
	public void addUserIdToUserInfomation(int id,String account) {
		userDao.saveUserIdToUserInfomation(id,account);
	}
}
