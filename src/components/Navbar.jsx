/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./../styles/Navbar.scss";
import { Link } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <div>
      <il id={props.item}>
        <Link to={props.tolink} className="item">
          {props.item}
        </Link>
      </il>
    </div>
  );
};

function Navbar() {
  // const [name, setName] = useState("Home");
  // const [num, setNum] = useState({
  //   num1: 1,
  //   num2: 2,
  //   num3: 3,
  //   num4: 4,
  // });

  // const SetNewName = () => {
  //   setName("hi");
  // };

  // const UpNum = () => {
  //   setNum((num) => ({
  //     num1: num.num1 + 1,
  //   }));
  // };

  // const LowNum = () => {
  //   setNum((num) => ({
  //     num1: num.num1 > 0 ? num.num1 - 1 : 0,
  //   }));
  // };

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
          {/* <div className="menu">
            <ul>
              <li>
                <a href="#" onClick={SetNewName}>
                  {name}
                </a>
              </li>
              <li>
                <a href="#" onClick={UpNum}>
                  {num.num1}
                </a>
              </li>
              <li>
                <a href="#" onClick={LowNum}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div> */}
          <div className="item_con">
            <ul>
              <NavbarItem item="Home" tolink="/" />
              <NavbarItem item="Skills" tolink="/skills" />
              <NavbarItem item="Works" tolink="/works" />
              <NavbarItem item="Contact" tolink="/contact" />
              <NavbarItem item="Abous" tolink="/abous" />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
