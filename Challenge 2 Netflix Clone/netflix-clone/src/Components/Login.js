import React, { useState } from "react";
import "./StyleSheets/Login.css";
import { AiOutlineRight } from "react-icons/ai";
import SignIn from "./SignIn";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="login">
      <div className="login-background">
        <div className="login-nav">
          <img src="/images/nav-logo.png" alt="Nav-logo" />
          <button className="login-btn" onClick={() => setSignIn(true)}>
            Sign In
          </button>
        </div>
        <div className="linear-gradient" />
      </div>
      {signIn ? (
        <SignIn />
      ) : (
        <div className="login-body">
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button
                className="get-started-btn"
                onClick={() => setSignIn(true)}
                disabled={!email}
              >
                Get Started
                <AiOutlineRight />
              </button>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default Login;
