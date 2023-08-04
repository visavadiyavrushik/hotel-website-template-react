import React from 'react';
// import HotemImg from '../../assets/img/abouthotel.png';
import PropType from 'prop-types';

const PageInfo = ({ title, p1, p2 }) => {
  return (
    <>
      <section className="about-hotel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 m-auto">
              <h2 className="section-title">{title}</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">{p1}</p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>{p2}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="about-hotel-img">
            <img src={HotemImg} alt="HotemImg" className="img-fluid" />
          </div> */}
        </div>
      </section>
    </>
  );
};

PageInfo.propTypes = {
  title: PropType.string,
  p1: PropType.string,
  p2: PropType.string
};

export default PageInfo;
