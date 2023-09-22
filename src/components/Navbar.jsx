/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="nav_con">
        <nav>
          <div className="logo">
            <img
              src="https://sass-lang.com/assets/img/logos/logo.svg"
              alt="Logo"
              width={100}
            />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
