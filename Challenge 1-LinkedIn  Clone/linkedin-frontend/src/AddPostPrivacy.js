import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import Typography from "@mui/material/Typography";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import "./AddPostPrivacy.css";
import { Radio } from "@mui/material";

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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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

export default function AddPostPrivacy(props) {
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState("Anyone");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(selectedValue);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ marginTop: "-15rem" }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Who can see your post?
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Typography gutterBottom>
              Your post will be visible on feed, on your profile and in search
              results
            </Typography>

            <Typography gutterBottom>
              <div className="privacy-options">
                <div className="privacy-option">
                  <div className="statement">
                    <PublicOutlinedIcon />
                    Anyone
                  </div>
                  <div className="option-choosable">
                    <Radio
                      checked={selectedValue === "Anyone"}
                      onChange={handleChange}
                      value="Anyone"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                </div>
                <div className="privacy-option">
                  <div className="statement">
                    <PublicOutlinedIcon />
                    Anyone + Twitter
                  </div>
                  <div className="option-choosable">
                    <Radio
                      checked={selectedValue === "Anyone + Twitter"}
                      onChange={handleChange}
                      value="Anyone + Twitter"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                    />
                  </div>
                </div>
                <div className="privacy-option">
                  <div className="statement">
                    <PeopleAltOutlinedIcon />
                    Connections Only
                  </div>
                  <div className="option-choosable">
                    <Radio
                      checked={selectedValue === "Connections Only"}
                      onChange={handleChange}
                      value="Connections Only"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "C" }}
                    />
                  </div>
                </div>
                <div className="privacy-option">
                  <div className="statement">
                    <Groups2OutlinedIcon />
                    Group
                  </div>
                  <div className="option-choosable">
                    <Radio
                      checked={selectedValue === "Group"}
                      onChange={handleChange}
                      value="Group"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "D" }}
                    />
                  </div>
                </div>
              </div>
            </Typography>
          </DialogContent>
          <DialogActions>
            <div className="post-privacy-buttons">
              <button
                onClick={handleClose}
                className="back-to-post-content-btn"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={handleClose}
                className="save-post-privacy-btn"
              >
                Save
              </button>
            </div>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
