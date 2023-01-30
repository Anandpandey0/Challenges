import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./StyleSheets/Profile.css";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />

      <div className="profile-body">
        <p>Edit Profile</p>
        <div className="profile-content">
          <div className="profile-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              className="profile-logo"
            />
          </div>
          <div className="profile-right">
            <div className="email-provider">{user.email}</div>
            <div className="plan-show">Plans (Current Plan : premium)</div>
            <p>Renew date : 01/05/2001</p>
            <div className=" plans-lists standard-plan">
              <div className="plan-description">
                <p>Netflix Standard</p>
                <span>480p</span>
              </div>
              <button className="standard-plan-btn">Subscribe</button>
            </div>
            <div className=" plans-lists basic-plan">
              <div className="plan-description">
                <p>Netflix Basic</p>
                <span>360p</span>
              </div>
              <button className="basic-plan-btn">Subscribe</button>
            </div>
            <div className=" plans-lists premium-plan">
              <div className="plan-description">
                <p>Netflix Premium</p>
                <span>1080p</span>
              </div>
              <button className="premium-plan-btn">Subscribe</button>
            </div>
            <button
              className="profile-sign-out-btn"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
