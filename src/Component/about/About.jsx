import React from "react";
import "./style.css";
import queen from "../../images/queen.PNG";
import number from "../../images/number.PNG";
import pin from "../../images/pin.PNG";
import tree from "../../images/tree.PNG";
function About() {
  const aboutContent = [
    {
      img: <img src={queen} />,
      title: "Grow as a photographer",
      description: `Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.`,
    },
    {
      img: <img src={pin} />,
      title: "Build your career",
      description: ` upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.

        Build your career
        Market yourself as a professional photographer..`,
    },
    {
      img: <img src={number} />,
      title: "See how you're performing",
      description: `With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.`,
    },
    {
      img: <img src={tree} />,

      title: "Sell your work",
      description: `Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage.`,
    },
  ];
  return (
    <div className="about_conatiner">
      <span className="about_title">What makes us different</span>
      <div className="about_content">
        {aboutContent.map(({ img, title, description }) => {
          return (
            <div className="about_sections">
              {img}
              <span className="title_about_section">{title}</span>
              <span className="descrition">{description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
