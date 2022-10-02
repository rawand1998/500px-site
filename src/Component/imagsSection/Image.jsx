import React from "react";
import ImageCommon from "../common/imageCommonSection/ImageCommon";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img88 from "../../images/img.png";
import "./style.css";
function Image() {
  const img = [
    { image: img88, title: "Photo by Raimondo Jereb" },
    { image: img7, title: "Photo by Raimondo Jereb" },
    { image: img3, title: "Photo by Raimondo Jereb" },
    { image: img4, title: "Photo by Raimondo Jereb" },
    { image: img6, title: "Photo by Raimondo Jereb" },
    { image: img5, title: "Photo by Raimondo Jereb" },
    { image: img2, title: "Photo by Raimondo Jereb" },
    { image: img1, title: "Photo by Raimondo Jereb" },
  ];
  return (
    <div>
      <ImageCommon
        title="The best of the best."
        descrition="Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new."
        btn="View Editor choice"
      />
      <div className="images_sections">
        <div className="image_section_conatiner">
          {img.map(({ image, title }) => {
            return (
              <div className="image_section_conatiner_single">
                <img src={image} />
                <span className="title_img">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Image;
