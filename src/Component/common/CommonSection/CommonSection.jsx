import React from "react";
import "./style.css";
function CommonSection({ d, title, cover, d2, coverImg, photoBy ,svgColor}) {
  return (
    <div
      className="common_container"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="cover_img" style={{ backgroundColor: `${coverImg}` }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill={svgColor}>
          <path d={d}></path>
          <path d={d2}></path>
        </svg>
      </div>

      <span className="title_name">{title}</span>
      <span className="left_span">{photoBy}</span>
    </div>
  );
}

export default CommonSection;
