import React, { useState } from "react";

function BoxImageMove() {
  const [xPosition, setXPosition] = useState("center");
  const [yPosition, setYPosition] = useState("center");

  const handleXChange = (event) => {
    setXPosition(event.target.value);
  };

  const handleYChange = (event) => {
    setYPosition(event.target.value);
  };

  const boxStyle = {
    position: "absolute", //it consider body i.e viewport as it's parent in this condition and move from accn to it
    top:
      yPosition === "top"
        ? "20px"
        : yPosition === "center"
        ? "calc(50% - 50px)"
        : "calc(100% - 220px)",
    left:
      xPosition === "left"
        ? "20px"
        : xPosition === "center"
        ? "calc(50% - 50px)"
        : "calc(100% - 220px)",
    width: "200px",
    height: "200px",
    border: "3px solid #000",
    overFlowX: "hidden",
    overFlowY: "hidden",
    backgroundColor: "orange",
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingLeft: 47 }}>
        <label>X position:</label>
        <select
          style={{
            width: 74,
            height: 21,
            marginTop: 6,
            position: "relative",
            color: "green",
            zIndex: 1,
            fontSize: 14,
          }}
          value={xPosition}
          onChange={handleXChange}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div>
        <label>
          Y position:
          <select
            style={{
              width: 74,
              height: 21,
              marginTop: 6,
              color: "red",
              zIndex: 1,
              position: "relative",
              fontSize: 14,
            }}
            value={yPosition}
            onChange={handleYChange}
          >
            <option value="top">Top</option>
            <option value="center">Center</option>
            <option value="bottom">Bottom</option>
          </select>
        </label>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={boxStyle}></div>
      </div>
    </div>
  );
}

export default BoxImageMove;
