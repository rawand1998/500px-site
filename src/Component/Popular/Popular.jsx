import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const apiKey = process.env.API_KEY;
// console.log(apiKey,"knhbyujgvcudc");
function Popular() {
  const [image, setImage] = useState("");
  const clientId = "t_YxM0Taxyt2MhS4ve9lviN-EApwUOrVRjNIbJYD10w";
  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    image +
    "&client_id=" +
    clientId;
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=natural&client_id=qp1xazQhIzra13wFLMNGz3ayhyy-ouNonVyzwcbtnLY"
      )
      .then((response) => {
        setResult(response.data.results);
      });
  }, []);

  console.log(result);

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
                <img src={image.urls.thumb} />
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
