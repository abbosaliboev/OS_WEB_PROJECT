import React from "react";
import "../assets/components/_sidebar.scss";
import { FaHome, FaChartPie, FaClock, FaArchive, FaFileAlt, FaInfoCircle, FaUser } from "react-icons/fa"; // React-icons

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">AI</div>
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
  );
};

export default Sidebar;
