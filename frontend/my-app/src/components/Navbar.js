import React from "react";
import { Link } from "react-router-dom";
import "../assets/components/_navbar.scss"; // Import local SCSS file
import { FaRedo, FaGlobe, FaCog } from "react-icons/fa"; // React-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-title">Home</span>
      <div className="navbar-icons">
        <FaRedo className="icon" />
        <FaGlobe className="icon" />
        <FaCog className="icon" />
      </div>
    </nav>
  );
};


export default Navbar;
