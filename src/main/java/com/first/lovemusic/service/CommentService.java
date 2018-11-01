package com.first.lovemusic.service;

import java.util.List;

import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.Music;

public interface CommentService {

	public void addComment(Comment c);

	public int getLastId();
	
	public List<Comment> getCommentPageByObjectId(int sid);

	public List<Comment> getCommentsByUserId(int userId);

	public List<Comment> getUserCommentsByUserId(int userId);

	public int  addUserComments(int userId, String commentContent,String commentTime);

	public List<Comment> getCommentsBySid(int sid);
}
