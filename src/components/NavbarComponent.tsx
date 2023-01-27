import React from "react";
import { FaBars } from "react-icons/fa";
import "../styles/NavbarComponent.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <a href="/" className="navbar-container__logo">
          Shortly
        </a>
        <div className="navbar-container__menu">
          <ul>
            <li className="navbar-container__item">
              <a href="">Features</a>
            </li>
            <li className="navbar-container__item">
              <a href="">Pricing</a>
            </li>
            <li className="navbar-container__item">
              <a href="">Resources</a>
            </li>
          </ul>
          <div className="navbar-container__buttons">
            <a href="">Login</a>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="navbar-container__toggler">
          <FaBars />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
