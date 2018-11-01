package com.first.lovemusic.model;

public class Team {
        private int  teamId;
        private String teamName;
        private  int   teamNum;
        private  String  esblishTime;
        private  String  company;
        
        
        
		public int getTeamId() {
			return teamId;
		}
		public void setTeamId(int teamId) {
			this.teamId = teamId;
		}
		public String getTeamName() {
			return teamName;
		}
		public void setTeamName(String teamName) {
			this.teamName = teamName;
		}
		public int getTeamNum() {
			return teamNum;
		}
		public void setTeamNum(int teamNum) {
			this.teamNum = teamNum;
		}
		public String getEsblishTime() {
			return esblishTime;
		}
		public void setEsblishTime(String esblishTime) {
			this.esblishTime = esblishTime;
		}
		public String getCompany() {
			return company;
		}
		public void setCompany(String company) {
			this.company = company;
		}
		@Override
		public String toString() {
			return "Team [teamId=" + teamId + ", teamName=" + teamName + ", teamNum=" + teamNum + ", esblishTime="
					+ esblishTime + ", company=" + company + "]";
		}
        
		
}
