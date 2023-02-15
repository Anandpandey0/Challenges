import React, { useRef } from "react";
import "./StyleSheets/SignIn.css";
import { auth } from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="signIn">
        <h1>Sign In</h1>
        <div className="email-field">
          <p>Email address</p>
          <input type="text" ref={emailRef} />
        </div>
        <div className="password-field">
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <button className="signIn-btn" type="submit" onClick={signIn}>
          Sign In
        </button>
        <div className="login-support-btns">
          <div className="remeber-me-field">
            <input type="checkbox" name="" id="" />
            <span>Remember Me</span>
          </div>
          <div className="need-help-link">
            <p>Need Help?</p>
          </div>
        </div>
        <div className="go-to-signup-page-field">
          <p>New to Netflix? </p>
          <span onClick={register}>Sign up now</span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
