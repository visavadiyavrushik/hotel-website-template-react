import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import AdalajStepwell from '../../assets/img/AdalajStepwell.png';
// import KishanBhavan from '../../assets/img/KishanBhavan.png';
import Gift from '../../assets/img/gift.jpg';
// import DandiKutirMuseum from '../../assets/img/DandiKutirMuseum.png';

const Location = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    draggable: true,
    touchMove: true,
    pauseOnHover: false,
    initialSlide: 0,
    // touchThreshold: 0,
    // speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <section className="event-wedding-block location">
      <div className="container">
        <div className="row title-info">
          <div className="col-12 col-md-6">
            <h2 className="section-title">Location</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore consequuntur soluta adipisci, itaque laudantium.</p>
          </div>
          <div className="col-12 col-md-6 ">
            <h2 className="d-lg-block d-md-block d-none section-title">&nbsp;</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem corrupti numquam rerum nisi!</p>
            <a href="#" className="dir-link">
              Directions
            </a>
          </div>
        </div>
        <div className="row events-gallary">
          <Slider {...settings}>
            <div>
              <div className="content">
                <div className="content-overlay"></div>
                <img src={Gift} alt="BanquetHall" className="content-image gift-city" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Location Name</h3>
                  <p className="content-text">10 km</p>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <div className="content-overlay"></div>
                <img src={Gift} alt="BanquetHall" className="content-image gift-city" />

                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Location Name</h3>
                  <p className="content-text">10 min</p>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <div className="content-overlay"></div>
                <img src={Gift} alt="BanquetHall" className="content-image gift-city" />

                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Location Name</h3>
                  <p className="content-text">10 min</p>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <div className="content-overlay"></div>
                <img src={Gift} alt="BanquetHall" className="content-image gift-city" />

                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Location Name</h3>
                  <p className="content-text">15 min</p>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <div className="content-overlay"></div>
                <img src={Gift} alt="BanquetHall" className="content-image gift-city" />

                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Location Name</h3>
                  <p className="content-text">10 min</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Location;
