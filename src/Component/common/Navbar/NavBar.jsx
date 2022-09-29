import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../../images/logo.PNG'

import { AiOutlineMenu } from "react-icons/ai";
import { FaMixer } from "react-icons/fa";
function NavBar() {
  const [widthScreen, setWidthScreen] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(false);
  const element = useRef(null);

  const handleScroll = (e) => {
    let fromTop = window.pageYOffset;
    fromTop > 150 ? setSticky(true) : setSticky(false);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  // check when scroll down
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  
  return (
    <>
    {widthScreen < 1103 ? (
      <div className="menu_width">
        
        <div className="logo">
            <img src={logo}/>
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
    <div className="navbar_conatiner">
      <div className="bowl_menu">
        <div className="logo">
            <img src={logo}/>
        </div>
        <ul className="navbar_menu">
          <li>
            <Link to="/">Discover</Link>
          </li>
          <li>
            <Link to="/clients">Licensing</Link>
          </li>
          <li>
            <Link to="/enterprise">Memberships</Link>
          </li>
          <li>
            <Link to="/about">NFT VAULT</Link>
          </li>
          <li>
            <Link className="btns_nav_ find" to="/findwork">
              Memberships
            </Link>
          </li>
          <li>
            <Link className="btns_nav_ discover" to="/register">
              Quests
            </Link>
          </li>
          <li>
            <Link className="btns_nav_ discover" to="/register">
              ...
            </Link>
          </li>
          <li>
            <Link className="btns_nav_ discover" to="/register">
            Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="right_navbar">
        <input placeholder="Search 500px" className="search_input" />
        <div className="auth_btn">
        <Link className="auth login">Login</Link>
        <Link className="auth register">Sign up</Link>
        </div>
      
      </div>
    </div>
      )}
    </>
  );

}

export default NavBar;
