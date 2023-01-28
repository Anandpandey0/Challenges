import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./demo.css";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { Avatar, TextField } from "@mui/material";
import AddPostPrivacy from "./AddPostPrivacy";

function ConfirmationDialogRaw(props) {
  const { onClose, ...other } = props;
  const [isToggled, setIsToggled] = React.useState(false);
  const [postPrivacy, setPostPrivacy] = React.useState("");
  const postPrivacyData = (data) => {
    // console.log(data);
    setPostPrivacy(data);
  };
  const [postContent, setPostContent] = React.useState("");
  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };
  const handlePostSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(setPostContent);
  };
  return (
    <Dialog
      PaperProps={{
        sx: {
          position: "absolute",
          top: "2rem",
          width: "50vw",
          maxHeight: "50vh",
        },
      }}
      onClose={onClose}
      {...other}
    >
      <form onSubmit={handlePostSubmit}>
        <DialogTitle>Create a post</DialogTitle>
        <DialogContent
          dividers
          className="post-container"
          sx={{ overflow: "hidden" }}
        >
          <div className="new-post-container">
            <div className="new-post-header">
              <Avatar />
              <div className="new-post-user-info">
                <h4>Anand Pandey</h4>
                <button
                  className="select-post-privacy"
                  onClick={() => setIsToggled(!isToggled)}
                >
                  <PublicOutlinedIcon />
                  {postPrivacy}
                  <ExpandCircleDownOutlinedIcon />
                </button>
                {isToggled ? (
                  <AddPostPrivacy onSubmit={postPrivacyData} />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="new-post-body">
              <TextField
                id="standard-multiline-static"
                className="new-post-input-content"
                placeholder="What do you want to talk about"
                multiline
                maxRows={8}
                value={postContent}
                onChange={handleInputChange}
                defaultValue="Default Value"
                variant="standard"
              />
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Cancel
          </Button>
          <button type="submit" onClick={onClose}>
            Post
          </button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default function Demo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="new-post-writer-button " onClick={() => setOpen(true)}>
        Start a post
      </button>
      <ConfirmationDialogRaw
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
