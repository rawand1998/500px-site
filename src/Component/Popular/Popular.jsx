import React from "react";
import "./style.css";
function Popular() {
  return (
    
      <div className="popluar_nav">
        <div className="pop_title">
        <span>What's popular today</span>
        <span>See recently added photos with the highest Pulse.</span>
        </div>
      
        <div className="pop_menu">
          <div className="right_list_popular">
            <ul>
              <li className="active">Popular</li>
              <li>Upcoming</li>
              <li>Fresh</li>
              <li>Editors' Choice</li>
              <li>Galleries</li>
              <li>Resource Hub</li>
            </ul>
          </div>
          <div className="left_list_populat">
            <ul>
              <li>Categories</li>
              <li>Photograher</li>
              <li>Sorted by</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Popular;
