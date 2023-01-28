import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Post.css";

const Post = ({ name, description, message }) => {
  return (
    <>
      <div className="post">
        <div className="post-header">
          <Avatar />
          <div className="post-info">
            <h5>{name}</h5>
            <p className="post-description">{description}</p>
          </div>
        </div>
        <div className="post-body">
          <p className="post-body-content">{message}</p>
          <div className="post-image"></div>
        </div>
        <div className="post-buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title={"Like"} />
          <InputOption Icon={InsertCommentOutlinedIcon} title={"Comment"} />
          <InputOption Icon={LoopOutlinedIcon} title={"Repost"} />
          <InputOption Icon={SendOutlinedIcon} title={"Send"} />
        </div>
      </div>
    </>
  );
};

export default Post;
