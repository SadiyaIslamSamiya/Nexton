import React from "react";
import hero from "../assets/hero.png";
import m_hero from "../assets/mobile-hero.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      <section id="banner " className="hidden lg:block">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={hero} alt="banner" className="w-full " />
            </div>
            <div>
              <img src={hero} alt="banner" className="w-full" />
            </div>
          </Slider>
        </div>
      </section>

      {/* --------------------Mobile part-------------------- */}
      <section className="bannerM lg:hidden ">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={m_hero} alt="banner" className="w-full " />
            </div>
            <div>
              <img src={m_hero} alt="banner" className="w-full" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Banner;
