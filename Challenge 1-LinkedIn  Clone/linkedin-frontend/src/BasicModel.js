import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { makeStyles, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import "./BasicModel.css";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import AddPostPrivacy from "./AddPostPrivacy";
import { Avatar, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Height } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [isToggled, setIsToggled] = React.useState(false);
  const [postPrivacy, setPostPrivacy] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const postPrivacyData = (data) => {
    // console.log(data);
    setPostPrivacy(data);
  };

  return (
    <>
      <button
        variant="outlined"
        onClick={handleClickOpen}
        className="new-post-writer-button "
      >
        Start a post
      </button>
      <div className="inputtttt">
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          // sx={{ marginTop: "-15rem", height: "50vh", width: "50vw" }}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Create a post
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography
              gutterBottom
              sx={{
                minHeight: "20vh",

                maxHeight: "auto",
              }}
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
                    defaultValue="Default Value"
                    variant="standard"
                  />
                </div>
              </div>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </>
  );
}
