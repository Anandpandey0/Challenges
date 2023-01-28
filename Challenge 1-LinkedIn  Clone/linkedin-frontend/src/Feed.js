import { Avatar } from "@mui/material";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import BasicModal from "./BasicModel";
import Modal from "./demo";
import Demo from "./demo";
import Dialog from "./Dialog";
import firebase from "firebase/compat/app";
import { db } from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const [postDataContent, setPostDataContent] = useState("");
  const handleInputChange = (e) => {
    setPostDataContent(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log("Entered");
    // send state to server with e.g. `window.fetch`

    e.preventDefault();
    db.collection("posts").add({
      name: "Anand Pandey",
      description: "this is  a test",
      message: postDataContent,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setPostDataContent("");
  };
  const something = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
      // console.log("enter");
    }
  };
  return (
    <>
      <div className="feed">
        <div className="feed-new-post">
          <div className="new-post-top">
            <Avatar
              src="https://media.licdn.com/dms/image/C5603AQFupeFv2-DKNQ/profile-displayphoto-shrink_100_100/0/1596870504882?e=1679529600&v=beta&t=N7uPE0hmdbcs6x__pwXjIYxpxqysYeMm11xKN42SaXQ"
              sx={{
                width: 46,
                height: 46,
              }}
            ></Avatar>

            <form
              className="new-post-content-writing-board"
              onSubmit={handleSubmit}
            >
              <textarea
                value={postDataContent}
                onChange={handleInputChange}
                onKeyDown={(e) => something(e)}
                rows={8}
              />
              <button type="submit" hidden>
                Submit
              </button>
            </form>
          </div>
          <div className="new-post-bottom">
            <button className="new-post-add-photo-button">
              <PhotoSizeSelectActualIcon
                sx={{
                  color: "blue",
                  height: "25px",
                }}
              />
              Photo
            </button>
            <button className="new-post-add-video-button">
              <YouTubeIcon
                sx={{
                  color: "green",
                  height: "25px",
                }}
              />
              Video
            </button>
            <button className="new-post-add-event-button">
              <EventNoteIcon
                sx={{
                  color: "brown",
                  height: "25px",
                }}
              />
              Event
            </button>
            <button className="new-post-add-article-button">
              <AssignmentIcon
                sx={{
                  color: "rgb(207, 112, 112)",
                  height: "25px",
                }}
              />
              Write article
            </button>
          </div>
        </div>
        <div className="feed-sort">
          <div className="feed-sort-border-line">
            <hr className="border-only" />
          </div>

          <div className="feed-sort-button">
            <div className="feed-sort-statement">Sort by:</div>{" "}
          </div>
          <div className="feed-sort-menu">
            <form action="/action_page.php">
              <select name="sortType" id="sortType" className="sortType">
                <option value="Top">Top</option>
                <option value="Recent">Recent</option>
              </select>
            </form>
          </div>
        </div>
        <div className="feed-posts">
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Post
                id={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Feed;
