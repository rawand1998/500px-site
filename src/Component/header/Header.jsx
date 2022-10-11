import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header_conatiner">
      <div className="header_content">
        <div className="inner_header">
          <h1>
            Discover and share the <br />
            world’s best photos
          </h1>
          <span>
            Get inspired with incredible photos from diverse styles and genres
            around the <br />
            world. We're not guided by fads—just great photography.
          </span>
          <Link className="button btn" to="/register">
            Sign up
          </Link>
        </div>
      </div>
      <div className="white_bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 128">
          <path
            class="header-wave"
            fill="#FFF"
            d="M0,471 L1440,471 L1440,386.338583 C1331.33333,357.446194 1239,343 1163,343 C821.995497,343 821.995497,463.944882 426,463.944882 C262.447846,463.944882 120.447846,438.076115 0,386.338583 L0,471 Z"
            transform="translate(0 -343)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
