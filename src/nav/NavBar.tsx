import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="contaner">
      <div>
        <p>WINKL</p>
      </div>
      <div className="sec-contaner">
        <ul>
          <li>HOME</li>
          <li>PRODUCT</li>
          <li>ABOUT</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
