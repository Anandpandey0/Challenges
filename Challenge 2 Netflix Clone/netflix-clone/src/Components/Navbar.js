import React, { useEffect, useState } from "react";
import "./StyleSheets/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);
  const navigate = useNavigate();
  const trasitionNavbar = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", trasitionNavbar);
    return () => window.addEventListener("scroll", trasitionNavbar);
  }, []);

  return (
    <>
      <div className={`navbar ${handleShow && "navbar-black"}`}>
        <div className="navbar-contents">
          <img
            src="/images/nav-logo.png"
            onClick={() => navigate("/")}
            alt=""
            className="navbar-logo"
          />
          <img
            onClick={() => navigate("/profile")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="navbar-profile"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
