package com.first.lovemusic.model;

public class Account {
     private   int  userId;
     private   String account;
     private   String password;
     private   int   accountState;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getAccountState() {
		return accountState;
	}
	public void setAccountState(int accountState) {
		this.accountState = accountState;
	}
	@Override
	public String toString() {
		return "Account [userId=" + userId + ", account=" + account + ", password=" + password + ", accountState="
				+ accountState + "]";
	}
     
	
}
