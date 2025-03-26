import React, { useState } from "react";
import "../assets/components/_sidebar.scss";
import { FaBars, FaTimes, FaHome, FaChartPie, FaClock, FaArchive, FaFileAlt, FaInfoCircle, FaUser } from "react-icons/fa"; // React-icons
import aiLogo from "../assets/images/ai-logo.png"; // images link

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar ochiq-yopiq holati

  return (
    <>
    <button className={`menu-btn ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
    </button>

    {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}


      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo"><img src={aiLogo} alt="ai-logo"/></div>
        <ul className="sidebar-menu">
          <li><FaHome /><span>Home</span></li>
          <li><FaChartPie /><span>Summary</span></li>
          <li><FaClock /><span>Timeline</span></li>
          <li><FaArchive /><span>Archive</span></li>
          <li><FaFileAlt /><span>Report</span></li>
          <li><FaInfoCircle /><span>Info</span></li>
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
