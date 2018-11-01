package com.first.lovemusic.model;

public class UserComments {
     private  int  commentId;
     private  int  userId;
     private  String  commentContent;
     private  String  commentTime;
	public int getCommentId() {
		return commentId;
	}
	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getCommentContent() {
		return commentContent;
	}
	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}
	public String getCommentTime() {
		return commentTime;
	}
	public void setCommentTime(String commentTime) {
		this.commentTime = commentTime;
	}
	@Override
	public String toString() {
		return "UserComments [commentId=" + commentId + ", userId=" + userId + ", commentContent=" + commentContent
				+ ", commentTime=" + commentTime + "]";
	}
}
