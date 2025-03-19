import React from "react";
import worker from "../assets/images/worker.png"; // images link
import logo from "../assets/images/logo.png"; // images link

const Login = () => {
  return (
    <div className="container-fluid login-container">
      <div className="row vh-100">
        {/* Left */}
        <div className="col-md-6 login-left d-flex flex-column align-items-center justify-content-center">
          <img src={worker} alt="Worker Icon" className="img-fluid worker" />
          <img src={logo} alt="AI COMS Logo" className="img-fluid logo" />
          <p>Factory Safety Monitoring Systems</p>
        </div>

        {/* Right */}
        <div className="col-md-6 login-right d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-5">Login Account</h2>
          <form className="w-50">
            <div className="mb-4">
              <input type="email" className="form-control" placeholder="Email ID" />
            </div>
            <div className="mb-4">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <input type="checkbox" id="keepSignedIn" />
                <label htmlFor="keepSignedIn" className="ms-2">Keep me</label>
              </div>
              <a href="#" className="text-primary support">Support</a>
            </div>
            <button type="submit" className="btn btn-dark w-50">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
