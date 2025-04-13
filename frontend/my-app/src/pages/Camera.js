import React, { useRef, useState, useEffect } from "react";
import "../assets/components/_camera.scss";
import helmetIcon from "../assets/icons/helmet.png";
import vestIcon from "../assets/icons/vest.png";
import fireIcon from "../assets/icons/fire.png";
import fallIcon from "../assets/icons/fall.png";
import Playbar from "../components/Playbar";

const alertData = [...Array(30)].map((_, i) => {
  const icons = [helmetIcon, vestIcon, fireIcon, fallIcon];
  return {
    id: i,
    time: `Feb 12, 18:${String(25 - i).padStart(2, "0")}`,
    icon: icons[i % icons.length],
    type: ["helmet", "vest", "fire", "fall"][i % 4],
  };
});

const detectData = [...Array(30)].map((_, i) => {
  const workerIds = ["01", "02", "03", "04", "05"];
  return {
    id: i,
    workerId: `Worker ID: ${workerIds[i % workerIds.length]}`,
    count: Math.floor(Math.random() * 10) + 1,
  };
});

const Camera = () => {
  return (
    <div className="container-fluid camera-page">
      <div className="row g-4">
        {/* Alerts */}
        <div className="col-12 col-lg-3 px-5">
          <h2 className="mb-4 fw-bold">Camera Alerts</h2>
          <div className="alerts-card">
            <div className="alert-filter mb-2">
              <select className="form-select px-2">
                <option>Most recent</option>
                <option>Oldest</option>
              </select>
            </div>
            <div className="alert-list">
              {alertData.map((alert) => (
                <div
                  key={alert.id}
                  className="alert-item d-flex justify-content-between align-items-center p-2 mb-2 rounded"
                >
                  <span>{alert.time}</span>
                  <img src={alert.icon} alt={alert.type} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="col-12 col-lg-5 px-5">
          <div className="buttons d-flex justify-content-between align-items-center mb-3">
            <div className="data-filter d-flex align-items-center gap-2">
              <input type="date" className="form-control" style={{ maxWidth: "200px" }} />
              <input type="time" className="form-control" style={{ maxWidth: "150px" }} />
            </div>
            <div className="photo-video-toggle d-flex gap-2">
              <button className="btn bg-light">
                <i className="bi bi-camera text-dark"></i>
              </button>
              <button className="btn bg-light">
                <i className="bi bi-camera-video-fill text-dark"></i>
              </button>
            </div>
          </div>

          <div className="video-section p-4 bg-light">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/35/579/807/tv-test-patterns-monoscope-wallpaper-preview.jpg"
              alt="Video"
              className="img-fluid rounded shadow"
            />
            <Playbar />
          </div>
        </div>

        {/* Summary */}
        <div className="col-12 col-lg-3 px-5">
          <div className="stats-section d-flex flex-column gap-4">
            <div className="alert-box d-flex align-items-center justify-content-center">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <span>12 Alerts</span>
            </div>
            <div className="summary-card p-4 rounded text-white">
              <div className="row text-center">
                {[
                  { label: "Helmet", icon: helmetIcon, count: 7 },
                  { label: "Vest", icon: vestIcon, count: 5 },
                  { label: "Fire", icon: fireIcon, count: 3 },
                  { label: "Fall", icon: fallIcon, count: 2 },
                ].map(({ label, icon, count }) => (
                  <div className="col-6 mb-3" key={label}>
                    <div className="label">{label}</div>
                    <div className="count-box d-flex align-items-center justify-content-center gap-3">
                      <div className="count">{count}</div>
                      <div className="summary-icon">
                        <img src={icon} alt={label} width={24} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chart p-3 bg-white rounded shadow-sm">
              <h6>Line Chart</h6>
              <img
                src="https://storage.googleapis.com/dycr-web/image/topic/chartjs/v2/line-graph.png"
                alt="chart"
                className="img-fluid"
              />
            </div>
            <div className="detections bg-white rounded shadow-sm">
              <h6>DETECTIONS</h6>
              <div className="detect-list">
                {detectData.map((detect) => (
                  <div key={detect.id} className="detect-row d-flex justify-content-between mb-2">
                    <span>{detect.workerId}</span>
                    <span>{detect.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Camera;