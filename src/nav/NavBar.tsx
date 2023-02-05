import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="contaner">
      <div>
        <p className=" logo">WINKL</p>
      </div>
      <div className="Input">
        <input />
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
