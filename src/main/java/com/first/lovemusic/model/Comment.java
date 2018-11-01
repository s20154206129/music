package com.first.lovemusic.model;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class Comment {
	private int commentId;
	private String commentContent;
	private String commentTime;

	private UserInformation commentUser;

	private Object commentObject;

	private Comment parentComment;

	// 该Comment 对象 所对应doc 下的所有子评论
	private Set<Comment> childrenComment = new HashSet<Comment>();

	

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
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

	public UserInformation getCommentUser() {
		return commentUser;
	}

	public void setCommentUser(UserInformation commentUser) {
		this.commentUser = commentUser;
	}

	public Object getCommentObject() {
		return commentObject;
	}

	public void setCommentObject(Object commentObject) {
		this.commentObject = commentObject;
	}

	public Comment getParentComment() {
		return parentComment;
	}

	public void setParentComment(Comment parentComment) {
		this.parentComment = parentComment;
	}

	public Set<Comment> getChildrenComment() {
		return childrenComment;
	}

	public void setChildrenComment(Set<Comment> childrenComment) {
		this.childrenComment = childrenComment;
	}

	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", commentContent=" + commentContent + ", commentTime=" + commentTime
				+ ", commentUser=" + commentUser + ", commentObject=" + commentObject + ", parentComment="
				+ parentComment + ", childrenComment=" + childrenComment + "]";
	}

}
