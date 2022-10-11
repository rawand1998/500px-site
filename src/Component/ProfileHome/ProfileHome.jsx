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
    </>
  );
}

export default ProfileHome;
