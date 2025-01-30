import React, { useRef, useEffect, useState } from "react";


const OpenLayersMap = ({mapContainerRef, distance}) => {
  
  return (
    <div className="h-full">
      
      <div
        ref={mapContainerRef}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
        }}
      />

      {/* <div style={{ marginTop: "20px" }}>
        <h3>Select a Location:</h3>
        {locations.map((location) => (
          <button
            key={location.name}
            onClick={() => handleLocationClick(location)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {location.name}
          </button>
        ))}
      </div> */}

      
    </div>
  );
};

export default OpenLayersMap;
