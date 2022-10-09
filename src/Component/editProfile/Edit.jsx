import React, { useState } from "react";
import IconMenu from "./IconMenu";

function Edit({ data }) {
  const { name, eye1, eye2, show, hide, icon, arrow } = data;
  const [menu, showMenu] = useState(false);
  const [eye, setEye] = useState(false);
  const changeIcon = () => {
    showMenu(!menu);
  };

  return (
    <div className="edit_banner1">
      <hr></hr>
      <div className="edit_content">
        <div className="left_content">
          {icon}

          <span>{name}</span>
        </div>
        <div className="right_contents">
          <div className="right_content" onClick={changeIcon}>
            {eye ? (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d={eye1}></path>
                <path d={eye2}></path>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#000"
                  d="M20.3 9.9H18.2V6.4C18.2 2.8 15.4 0 12 0C8.6 0 5.8 2.8 5.8 6.4V9.9H3.7C3.3 9.9 3 10.2 3 10.6V23.3C3 23.7 3.3 24 3.7 24H20.3C20.7 24 21 23.7 21 23.3V10.6C21 10.2 20.7 9.9 20.3 9.9ZM7.2 6.4C7.2 3.7 9.4 1.5 12 1.5C14.6 1.5 16.8 3.7 16.8 6.4V9.9H7.2V6.4ZM19.6 22.6H4.4V11.3H6.5H17.6H19.7V22.6H19.6Z"
                ></path>
              </svg>
            )}
            {eye ? <span>{show}</span> : <span>{hide}</span>}

            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d={arrow}></path>
            </svg>
          </div>

          {menu ? <IconMenu eye={eye} setEye={setEye} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Edit;
