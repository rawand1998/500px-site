import React from "react";
import "./style.css";
function ButtonAuth({ title, bgcolor, borderColor, color, d, d2, d3, d4 ,handleClick,fill,fill2,fill3,fill4}) {
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
        <path d={d} fill={fill}></path>
        <path d={d2} fill={fill2}></path>
        <path d={d3} fill={fill3}></path>
        <path d={d4} fill={fill4}></path>
      </svg>
      <span style={{ color: `${color}` }}>{title}</span>
    </button>
  );
}

export default ButtonAuth;
