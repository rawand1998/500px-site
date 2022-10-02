import React from "react";
import "./style.css";
function ButtonAuth({ title, bgcolor, borderColor, color ,icon}) {
  return (
    <button
      className="button_auth_common"
      style={{
        backgroundColor: `${bgcolor}`,
        border: `${borderColor}`,
        color: `${color}`,
      }}
    >
        {icon}
     {title}
    </button>
  );
}

export default ButtonAuth;
