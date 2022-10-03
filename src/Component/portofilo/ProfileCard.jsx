import { Link } from "react-router-dom";
import "./cardstyle.css";
const CardPhoto = ({d,title,para,btn1,btn2}) => (
  <div className="cardPhoto">
    <svg height="64" width="64" fill="#fff">
      <path d={d}></path>
    </svg>
    <span className="para">{title}</span>
    <span className="para_photo">
    
      {para}
    </span>
    <Link >{btn1}</Link>
    <Link >{btn2}</Link>
  </div>
);
const CardGalleries = ({d,title,para,btn}) => {
  return (
    <div className="card_catergory">
      <svg height="64" width="64" fill="#000">
        <path d={d}></path>
      </svg>
      <span className="para_cat">{title}</span>
      <span className="para_cats">
       {para}
      </span>
      <button className="cat_btn button_profile">{btn}</button>
    </div>
  );
};


export { CardPhoto, CardGalleries};
