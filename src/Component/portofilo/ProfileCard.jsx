import "./cardstyle.css";
const CardPhoto = ({ d, title, para, btn1, btn2 ,className}) => (
  <div className={className}>
   
    <svg height="40" width="40" fill="#fff" viewBox="0 0 40 40">
      <path d={d}></path>
    </svg>
    <span className="para">{title}</span>
    <span className="para_photo">{para}</span>
    {btn1}
    {btn2}
  </div>
);


const CardGalleries = ({ d, title, para, btn,classBtn }) => {
  return (
    <div className="card_catergory">
      <svg height="48" width="48" fill="#000" viewBox="0 0 24 24">
        <path d={d}></path>
      </svg>
      <span className="para_cat">{title}</span>
      <span className="para_cats">{para}</span>

      <button className={classBtn}>{btn}</button>
    </div>
  );
};

const CardEdit = ({ d, title, para, d2, name }) => {
  return (
    <div className="card_catergory">
      <svg height="64" width="64" fill="#000" viewBox="0 0 24 24">
        <path d={d}></path>
      </svg>
      <span className="para_cat">{title}</span>
      <span className="edit_pro">
        <svg height="24" width="24" fill="#fff" viewBox="0 0 24 24">
          <path d={d2}></path>
        </svg>
        <span className="edit_pro_name">{name}</span>
      </span>

      <span className="para_cats">{para}</span>
    </div>
  );
};

export { CardPhoto, CardGalleries, CardEdit };
