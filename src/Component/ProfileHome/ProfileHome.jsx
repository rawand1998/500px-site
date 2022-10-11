import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function ProfileHome() {
  return (
    <>
      <div className="home_profile_conatiner">
        <h2>Feed Home</h2>
        <span>See photos and published Galleries from people you follow.</span>
        <div className="home_Profile_link">
          <Link>Home</Link>
        </div>
      </div>
      <div className="welcome_home">
        <span>Welcome to 500px</span>
        <span>Follow photographers to get started</span>
      </div>
      <div className="features">
        <div className="fearures_banner_one">
          <div className="feature_banner_text">
            <span className="feature_label">Featured photographers</span>
            <div className="dimss">
              <span className="para_dimss">Follow to explore new work •</span>
              <button className="dismiss_btn">Dismiss</button>
            </div>
          </div>
          <div className="view_banner">
            <span>View all</span>
          </div>
        </div>
      </div>
      <div className="scroll"></div>
      <div className="explore_section">
      <div className="feature_banner_text">
            <span className="feature_label">Explore the community</span>
              <span className="para_dimss">Discover photos from all over the world</span>
          
          </div>
      </div>
    </>
  );
}

export default ProfileHome;
