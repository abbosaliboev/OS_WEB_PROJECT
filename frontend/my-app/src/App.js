import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./assets/styles.scss";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SettingsPage from "./pages/SettingPage";
import Camera from "./pages/Camera";

// Layout wrapper for all pages except Login
function AppLayout({ isAuthenticated, setIsAuthenticated, isDarkMode, setIsDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [homeRefreshKey, setHomeRefreshKey] = useState(0);
  const [cameraRefreshKey, setCameraRefreshKey] = useState(0);
  

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  // Only refresh current page when Refresh button clicked
  const handleRefreshMain = () => {
    if (location.pathname === "/") {
      setHomeRefreshKey((prev) => prev + 1);
    } else if (location.pathname.startsWith("/camera")) {
      setCameraRefreshKey((prev) => prev + 1);
    }
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated && !isLoginPage) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={`d-flex ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      {!isLoginPage && (
        <div className={`sidebar-wrapper ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}>
          <Sidebar toggleSidebar={setSidebarOpen} setActivePage={setActivePage} />
        </div>
      )}

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && !isLoginPage && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex-grow-1">
        {/* Navbar */}
        {!isLoginPage && (
          <Navbar
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onRefreshMain={handleRefreshMain}
            activePage={activePage}
          />
        )}

        {/* Page Content */}
        <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home key={homeRefreshKey} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/settings"
            element={<SettingsPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
          />
          <Route path="/camera/:id" element={<Camera key={cameraRefreshKey} />} />
        </Routes>

        </div>
      </div>
    </div>
  );
}

// Main App
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <AppLayout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </Router>
  );
}

export default App;
