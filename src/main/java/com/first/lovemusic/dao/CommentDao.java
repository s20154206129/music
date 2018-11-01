package com.first.lovemusic.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.first.lovemusic.model.Comment;
import com.first.lovemusic.model.Music;


public interface CommentDao {
	public void saveComment(Comment comment);

	public Comment getCommentById(@Param("commentId")int commentId);

	public int findLastId();

     //查找所有的该对象的所有评论
	public List<Comment> findCommentByObjectId(@Param("sid")int sid);

	public List<Comment> findCommentsByUserId(@Param("userId")int userId);

	public List<Comment> findUserCommentsByUserId(@Param("userId")int userId);

	public int  saveUserComments(@Param("userId")int userId,@Param("commentContent") String commentContent,@Param("commentTime")String commentTime);

	public List<Comment> findCommentsBySid(@Param("sid")int sid);

}
