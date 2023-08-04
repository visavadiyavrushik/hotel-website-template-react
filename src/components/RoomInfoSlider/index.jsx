import React from 'react';
import Slider from 'react-slick';
import PropType from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../assets/img/leftArrow.svg';
import RightArrow from '../../assets/img/rightArrow.svg';

const RoomInfoSlider = ({ imgs, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <img src={RightArrow} alt="nextArrow" />,
    prevArrow: <img src={LeftArrow} alt="prevArrow" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          arrows: false
        }
      }
    ]
  };
  return (
    <>
      <div className="inside-slider row">
        <h2 className="section-title">{title}</h2>
        <div className="p-0">
          <Slider {...settings}>
            {imgs.map((row) => (
              <div key={row.id}>
                <img src={row.img} alt="img" className="img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

RoomInfoSlider.propTypes = {
  img1: PropType.string,
  img2: PropType.string,
  imgs: PropType.array,
  title: PropType.string
};

export default RoomInfoSlider;
