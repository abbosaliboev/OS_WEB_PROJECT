// Sidebar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/components/_sidebar.scss";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaChartPie,
  FaClock,
  FaArchive,
  FaFileAlt,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";
import aiLogo from "../assets/images/ai-logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const menuItems = [
    { key: "home", label: "Home", icon: <FaHome /> },
    { key: "summary", label: "Summary", icon: <FaChartPie /> },
    { key: "timeline", label: "Timeline", icon: <FaClock /> },
    { key: "archive", label: "Archive", icon: <FaArchive /> },
    { key: "report", label: "Report", icon: <FaFileAlt /> },
    { key: "info", label: "Info", icon: <FaInfoCircle /> },
  ];

  const handleMenuClick = (item) => {
    setActiveItem(item.key);
    setIsOpen(false); // close sidebar
    navigate(`/Summary`); // go to page
  };

  return (
    <>
      <button
        className={`menu-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src={aiLogo} alt="ai-logo" />
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={activeItem === item.key ? "active" : ""}
              onClick={() => handleMenuClick(item)}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <a href="/login" className="user-link">
            <FaUser className="user-icon" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
