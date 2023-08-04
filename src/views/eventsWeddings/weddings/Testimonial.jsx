import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../../assets/img/leftArrow.svg';
import RightArrow from '../../../assets/img/rightArrow.svg';

const Testimonial = () => {
  const settings = {
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    draggable: true,
    touchMove: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
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
      },
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <section className="Testimonial">
        <div className="container">
          <div className="col-12 col-lg-9 m-auto">
            <div className="row">
              <Slider {...settings}>
                <div>
                  <div className="col-12 slider-content">
                    <h2>
                      We had the most wonderful day, thanks to you, the Chef and the entire team. The food was spot on and the venue was beautifully
                      decorated, exactly how we wanted it to be.
                    </h2>
                    <h3 className="clientName">J. & N.</h3>
                    <h5 className="date">Wedding, 04 January 2023</h5>
                  </div>
                </div>
                <div>
                  <div className="col-12 slider-content">
                    <h2>
                      We had the most wonderful day, thanks to you, the Chef and the entire team. The food was spot on and the venue was beautifully
                      decorated, exactly how we wanted it to be.
                    </h2>
                    <h3 className="clientName">J. & N.</h3>
                    <h5 className="date">Wedding, 04 January 2023</h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
