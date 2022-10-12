import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
function ProfileHome() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
  };
  const slider = [
    {
      img1: "https://drscdn.500px.org/photo/1045854362/q%3D80_m%3D1500/v2?sig=faa9eb8287994c8bd1448088c19b4fe097158b528c5fdd2f194896f6676e122b",
      img2: "https://drscdn.500px.org/photo/1045854292/q%3D80_m%3D1500/v2?sig=7775ceb212719748e8c29f174b165f711c9bff76163cb9e65833b7469094c5cd",
      img3: "https://drscdn.500px.org/photo/1045854293/q%3D80_m%3D1500/v2?sig=779bc96b73b077212266331bcdacad931f467c2f5ce265b6514ff5d45391c108",
      img: "https://drscdn.500px.org/user_avatar/7472479/q%3D85_w%3D300_h%3D300/v2?webp=true&v=6&sig=a22119dd620c02cdac993cff37b5c6a739a03a6134a539385f6d167440ae28f6",
      name: "Ernesto Perez",
      decsription: "Maracaibo, Zulia, Venezuela",
    },
    {
      img1: "https://drscdn.500px.org/photo/1045854362/q%3D80_m%3D1500/v2?sig=faa9eb8287994c8bd1448088c19b4fe097158b528c5fdd2f194896f6676e122b",
      img2: "https://drscdn.500px.org/photo/1045854292/q%3D80_m%3D1500/v2?sig=7775ceb212719748e8c29f174b165f711c9bff76163cb9e65833b7469094c5cd",
      img3: "https://drscdn.500px.org/photo/1045854293/q%3D80_m%3D1500/v2?sig=779bc96b73b077212266331bcdacad931f467c2f5ce265b6514ff5d45391c108",
      img: "https://drscdn.500px.org/user_avatar/7472479/q%3D85_w%3D300_h%3D300/v2?webp=true&v=6&sig=a22119dd620c02cdac993cff37b5c6a739a03a6134a539385f6d167440ae28f6",
      name: "Ernesto Perez",
      decsription: "Maracaibo, Zulia, Venezuela",
    },
    {
      img1: "https://drscdn.500px.org/photo/1045854362/q%3D80_m%3D1500/v2?sig=faa9eb8287994c8bd1448088c19b4fe097158b528c5fdd2f194896f6676e122b",
      img2: "https://drscdn.500px.org/photo/1045854292/q%3D80_m%3D1500/v2?sig=7775ceb212719748e8c29f174b165f711c9bff76163cb9e65833b7469094c5cd",
      img3: "https://drscdn.500px.org/photo/1045854293/q%3D80_m%3D1500/v2?sig=779bc96b73b077212266331bcdacad931f467c2f5ce265b6514ff5d45391c108",
      img: "https://drscdn.500px.org/user_avatar/7472479/q%3D85_w%3D300_h%3D300/v2?webp=true&v=6&sig=a22119dd620c02cdac993cff37b5c6a739a03a6134a539385f6d167440ae28f6",
      name: "Ernesto Perez",
      decsription: "Maracaibo, Zulia, Venezuela",
    },
  ];

  return (
    <>
      <div className="home_profile_conatiner">
        <h2>Feed Home</h2>
        <span>See photos and published Galleries from people you follow.</span>
        <div className="home_Profile_link">
          <Link>Home</Link>
        </div>
      </div>
      <div className="section_bg">
        <div className="welcome_home">
          <span>Welcome to 500px</span>
          <span>Follow photographers to get started</span>
        </div>
        <div className="features">
          <div className="fearures_banner_one">
            <div className="feature_banner_text">
              <span className="feature_label">Featured photographers</span>
              <div className="dimss">
                <span className="para_dimss">Follow to explore new work •</span>
                <button className="dismiss_btn">Dismiss</button>
              </div>
            </div>
            <div className="view_banner">
              <span>View all</span>
            </div>
          </div>
        </div>
        <div className="scroll">
          <div className="slidersss">
            {slider.map(({ img, img1, img2, img3, name, decsription }) => {
              return (
                <div className="slider">
                  <div className="slider_images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <div className="slider_content">
                    <div className="user_slider">
                      <div className="img_user">
                        <img src={img} alt="" />
                      </div>
                      <div className="user_data">
                        <span className="feature_label">{name}</span>
                        <span className="para_dimss">{decsription}</span>
                      </div>
                    </div>
                    <div className="follow">
                      <button>follow</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="explore_section">
          <div className="feature_banner_text">
            <span className="feature_label">Explore the community</span>
            <span className="para_dimss">
              Discover photos from all over the world
            </span>
          </div>
        </div>
        <div className="home_profile_card">
          <div className="block1">
            <div className="inner_block">
              <div className="inner_block_img"></div>
              <div className="feature_banner_text">
                <span className="feature_label">Explore the community</span>
                <span className="para_dimss">
                  Discover photos from all over the world
                </span>
              </div>
            </div>
            <div className="imges_cards">
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/1008464980/q%3D80_h%3D300/v2?sig=eeb45bda6f06eaa4574f93fc2cdef975932fd1061f4d44b59bfd501eb80ac3bb"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/264996159/q%3D80_h%3D300/v2?sig=10b714c5086bf04808d5cbd4995d5a0e4ea898055c36cca7cb68939a03cd9ef9"
                  alt=""
                />
              </div>
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/264375033/q%3D80_h%3D300/v2?sig=ec9f4ceb4b5551887936ee0b511295735899b18ff98abee1bc004038afb296fc"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/299393601/q%3D80_h%3D300/v2?sig=6d8c7737312e0e367bef675edb7005435db343faa686a92b1620375677e49190"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="block1">
            <div className="inner_block">
              <div className="inner_block_img"></div>
              <div className="feature_banner_text">
                <span className="feature_label">Explore the community</span>
                <span className="para_dimss">
                  Discover photos from all over the world
                </span>
              </div>
            </div>
            <div className="imges_cards">
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/15114661/q%3D80_h%3D300/v2?sig=b7517ad2169712489a784c520aec3137c500204ed2c7cbb18963de827459964e"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/97759871/q%3D80_h%3D300/v2?sig=d82881ecb63e118a72ab73ae166d71a3236e1a899e3be9322ef57d27298693bb"
                  alt=""
                />
              </div>
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/1013669246/q%3D80_h%3D300/v2?sig=2f7dcac5609499ab355b263730433c0587e3f28cf03d2a7368385c333955f5c5"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/1012015584/q%3D80_h%3D300/v2?sig=6aaf7369a6607f7743c8734e06b7732f64a752f77fccceb06621abe155c9995d"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="block1">
            <div className="inner_block">
              <div className="inner_block_img"></div>
              <div className="feature_banner_text">
                <span className="feature_label">Explore the community</span>
                <span className="para_dimss">
                  Discover photos from all over the world
                </span>
              </div>
            </div>
            <div className="imges_cards">
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/308631351/q%3D80_h%3D300/v2?sig=cf49074bd93f452542ad3cf01f012ff2f54186aea0b4b4c5f4eec0abed8e791e"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/1011065535/q%3D80_h%3D300/v2?sig=ace92e04f75e6dae768975f7ae578e84069f1a4940fedcb579ec7d5a0949725a"
                  alt=""
                />
              </div>
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/310632677/q%3D80_h%3D300/v2?sig=4e787f9cf6ba8050658f0de619736f37bac23ba3643cf3eeae6b25db4a543bcb"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/262727493/q%3D80_h%3D300/v2?sig=e3d7e40db3792a9fa4c9225826786f3163a2409b3974efdfbfda9ff598b939d8"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="block1">
            <div className="inner_block">
              <div className="inner_block_img"></div>
              <div className="feature_banner_text">
                <span className="feature_label">Explore the community</span>
                <span className="para_dimss">
                  Discover photos from all over the world
                </span>
              </div>
            </div>
            <div className="imges_cards">
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/68195583/q%3D80_h%3D300/v2?sig=68f57f76f5f73f73e46f2173de13402c7944b0aa29355ca7809670945e2211ae"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/304671243/q%3D80_h%3D300/v2?sig=3a494c4f51045e7026604f7f144bae6a340f39205345b02beb5f1d81474b49bc"
                  alt=""
                />
              </div>
              <div className="img1_block">
                <img
                  src="https://drscdn.500px.org/photo/1007581064/q%3D80_h%3D300/v2?sig=3fe34bcb11742dcbf815b4b2af4ee4bbcfefa16deeeeaa64193070bc42e7f07b"
                  alt=""
                />
                <img
                  src="https://drscdn.500px.org/photo/173203597/q%3D80_h%3D300/v2?sig=856f3f93e5e137a4680ae4fc5e74d025353f99847dfd7f78a428f9fccff0d5b5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHome;
