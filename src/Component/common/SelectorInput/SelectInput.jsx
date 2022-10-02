import React from "react";
import "./style.css";
const SelectInput = () => {
  const dicoverList = [
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
    { title: "Perks" },
];
  return (
    <div className="selector_container">
      <ul>
        {dicoverList.map(({title})=>{
            return(
                <li>{title}</li>
            )
        })}
      
      </ul>
    </div>
  );
};

export default SelectInput;
