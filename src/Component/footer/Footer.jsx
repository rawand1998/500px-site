import React from "react";
import googlePaly from "../../images/google play.jpg";
import appStore from "../../images/app store.png";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_conatiner">
      <div className="list_footer">
        <div className="footer_menu">
          <div className="list_content">
            <span className="span">Company</span>
            <ul>
              <li>Newroom</li>
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="list_content">
            <span className="span"> Community</span>
            <ul>
              <li>Editors' Choice</li>
              <li>Resource Hub</li>
              <li>Quests</li>
              <li>Portfolio</li>
              <li>Groups</li>
            </ul>
          </div>
          <div className="list_content">
            <span className="span">Licensing</span>
            <ul>
              <li> About Licensing</li>
              <li>Submission requirements</li>
              <li>Submission requirements</li>
              <li>Content types</li>
              <li>Distribution</li>
            </ul>
          </div>

          <div className="list_content">
            <span className="span">Company</span>
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

        <div className="scoicl_footer">
          <span className="span">Company</span>
          <div className="social_btns">
            <a href="/">
              <img src={appStore} alt="not found" />
            </a>
            <a href="/">
              <img src={googlePaly} alt="not found" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo_footer">
          <h4>© 500px</h4>
        </div>
        <div className="footer_menu_terms">
          <Link href="">Terms</Link>
          <Link href="">Privacy</Link>
          <Link href="">Support</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
