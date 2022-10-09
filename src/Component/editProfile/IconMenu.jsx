import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
function IconMenu({ eye, setEye }) {
  const [check, setCheck] = useState(false);
  const showCheck = () => {
    setCheck(!check);
    setEye(!eye);
  };
  

  return (
    <div className="menus_show_hide">
      <div className="menu_show" onClick={showCheck}>
        <div className="show" >
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M23.9 11.6C21.4 7.5 16.9 5 12 5C7.10002 5 2.60002 7.5 0.100024 11.6C2.44156e-05 11.8 2.44156e-05 12.1 0.100024 12.4C2.60002 16.5 7.10002 19 12 19C16.9 19 21.4 16.5 23.9 12.4C24 12.1 24 11.9 23.9 11.6ZM17.7 12C17.7 15 15.2 17.4 12 17.4C8.80002 17.4 6.30002 15 6.30002 12C6.30002 9 8.90002 6.6 12 6.6C15.1 6.6 17.7 9 17.7 12ZM1.80002 12C2.90002 10.4 4.30002 9.1 6.00002 8.1C5.20002 9.3 4.70002 10.6 4.70002 12C4.70002 13.4 5.10002 14.7 5.90002 15.9C4.30002 14.9 2.80002 13.6 1.80002 12ZM18.1 15.9C18.9 14.8 19.3 13.5 19.3 12C19.3 10.6 18.9 9.3 18.1 8.1C19.8 9 21.2 10.3 22.3 12C21.2 13.6 19.7 14.9 18.1 15.9Z"></path>
            <path d="M12 15.1C13.7674 15.1 15.2 13.7121 15.2 12C15.2 10.2879 13.7674 8.90002 12 8.90002C10.2327 8.90002 8.80005 10.2879 8.80005 12C8.80005 13.7121 10.2327 15.1 12 15.1Z"></path>
          </svg>
          <span>Show</span>
        </div>
        <div className="check">{check ? <FaCheck /> : ""}</div>
      </div>

      <div className="menu_show" onClick={showCheck}>
        <div className="show">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#000"
              d="M20.3 9.9H18.2V6.4C18.2 2.8 15.4 0 12 0C8.6 0 5.8 2.8 5.8 6.4V9.9H3.7C3.3 9.9 3 10.2 3 10.6V23.3C3 23.7 3.3 24 3.7 24H20.3C20.7 24 21 23.7 21 23.3V10.6C21 10.2 20.7 9.9 20.3 9.9ZM7.2 6.4C7.2 3.7 9.4 1.5 12 1.5C14.6 1.5 16.8 3.7 16.8 6.4V9.9H7.2V6.4ZM19.6 22.6H4.4V11.3H6.5H17.6H19.7V22.6H19.6Z"
            ></path>
          </svg>
          <span>Hide</span>
        </div>
        <div className="check">{check ? <FaCheck /> : ""}</div>
      </div>
    </div>
  );
}

export default IconMenu;
