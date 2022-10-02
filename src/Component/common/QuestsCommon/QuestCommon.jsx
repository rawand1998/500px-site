import React from "react";
import './style.css'
function QuestCommon({ img, d, title, descripton, btn ,d2}) {
  return (
    <div className="quest_common_container">
   
      <div className="content_quest">
        <div className="svg">
        <svg height="64px" width="64px">
          <path d={d}></path>
          <path d={d2}></path>
        </svg>
        </div>
  
        <span className="ques_title">{title}</span>
        <span>{descripton}</span>
        <button className="btn_common">{btn}</button>
      </div>
      <div className="img_quest">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default QuestCommon;
