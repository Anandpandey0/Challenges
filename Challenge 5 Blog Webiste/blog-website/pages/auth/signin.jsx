import React from "react";

const signin = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="Provide your email" />
        <input type="password" placeholder="Provide your password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default signin;
