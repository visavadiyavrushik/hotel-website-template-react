import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../assets/img/hotelview1.webp';
import Slider2 from '../../assets/img/hotelview2.webp';
import Slider3 from '../../assets/img/hotelview3.webp';
import ScrollIcon from '../../assets/svg/scrollicon.svg';
import 'animate.css';
import clsx from 'clsx';

function MainSlider() {
  const [active, setActive] = useState();
  const settings = {
    autoplay: true,
    infinite: true,
    draggable: false,
    touchMove: false,
    pauseOnHover: false,
    // touchThreshold: 0,
    // speed: 5000,
    autoplaySpeed: 4000,
    // lazyLoad: true,
    arrows: false,
    dots: false,
    fade: true,
    // afterChange: (current) => setActive({ ...active, three: current })
    afterChange: (current) => setActive(current)
  };
  return (
    <>
      <div className="section-overlay" />
      <div className="slider_section">
        <Slider {...settings}>
          <div>
            <div className="slide__content headings">
              <h2>Hotel Title</h2>
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
            </div>
            <div className={clsx('zoomInImage', active === 0 ? 'one' : '')}>
              <img src={Slider1} alt="img" className="imgs" />
            </div>
          </div>
          <div>
            <div className="slide__content headings">
              <h2>Hotel Title</h2>
              <h6>Lorem ipsum dolor sit amet consectetur.</h6>
            </div>
            <div className={clsx('zoomInImage', active === 1 ? 'two' : '')}>
              <img src={Slider2} alt="img" className="imgs" />
            </div>
          </div>
          <div>
            <div className="slide__content headings">
              <h2>Hotel Title</h2>
              <h6>Lorem ipsum dolor sit amet consectetur.</h6>
            </div>
            <div className={clsx('zoomInImage', active === 2 ? 'three' : '')}>
              <img src={Slider3} alt="img" className="imgs" />
            </div>
          </div>
        </Slider>
        <div className="scroll_arrow">
          <img src={ScrollIcon} alt="arrow" />
        </div>
      </div>
    </>
  );
}

export default MainSlider;
