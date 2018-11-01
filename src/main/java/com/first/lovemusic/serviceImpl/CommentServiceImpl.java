package com.first.lovemusic.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.first.lovemusic.dao.CommentDao;
import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.Music;
import com.first.lovemusic.service.CommentService;


@Service("commentService")
public class CommentServiceImpl implements CommentService {
	@Autowired
	private CommentDao dao;

	@Override
	public void addComment(Comment c) {
		dao.saveComment(c);
	}

	

	@Override
	public int getLastId() {
		return dao.findLastId();
	}
	/**
	 * �ҵ��赥  ��������
	 * @param id
	 * @return
	 */
	@Override
	public List<Comment> getCommentPageByObjectId(int sid) {
	    List<Comment> list = dao.findCommentByObjectId(sid);
	    return list;
	}
	
	
	/**
	 * �ҵ��û�����������
	 */
	@Override
	public List<Comment> getCommentsByUserId(int userId) {
		return dao.findCommentsByUserId(userId);
	}
	
	
	/**
	 * �����û����Լ��ղظ���������
	 */
	@Override
	public List<Comment> getUserCommentsByUserId(int userId) {
		return dao.findUserCommentsByUserId(userId);
	}
	
	// �û����Ӷ��ղظ���������
	@Override
	public int  addUserComments(int userId, String commentContent,String commentTime) {
		
		return dao.saveUserComments(userId,commentContent,commentTime);
	}
	
	/**
	 * ����һ��������������
	 */
	@Override
	public List<Comment> getCommentsBySid(int sid) {
		return dao.findCommentsBySid(sid);
	}
}
