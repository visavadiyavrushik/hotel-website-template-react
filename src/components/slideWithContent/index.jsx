import React from 'react';
import PropType from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider1 from '../../assets/img/room.png';
// import Slider2 from '../../assets/img/Room3.png';
import LeftArrow from '../../assets/img/leftArrow.svg';
import RightArrow from '../../assets/img/rightArrow.svg';
import clsx from 'clsx';
// import CommonButton from '../Button/CommonButton';

const sliderWithContent = ({ Array, imageRight }) => {
  const settings = {
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    infinite: true,
    draggable: false,
    touchMove: true,
    pauseOnHover: false,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
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
    <div className={clsx(`Rooms-block sliderwithimg`, imageRight && 'imgright')}>
      <div className="container-fluid p-0">
        <Slider {...settings}>
          {Array.map((row) => {
            return (
              <div key={row.id}>
                <div className="row">
                  {imageRight ? (
                    ''
                  ) : (
                    <div className="col-12 col-md-6 col-lg-6">
                      <img src={row.image} alt="img" className="img-fluid" />
                    </div>
                  )}

                  <div className="col-12 col-md-6 col-lg-6 slider-content order-lg-0 order-1">
                    <h2>{row.slideTitle}</h2>
                    <div className="col-11 col-lg-8">
                      <h6>{row.slideContent}</h6>
                      {row.points ? (
                        <ul>
                          <li>{row.points}</li>
                        </ul>
                      ) : (
                        ''
                      )}
                    </div>
                    {/* <div className="col-12 slider-btn">
                      <CommonButton className="m-auto book-btn">Discover our rooms</CommonButton>
                    </div> */}
                  </div>

                  {imageRight && (
                    <div className="col-12 col-md-6 col-lg-6 ">
                      <img src={row.image} alt="img" className="img-fluid" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

sliderWithContent.propTypes = {
  Array: PropType.array,
  imageRight: PropType.bool
  // icon: PropType.element
};

export default sliderWithContent;
