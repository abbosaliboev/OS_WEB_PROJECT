// CardGrid.js
import React from "react";
import "../assets/components/_cardGrid.scss";
import sampleVideo from "../assets/videos/sample.mp4"; // 📌 Replace with real video later
import recLogo from "../assets/images/rec.png"; // 📌 Recording icon

const CardGrid = () => {
  // ✅ Dummy data for cards
  const cardData = [
    { id: 1, cam: "CAM 1", time: "01:00:24", status: "Safe", safe: 12, danger: 5 },
    { id: 2, cam: "CAM 2", time: "01:07:19", status: "Danger", safe: 8, danger: 12 },
    { id: 3, cam: "CAM 3", time: "01:15:02", status: "Safe", safe: 16, danger: 3 },
    { id: 4, cam: "CAM 4", time: "01:19:56", status: "Warning", safe: 25, danger: 9 },
    { id: 5, cam: "CAM 5", time: "00:53:03", status: "Safe", safe: 15, danger: 2 },
    { id: 6, cam: "CAM 6", time: "00:45:25", status: "Safe", safe: 26, danger: 12 },
  ];

  return (
    <div className="card-grid">
      {cardData.map((card) => (
        <div key={card.id} className="card">

          {/* 🔹 Top bar with CAM name and stats */}
          <div className="card-header">
            <div className="card-left">
              <span className="cam-label">{card.cam}</span>
              <span className="time">{card.time}</span>
            </div>

            <div className="card-right">
              {/* 🔴 Show recording icon conditionally */}
              {(card.status === "Danger" || card.status === "Warning") && (
                <div className="record">
                  <img src={recLogo} alt="record" />
                </div>
              )}
              <div className="dot orange"></div>
              <span>{card.safe}</span>
              <div className="dot red"></div>
              <span>{card.danger}</span>
            </div>
          </div>

          {/* 🔹 Status tag */}
          <div className={`status-bar ${card.status.toLowerCase()}`}>{card.status}</div>

          {/* 🔹 Video preview */}
          <video className="video" src={sampleVideo} muted autoPlay loop></video>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;