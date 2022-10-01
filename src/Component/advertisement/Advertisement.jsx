import React from "react";
import "./style.css";
import advertisement from "../../images/mobile.png";
import googlePaly from '../../images/google play.jpg'
import appStore from '../../images/app store.png'
function Advertisement() {
  return (
    <div className="advertisement_conatiner">
      <div className="adver_content">
        <span>Get the app</span>
        <span>
          Join our community of over 16 million like-minded <br />
          photographers. Download the 500px app for Android and iOS today!
        </span>
        <div className="social_btns">
          <a>
           <img src={googlePaly} alt="" />
          </a>
          <a>
           <img src={appStore} alt="" />
          </a>
        </div>
      </div>
      <div className="moblie_img">
        {" "}
        <img src={advertisement} alt=""  className="moblie"/>
      </div>

      <div className="bowl_wave">
        <svg
          viewBox="0 0 619 175"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <polygon id="path-1" points="0 0 619 0 619 175 0 175"></polygon>
          </defs>
          <g
            id="Main-Screens"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Tablet-with-EC-Grid"
              transform="translate(-405.000000, -2633.000000)"
            >
              <g
                id="Purple_Swirl_Tablet"
                transform="translate(405.000000, 2633.000000)"
              >
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <g id="Clip-2"></g>
                <path
                  d="M619,175 L309.499835,175 L0,175 C0,175 68.8861022,39.732026 305.781429,75.8635544 C542.676425,111.995412 619,0 619,0 L619,112.217539 L619,175 Z"
                  id="Fill-1"
                  fill="#FFDD66"
                  mask="url(#mask-2)"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Advertisement;
