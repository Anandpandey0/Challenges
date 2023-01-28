import { Avatar } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Groups3Icon from "@mui/icons-material/Groups3";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">
        <Groups3Icon />
      </span>
      <p>{topic}</p>
    </div>
  );
  const recentGroupItem = (groupName) => (
    <div className="sidebar-recentGroupItem">
      <span className="sidebar-hash">
        <Groups3Icon />
      </span>
      <p>{groupName}</p>
    </div>
  );
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-top-avatar-info">
            <img
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW4lMjBjb3ZlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <Avatar
              src="https://media.licdn.com/dms/image/C5603AQFupeFv2-DKNQ/profile-displayphoto-shrink_100_100/0/1596870504882?e=1679529600&v=beta&t=N7uPE0hmdbcs6x__pwXjIYxpxqysYeMm11xKN42SaXQ"
              sx={{
                width: 56,
                height: 56,
                border: "solid 2px white",
              }}
              className="sidebar-top-avatar"
            ></Avatar>
            <div className="sidebar-top-avatar-profile-info">
              <div className="sidebar-top-avatar-profile-name">
                Anand Pandey
              </div>
              <div className="sidebar-top-avatar-profile-summary">
                Full Stack Web Developer || Competitive Programmer || Javascript
              </div>
            </div>

            <div className="sidebar-top-linkedin-info">
              <div className="profile-views-info">
                <div className="profile-views-info-statement">
                  Who's viewed your profile
                </div>
                <div className="profile-views-info-count">200</div>
              </div>
              <div className="profile-post-imp">
                <div className="profile-post-imp-statement">
                  Impressions on your post
                </div>
                <div className="profile-post-imp-count">200</div>
              </div>
            </div>
          </div>
          <div className="sidebar-premium-features">
            <p className="sidebar-premium-features-info">
              See your Premium features
            </p>
            <p className="sidebar-my-items">
              <BookmarkIcon /> My items
            </p>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-bottom-header">
            <div className="sidebar-bottom-header-topic">Recent</div>
            <div className="sidebar-bottom-headear-minimize-button">
              <KeyboardArrowUpIcon />
            </div>
          </div>
          <div className="recentItem-body">
            {recentItem("reactjs")}
            {recentItem("reactjs")}
            {recentItem("reactjs")}
            {recentItem("reactjs")}
            {recentItem("reactjs")}
          </div>
          <div className="recentGroups-body">
            <div className="sidebar-bottom-group">
              <div className="sidebar-bottom--group-topic">Groups</div>
              <div className="sidebar-bottom-headear-minimize-button">
                <KeyboardArrowUpIcon />
              </div>
            </div>
            <div className="recentGroupItem-body">
              {recentGroupItem("reactjs")}
              {recentGroupItem("reactjs")}
              {recentGroupItem("reactjs")}
              {recentGroupItem("reactjs")}
              {recentGroupItem("reactjs")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
