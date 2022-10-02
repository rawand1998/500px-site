import React from "react";
import googlePaly from "../../images/google play.jpg";
import appStore from "../../images/app store.png";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer_conatiner">
      <div className="list_footer">
        <div className="footer_menu">
          <div className="list_content">
            <span>Company</span>
            <ul>
              <li>Newroom</li>
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="list_content">
            <span> Community</span>
            <ul>
              <li>Editors' Choice</li>
              <li>Resource Hub</li>
              <li>Quests</li>
              <li>Portfolio</li>
              <li>Groups</li>
            </ul>
          </div>
          <div className="list_content">
            <span>Licensing</span>
            <ul>
              <li> About Licensing</li>
              <li>Submission requirements</li>
              <li>Content types</li>
              <li>Distribution</li>
            </ul>
          </div>

          <div className="list_content">
            <span>Company</span>
            <ul>
              <li>
                <FaFacebook />
                FaceBook
              </li>
              <li>
                <FaInstagram />
                Instgram
              </li>
              <li>
                <FaTwitter />
                Twitter
              </li>
              <li>
                <FaLinkedinIn /> LinkedIn
              </li>
            </ul>
          </div>
        </div>

        <div className="scoicl_footer list_content">
          <span>Company</span>
          <div className="social_btns">
            <a>
              <img src={googlePaly} alt="" />
            </a>
            <a>
              <img src={appStore} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo_footer">
        <h4>© 500px</h4>
        </div>
        <div className="footer_menu_terms">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Support</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
