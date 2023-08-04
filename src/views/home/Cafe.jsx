import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../assets/img/cafeslide1.webp';
import LeftArrow from '../../assets/img/leftArrow.svg';
import RightArrow from '../../assets/img/rightArrow.svg';
import CommonButton from '../../components/Button/CommonButton';

const Cafe = () => {
  // const [currentval, setCurrentval] = useState(0);
  // console.log('currentval: ', currentval);
  const settings = {
    className: 'center',
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: '350px',
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    infinite: true,
    draggable: true,
    touchMove: true,
    pauseOnHover: false,
    // speed: 1000,
    // autoplaySpeed: 4000,
    lazyLoad: true,
    // lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    nextArrow: <img src={RightArrow} alt="nextArrow" />,
    prevArrow: <img src={LeftArrow} alt="prevArrow" />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: '250px'
          // stagePadding: 30
        }
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '150px'
          // stagePadding: 30
        }
      },
      {
        breakpoint: 1040,
        settings: {
          centerPadding: '100px'
          // stagePadding: 30
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: '20px',
          arrows: false
        }
      }
    ]
    // afterChange: (current) => setCurrentval(current)
  };

  return (
    <section className="cafe-block">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Cafes</h2>
        </div>
      </div>
      {/* <div className="container"> */}
      <div className="container-fluid p-0">
        <Slider {...settings}>
          <div>
            <div>
              <img src={Slider1} alt="img" />
            </div>
            <div className="container">
              <div className="row slider-content">
                <div className="col-4 col-md-2 col-lg-2 col-xxl-3">
                  <h1 className="number-text">01</h1>
                </div>
                <div className="col-8 col-md-4 col-lg-4 col-xxl-4">
                  <h2>The Café</h2>
                  <h6>Welcome to cafe</h6>
                  <p className="working-hour">
                    Working hours: <br />
                    09:00 - 20:00
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xxl-5 slider-btn">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis! Doloremque praesentium reiciendis ex quod, autem repellendus nisi, quos tempore vel consectetur quo
                    fugit voluptates! Modi eius non nisi a!
                  </p>
                  <CommonButton className="m-auto book-btn read-more">Read more</CommonButton>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={Slider1} alt="img" />
            </div>
            <div className="container">
              <div className="row slider-content">
                <div className="col-4 col-md-2 col-lg-2 col-xxl-3">
                  <h1 className="number-text">02</h1>
                </div>
                <div className="col-8 col-md-4 col-lg-4 col-xxl-4">
                  <h2>The Café</h2>
                  <h6>Welcome to cafe</h6>
                  <p className="working-hour">
                    Working hours: <br />
                    09:00 - 20:00
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xxl-5 slider-btn">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis! Doloremque praesentium reiciendis ex quod, autem repellendus nisi, quos tempore vel consectetur quo
                    fugit voluptates! Modi eius non nisi a!
                  </p>
                  <CommonButton className="m-auto book-btn read-more">Read more</CommonButton>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={Slider1} alt="img" />
            </div>
            <div className="container">
              <div className="row slider-content">
                <div className="col-4 col-md-2 col-lg-2 col-xxl-3">
                  <h1 className="number-text">03</h1>
                </div>
                <div className="col-8 col-md-4 col-lg-4 col-xxl-4">
                  <h2>The Café</h2>
                  <h6>Welcome to cafe</h6>
                  <p className="working-hour">
                    Working hours: <br />
                    09:00 - 20:00
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xxl-5 slider-btn">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis! Doloremque praesentium reiciendis ex quod, autem repellendus nisi, quos tempore vel consectetur quo
                    fugit voluptates! Modi eius non nisi a!
                  </p>
                  <CommonButton className="m-auto book-btn read-more">Read more</CommonButton>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={Slider1} alt="img" />
            </div>
            <div className="container">
              <div className="row slider-content">
                <div className="col-4 col-md-2 col-lg-2 col-xxl-3">
                  <h1 className="number-text">04</h1>
                </div>
                <div className="col-8 col-md-4 col-lg-4 col-xxl-4">
                  <h2>The Café</h2>
                  <h6>Welcome to cafe</h6>
                  <p className="working-hour">
                    Working hours: <br />
                    09:00 - 20:00
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xxl-5 slider-btn">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perferendis! Doloremque praesentium reiciendis ex quod, autem repellendus nisi, quos tempore vel consectetur quo
                    fugit voluptates! Modi eius non nisi a!
                  </p>
                  <CommonButton className="m-auto book-btn read-more">Read more</CommonButton>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Cafe;
