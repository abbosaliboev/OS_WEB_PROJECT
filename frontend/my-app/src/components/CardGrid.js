import React from "react";
import "../assets/components/_cardGrid.scss"; 

const CardGrid = () => {
  return (
    <div className="card-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card"></div>
      ))}
    </div>
  );
};

export default CardGrid;
