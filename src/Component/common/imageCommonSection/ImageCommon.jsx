import React from "react";
import "./style.css";
function ImageCommon({ title, descrition, btn }) {
  return (
    <div className="img_conatiner">
      <h3>{title}</h3>
      <span>{descrition}</span>
      <button className="btn_common">{btn}</button>
    </div>
  );
}

export default ImageCommon;
