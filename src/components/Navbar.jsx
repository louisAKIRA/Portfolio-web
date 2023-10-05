/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./../styles/Navbar.scss";

const NavbarItem = (props) => {
  return (
    <div className="item_con">
      <ul>
        <il>
          <a href="" className="item1">
            Home
          </a>
        </il>
        <il>
          <a href="" className="item2">
            Skills
          </a>
        </il>
        <il>
          <a href="" className="item3">
            Works
          </a>
        </il>
        <il>
          <a href="" className="item4">
            Contact
          </a>
        </il>
        <il>
          <a href="" className="item5">
            {props.item}
          </a>
        </il>
      </ul>
    </div>
  );
};

function Navbar() {
  const [name, setName] = useState("Home");
  const [num, setNum] = useState({
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
  });

  const SetNewName = () => {
    setName("hi");
  };

  const UpNum = () => {
    setNum((num) => ({
      num1: num.num1 + 1,
    }));
  };

  const LowNum = () => {
    setNum((num) => ({
      num1: num.num1 > 0 ? num.num1 - 1 : 0,
    }));
  };

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
          <NavbarItem item="Abous" />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
