import "./cardstyle.css";
const CardPhoto = ({d,title,para,btn1,btn2}) => (
  <div className="cardPhoto">
    <svg height="40" width="40" fill="#fff" viewBox="0 0 40 40">
      <path d={d}></path>
    </svg>
    <span className="para">{title}</span>
    <span className="para_photo">
    
      {para}
    </span>
    {btn1}
    {btn2}
  </div>
);
const CardGalleries = ({d,title,para,btn}) => {
  return (
    <div className="card_catergory">
      <svg height="64" width="64" fill="#000" viewBox="0 0 24 24">
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
