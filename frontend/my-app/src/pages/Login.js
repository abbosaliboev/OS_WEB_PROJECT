import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import worker from "../assets/images/worker.png";
import logo from "../assets/images/logo.png";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login check
    if (email === "admin@gmail.com" && password === "123") {
      setIsAuthenticated(true);

      // Optionally save to localStorage
      if (rememberMe) {
        localStorage.setItem("isAuthenticated", "true");
      }

      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row vh-100">
        {/* Left Section */}
        <div className="col-md-6 login-left d-flex flex-column align-items-center justify-content-center text-center">
          <img src={worker} alt="Worker Icon" className="img-fluid worker mb-4" />
          <img src={logo} alt="AI COMS Logo" className="img-fluid logo mb-3" />
          <p className="px-4">Smart Manufacturing Safety Monitoring System</p>
        </div>

        {/* Right Section */}
        <div className="col-md-6 login-right d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-4">Login Account</h2>

          {/* Error message */}
          {error && <div className="alert alert-danger w-50 text-center">{error}</div>}

          <form className="w-50" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Me & Support */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label className="form-check-label ms-2" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="/support" className="text-primary text-decoration-none support">
                Support
              </a>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
