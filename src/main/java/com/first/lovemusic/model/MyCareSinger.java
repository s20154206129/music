package com.first.lovemusic.model;

import java.util.LinkedHashSet;
import java.util.Set;
/**
 * �ҹ�ע�ĸ���
 * @author 0000
 */
public class MyCareSinger {
    private int id;
    
    private  Account  user;
    //һ�Զ�  
    private Set<Singer>    singerList = new LinkedHashSet<Singer>();
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public Account getUser() {
		return user;
	}
	public void setUser(Account user) {
		this.user = user;
	}
	public Set<Singer> getSingerList() {
		return singerList;
	}
	public void setSingerList(Set<Singer> singerList) {
		this.singerList = singerList;
	}
	
	@Override
	public String toString() {
		return "MyCareSinger [id=" + id + ", user=" + user + ", singerList=" + singerList + "]";
	}
	
	
}

