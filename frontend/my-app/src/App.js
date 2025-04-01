// App.js
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

// Layout component (main wrapper with navbar + sidebar)
function AppLayout({ isAuthenticated, setIsAuthenticated }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar toggle state
  const [activePage, setActivePage] = useState("Home");  // current page title
  const [refreshKey, setRefreshKey] = useState(0);       // used for refresh trigger

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  // Triggers a re-render of the current page (e.g., Home)
  const handleRefreshMain = () => {
    setRefreshKey((prev) => prev + 1);
  };

  // If user is not logged in and not on login page, redirect to login
  if (!isAuthenticated && !isLoginPage) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="d-flex">
      {/* Sidebar is hidden on login page */}
      {!isLoginPage && (
        <div className={`sidebar-wrapper ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}>
          <Sidebar
            toggleSidebar={setSidebarOpen}
            setActivePage={setActivePage}
          />
        </div>
      )}

      <div className="flex-grow-1">
        {/* Navbar is hidden on login page */}
        {!isLoginPage && (
          <Navbar
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onRefreshMain={handleRefreshMain}
            activePage={activePage}
          />
        )}

        <div className="content-wrapper">
          <Routes>
            {/* Main home page (refreshKey used for refresh logic) */}
            <Route path="/" element={<Home key={refreshKey} />} />

            {/* Login page - pass setIsAuthenticated as a prop */}
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />

            {/* Settings page (protected) */}
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// Root component of the app
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // track login status

  return (
    <Router>
      <AppLayout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}

export default App;
