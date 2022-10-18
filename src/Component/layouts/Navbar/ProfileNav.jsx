import React, { useState, useContext } from "react";
import userprofile from "../../../images/userprofile.png";
import { Link } from "react-router-dom";
import './style.css'
import { AuthContext } from "../../../context/auth";
function ProfileNav() {
  const [menu, setMenu] = useState(false);
  const { logout, idUser } = useContext(AuthContext);
  console.log(idUser, "nav");
  const showmenu = () => {
    setMenu(!menu);
  };
  const logouts = () => {
    logout();
  };
  return (
    <div className="profile_nav_profile_auth">
      <div className="img_menus">
        <img src={userprofile} alt="" onClick={showmenu} />
       
          {menu ? (
            <div className="img_menu">
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
                <Link to="" onClick={showmenu}>
                  Liked photos
                </Link>
                <Link to="" onClick={showmenu}></Link>
                <Link to="" onClick={showmenu}>
                  Photo managers
                </Link>
                <Link to="" onClick={showmenu}>
                  Licebsing manager
                </Link>

                <Link to="" onClick={showmenu}>
                  Earning
                </Link>
                <br />
                <Link to="" onClick={showmenu}>
                  Memberships
                </Link>
                <Link to="" onClick={showmenu}>
                  Settings
                </Link>
                <Link to="" onClick={showmenu}>
                  Support
                </Link>
                <br />
                <Link to="" onClick={logouts}>
                  Logout
                </Link>
              </ul>
            </div>
          ) : (
            ""
          )}
       
      </div>

      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 0.75C24 0.49367 23.8691 0.255093 23.6529 0.117398C23.4366 -0.0202958 23.1651 -0.0380342 22.9328 0.0703641L0.432842 10.5703C0.154609 10.7002 -0.0163823 10.9865 0.00124378 11.293C0.0188698 11.5996 0.221553 11.8644 0.512835 11.9615L8.99999 14.7905V23.25C8.99999 23.5638 9.19542 23.8445 9.48978 23.9534C9.78414 24.0623 10.1152 23.9764 10.3194 23.7381L15.9912 17.121L23.0128 19.4615C23.2415 19.5377 23.4929 19.4994 23.6885 19.3584C23.8841 19.2174 24 18.9911 24 18.75V0.75ZM22.5 17.7094L15.9872 15.5385L11.1384 13.9222L22.5 2.56069V17.7094ZM19.7095 3.22989L9.54745 13.3919L2.77277 11.1337L19.7095 3.22989ZM10.5 21.2225V15.2905L14.4546 16.6088L10.5 21.2225Z"></path>
      </svg>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="#222222" clip-rule="evenodd" fill-rule="evenodd">
        <path d="M19.8037 13.5C19.8037 13.6908 19.8416 13.8799 19.9154 14.0571L21.3245 17.4429C21.7346 18.4282 20.9796 19.5 19.8754 19.5H4.12457C3.0204 19.5 2.26538 18.4282 2.67545 17.4429L4.08463 14.0571C4.15838 13.8799 4.19626 13.6908 4.19626 13.5V9C4.19626 4.85786 7.69011 1.5 12 1.5C16.3099 1.5 19.8037 4.85786 19.8037 9V13.5ZM1.22634 16.8858L2.63552 13.5V9C2.63552 4.02944 6.82814 0 12 0C17.1719 0 21.3645 4.02944 21.3645 9V13.5L22.7737 16.8858C23.5938 18.8564 22.0838 21 19.8754 21H15.8239C15.4624 22.7117 13.8878 24 12.0001 24C10.1124 24 8.53784 22.7117 8.17632 21H4.12457C1.91623 21 0.406179 18.8564 1.22634 16.8858ZM9.79223 21C10.1136 21.8739 10.9808 22.5 12.0001 22.5C13.0195 22.5 13.8867 21.8739 14.208 21H9.79223ZM11.2197 4.5C9.92677 4.5 8.87862 5.50736 8.87862 6.75C8.87862 7.16421 8.52923 7.5 8.09824 7.5C7.66726 7.5 7.31787 7.16421 7.31787 6.75C7.31787 4.67893 9.0648 3 11.2197 3C11.6507 3 12.0001 3.33579 12.0001 3.75C12.0001 4.16421 11.6507 4.5 11.2197 4.5Z"></path>
      </svg>
     
      <button className="profile_btns">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12.6603 4.28512C12.2956 3.90496 11.7044 3.90496 11.3397 4.28512L4.30256 11.6226C4.04977 11.8644 3.94449 12.2313 4.02836 12.5782C4.11223 12.925 4.37174 13.196 4.70428 13.284C5.03682 13.372 5.38884 13.2627 5.62116 12.9995L11.0661 7.32224V19.0262C11.0661 19.564 11.4842 20 12 20C12.5158 20 12.9339 19.564 12.9339 19.0262V7.32224L18.3788 12.9995C18.6112 13.2627 18.9632 13.372 19.2957 13.284C19.6283 13.196 19.8878 12.925 19.9716 12.5782C20.0555 12.2313 19.9502 11.8644 19.6974 11.6226L12.6603 4.28512Z"></path>
        </svg>
        <span>Upload</span>
      </button>
    </div>
  );
}

export default ProfileNav;
