import React from "react";
import "../assets/components/_camera.scss";

// Icons
import helmetIcon from "../assets/icons/helmet.png";
import vestIcon from "../assets/icons/vest.png";
import fireIcon from "../assets/icons/fire.png";
import fallIcon from "../assets/icons/fall.png";

const alertData = [...Array(30)].map((_, i) => {
  const icons = [helmetIcon, vestIcon, fireIcon, fallIcon];
  return {
    id: i,
    time: `Feb 12, 18:${String(25 - i).padStart(2, '0')}`,
    icon: icons[i % icons.length],
    type: ["helmet", "vest", "fire", "fall"][i % 4],
  };
});

const Camera = () => {
  return (
    
    <div className="container-fluid camera-page py-5 px-5">
      <div className="row g-4">
        {/* Alerts */}
        <div className="col-12 col-lg-3">
          <h2 className="mb-4 fw-bold">Camera Alerts</h2>
          <div className="alerts-card p-3">
            {/* Filter */}
            <div className="alert-filter mb-2">
              <select className="form-select p-2">
                <option>Most recent</option>
                <option>Oldest</option>
              </select>
            </div>

            {/* Scrollable list */}
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
        <div className="col-12 col-lg-6">
          <div className="buttons d-flex justify-content-between align-items-center mb-3">
            {/* Data Filter */}
            <div className="data-filter d-flex align-items-center gap-2">
              <input
                type="date"
                className="form-control"
                style={{ maxWidth: "200px" }}
              />
              <input
                type="time"
                className="form-control"
                style={{ maxWidth: "150px" }}
              />
            </div>

            {/* Photo / Video Toggle */}
            <div className="photo-video-toggle d-flex gap-2">
              <button className="btn btn-light">
                <i className="bi bi-camera"></i>
              </button>
              <button className="btn btn-dark">
                <i className="bi bi-camera-video-fill text-white"></i>
              </button>
            </div>
          </div>

          <div className="video-section p-4 bg-light">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/35/579/807/tv-test-patterns-monoscope-wallpaper-preview.jpg"
              alt="Video"
              className="img-fluid rounded shadow"
            />
            <div className="playbar mt-3 d-flex align-items-center justify-content-between">
              <span>00:00</span>
              <input type="range" className="form-range mx-2 flex-grow-1" />
              <span>-03:46</span>
            </div>
            <div className="play-controls mt-2 d-flex justify-content-center gap-3">
              <button className="btn btn-light">⏮️</button>
              <button className="btn btn-dark">▶️</button>
              <button className="btn btn-light">⏭️</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <div className="stats-section d-flex flex-column gap-3">

            {/* ALERT */}
            <div className="alert-box d-flex align-items-center justify-content-center">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <span>12 Alerts</span>
            </div>

            {/* SUMMARY CARD */}
            <div className="summary-card p-3 rounded text-white">
              <div className="row text-center">
                <div className="col-6 mb-3">
                  <div className="label">HELMET</div>
                  <div className="count">7</div>
                  <img src={helmetIcon} alt="Helmet" width={32} />
                </div>
                <div className="col-6 mb-3">
                  <div className="label">VEST</div>
                  <div className="count">5</div>
                  <img src={vestIcon} alt="Vest" width={32} />
                </div>
                <div className="col-6">
                  <div className="label">Fire</div>
                  <div className="count">3</div>
                  <img src={fireIcon} alt="Fire" width={32} />
                </div>
                <div className="col-6">
                  <div className="label">Fall</div>
                  <div className="count">2</div>
                  <img src={fallIcon} alt="Fall" width={32} />
                </div>
              </div>
            </div>

            {/* LINE CHART */}
            <div className="chart p-3 bg-white rounded shadow-sm">
              <h6>Line Chart</h6>
              <img
                src="https://storage.googleapis.com/dycr-web/image/topic/chartjs/v2/line-graph.png"
                alt="chart"
                className="img-fluid"
              />
            </div>

            {/* DETECTIONS */}
            <div className="detections p-3 bg-white rounded shadow-sm">
              <h6>DETECTIONS</h6>
              <div className="detect-row d-flex justify-content-between mb-2">
                <span>Worker ID: 03</span>
                <span>9</span>
              </div>
              <div className="detect-row d-flex justify-content-between">
                <span>Worker ID: 02</span>
                <span>3</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Camera;
