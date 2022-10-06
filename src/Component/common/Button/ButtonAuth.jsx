import React from "react";
import "./style.css";
function ButtonAuth({ title, bgcolor, borderColor, color, d, d2, d3, d4 ,handleClick}) {
  return (
    <button
      className="button_auth_common"
      style={{
        backgroundColor: `${bgcolor}`,
        border: `${borderColor}`,
      }}
      onClick={handleClick}
    >
      <svg height="24" width="24" fill="white">
        <path d={d}></path>
        <path d={d2}></path>
        <path d={d3}></path>
        <path d={d4}></path>
      </svg>
      <span style={{ color: `${color}` }}>{title}</span>
    </button>
  );
}

export default ButtonAuth;
