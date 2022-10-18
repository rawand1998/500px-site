import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
function Popular() {

  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=london&client_id=qp1xazQhIzra13wFLMNGz3ayhyy-ouNonVyzwcbtnLY"
      )
      .then((response) => {
        setResult(response.data.results);
      });
  }, []);


  return (
    <div className="popluar_nav">
      <div className="pop_title">
        <span>What's popular today</span>
        <span>See recently added photos with the highest Pulse.</span>
      </div>

      <div className="pop_menu">
        <div className="right_list_popular">
          <ul>
            <li className="active">Popular</li>
            <li>Upcoming</li>
            <li>Fresh</li>
            <li>Editors' Choice</li>
            <li>Galleries</li>
            <li>Resource Hub</li>
          </ul>
        </div>
        <div className="left_list_populat">
          <ul>
            <li>Categories</li>
            <li>Photograher</li>
            <li>Sorted by</li>
          </ul>
        </div>
      </div>

      <div className="images_sections_pup">
        <div className="image_section_conatiner_pop">
          {result.map((image) => {
            return (
              <div className="image_section_conatiner_single_pop">
                <img src={image.urls.small_s3} alt="not found" />
                <span className="title_img">{image.user.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
