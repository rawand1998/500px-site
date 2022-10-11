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
    </>
  );
}

export default ProfileHome;
