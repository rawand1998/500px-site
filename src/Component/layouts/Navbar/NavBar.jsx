import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaMixer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileNav from "./ProfileNav";
import { AiOutlineMenu } from "react-icons/ai";
import googlePaly from "../../../images/google play.jpg";
import appStore from "../../../images/app store.png";
import { AuthContext } from "../../../context/auth";
function NavBar() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [widthScreen, setWidthScreen] = useState(0);
  const { ifLogin, logout, idUser } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);

  const changeVisible = () => {
    setVisible(!visible);
  };

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWidthScreen(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const homePage = () => {
    navigate("/");
  };
  const logouts = () => {
    logout();
  };
  const showmenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="nav">
      {widthScreen < 1103 ? (
        <div className="menu_width">
          <div className="logo" onClick={homePage}>
            <svg>
              <title>500px</title>
              <path d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"></path>
            </svg>
          </div>

          <div className="menu">
            <input placeholder="Search 500px" className="search_input" />
            {visible ? (
              <FaMixer onClick={changeVisible} />
            ) : (
              <AiOutlineMenu onClick={changeVisible} />
            )}
          </div>
        </div>
      ) : (
        <div className="navbar_conatiner mode">
          <div className="right_side">
            <div className="logo" onClick={homePage}>
              <svg viewBox="0 0 80 20" fill="#000">
                <path d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"></path>
              </svg>
            </div>
            <div className="bowl_menu">
              {!ifLogin ? (
                <ul className="navbar_menu">
                  <li>
                    {" "}
                    <Link to="" onClick={showmenu}>
                      Discover{" "}
                      <svg
                        height="16"
                        width="16"
                        viewBox="0 0 21 20"
                        fill="#6d7378"
                      >
                        <path d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="" onClick={showmenu}>
                      Licensing
                </Link>
                  </li>

                  <li>
                    <Link to="/about">
                      NFT VAULT <span className="beta">BETA</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/enterprise">Memberships</Link>
                  </li>

                  <li>
                    <Link className="btns_nav_ discover" to="register">
                      Quests
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <svg
                        width="24px"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#000"
                      >
                        <path d="M6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 Z"></path>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link className="btns_nav_ discover" to="/register">
                      Blog
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar_menu profile_linkss">
                  <li>
                    {" "}
                    <Link to="" onClick={showmenu}>
                      Discover{" "}
                      <svg
                        height="16"
                        width="16"
                        viewBox="0 0 21 20"
                        fill="#6d7378"
                      >
                        <path d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"></path>
                      </svg>
                    </Link>
                    {menu ? (
                      <div className="img_menu menus_add">
                        <ul>
                          <Link to={`/profile`} onClick={showmenu}>
                            Profile
                          </Link>
                          <Link to="" onClick={showmenu}>
                            Portfolio
                          </Link>
                          <Link to="" onClick={showmenu}>
                            Rresources
                          </Link>
                          <Link to="" onClick={showmenu}>
                            Stats
                          </Link>
                          <Link to="" onClick={showmenu}>
                            Galleries
                          </Link>
                          <br />
                          <Link to="" onClick={showmenu}>
                            Liked photos
                          </Link>
                          <Link to="" onClick={showmenu}></Link>
                          <Link to="" onClick={showmenu}>
                            Photo managers
                          </Link>
                          <Link to="" onClick={showmenu}>
                            Photo managers
                          </Link>

                          <Link to="" onClick={showmenu}>
                            Photo managers
                          </Link>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <Link to="">
                      Licensing
                   
                    </Link>
          
                  </li>
                  <li>
                    <Link to="/about">
                      NFT VAULT <span className="beta">BETA</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/enterprise">Memberships</Link>
                  </li>

                  <li>
                    <Link>
                      <svg width="24px" height="24" viewBox="0 0 24 24">
                        <path d="M6,14 C4.8954305,14 4,13.1045695 4,12 C4,10.8954305 4.8954305,10 6,10 C7.1045695,10 8,10.8954305 8,12 C8,13.1045695 7.1045695,14 6,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M18,14 C16.8954305,14 16,13.1045695 16,12 C16,10.8954305 16.8954305,10 18,10 C19.1045695,10 20,10.8954305 20,12 C20,13.1045695 19.1045695,14 18,14 Z"></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={ifLogin ? "login_right" : "right_navbar"}>
            <div className="search_input_icon">
              <svg
                fill="rgba(0,0,0,.65)"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={ifLogin ? "icon_profile" : "icon_search_nav"}
              >
                <path d="M23.7988 22.8019L17.7631 16.7676C21.3423 12.6521 21.0179 6.44079 17.0293 2.72056C13.0408 -0.999677 6.82197 -0.891481 2.96524 2.96524C-0.891481 6.82197 -0.999677 13.0408 2.72056 17.0293C6.44079 21.0179 12.6521 21.3423 16.7676 17.7631L22.8048 23.7958C23.0815 24.0633 23.5214 24.0596 23.7935 23.7875C24.0656 23.5154 24.0693 23.0755 23.8018 22.7989L23.7988 22.8019ZM4.00302 16.2901C1.0706 13.3584 0.617507 8.76356 2.92084 5.31562C5.22417 1.86769 9.64239 0.527015 13.4734 2.11354C17.3044 3.70007 19.4811 7.77191 18.6724 11.8388C17.8636 15.9057 14.2946 18.8349 10.148 18.8349C7.84206 18.8412 5.62936 17.9249 4.00302 16.2901Z"></path>
              </svg>
              <input placeholder="Search 500px" className="search_input" />
            </div>

            {ifLogin ? (
              <ProfileNav />
            ) : (
              <div className="auth_btn">
                <Link className="auth login" to="/login">
                  Log In
                </Link>
                <Link className="auth register" to="/register">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {visible ? (
        <div className="right_side_mod">
          {ifLogin ? (
            <ul className="navbar_menu_mode">
              <li>
                <Link to={`/profile/${idUser}`} onClick={changeVisible}>
                  Profile{" "}
                </Link>
              </li>
              <li>
                <Link to="" onClick={logouts}>
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={changeVisible}>
                  NFT VAULT <span className="beta">BETA</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={changeVisible}>
                  Perks
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={changeVisible}>
                  Membership
                </Link>
              </li>
            </ul>
          ) : (
            <div className="bowl_menu_mod">
              <ul className="navbar_menu_mode">
                <li>
                  <Link to="popular" onClick={changeVisible}>
                    Discover{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/clients" onClick={changeVisible}>
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={changeVisible}>
                    NFT VAULT <span className="beta">BETA</span>
                  </Link>
                </li>

                <li>
                  <Link to="/enterprise" onClick={changeVisible}>
                    Memberships
                  </Link>
                </li>

                <li>
                  <Link
                    className="btns_nav_ discover"
                    to="/register"
                    onClick={changeVisible}
                  >
                    Quests
                  </Link>
                </li>

                <li>
                  <Link
                    className="btns_nav_ discover"
                    to="/blog"
                    onClick={changeVisible}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="btns_nav_ discover"
                    to="/register"
                    onClick={changeVisible}
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="btns_nav_ discover"
                    to="/login"
                    onClick={changeVisible}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="width_footer">
            <div className="social_btns">
              <a href="/">
                <img src={googlePaly} alt="" />
              </a>
              <a href="/">
                <img src={appStore} alt="" />
              </a>
            </div>
            <div className="footer ">
              <div className="logo_footer">
                <h4>© 500px</h4>
              </div>
              <div className="footer_menu_terms">
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
                <a href="/">Support</a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;
