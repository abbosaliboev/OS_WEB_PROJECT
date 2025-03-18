import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" className="form-control mb-2" />
      <input type="password" placeholder="Password" className="form-control mb-2" />
      <button className="btn btn-primary">Login</button>
    </div>
  );
};

export default Login;
