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
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
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
