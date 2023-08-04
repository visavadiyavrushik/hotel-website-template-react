import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../assets/img/room.png';
import Slider2 from '../../assets/img/Room3.png';
import LeftArrow from '../../assets/img/leftArrow.svg';
import RightArrow from '../../assets/img/rightArrow.svg';
import CommonButton from '../../components/Button/CommonButton';

const RoomsSlider = () => {
  const settings = {
    speed: 500,
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
    <section className="Rooms-block">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Rooms</h2>
          <div className="col-12 col-lg-6">
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure provident voluptatem, ut dolorum ad est laboriosam sit esse, tenetur nemo laborum molestiae cum! Optio voluptas
              harum recusandae distinctio ipsam.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <Slider {...settings}>
          <div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <img src={Slider1} alt="img" className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 col-lg-6 slider-content">
                <h2>Room</h2>
                <div className="col-11 col-lg-8">
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur provident modi dolor facilis, blanditiis sequi atque itaque voluptas consectetur sit velit deleniti, hic
                    reiciendis! Ullam id placeat at repellendus.
                  </h6>
                </div>
                <div className="col-12 slider-btn">
                  <CommonButton className="m-auto book-btn">Discover our rooms</CommonButton>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <img src={Slider2} alt="img" className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 col-lg-6 slider-content">
                <h2>Deluxe Rooms</h2>
                <div className="col-11 col-lg-8">
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam nostrum labore dolorem quidem neque libero. Assumenda nulla accusantium ducimus repellendus praesentium
                    excepturi beatae blanditiis ex atque, dolore minus odit?
                  </h6>
                </div>
                <div className="col-12 slider-btn">
                  <CommonButton className="m-auto book-btn">Discover our rooms</CommonButton>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default RoomsSlider;
