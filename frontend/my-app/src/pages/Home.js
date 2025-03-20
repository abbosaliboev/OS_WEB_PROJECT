import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CardGrid from "../components/CardGrid";
import "../assets/components/_home.scss"; 

const Home = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <CardGrid />
      </div>
    </div>
  );
};

export default Home;
