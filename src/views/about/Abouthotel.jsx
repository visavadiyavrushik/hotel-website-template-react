import React from 'react';
import HotemImg from '../../assets/img/abouthotel.png';

const Abouthotel = () => {
  return (
    <>
      <section className="about-hotel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 m-auto">
              <h2 className="section-title">About the hotel</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo dicta delectus ipsum necessitatibus repudiandae maxime odit. Facilis minus mollitia saepe quia odit
                    aliquid!
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. Pulvinar orci bibendum cursus commodo ante. Id mauris
                    morbi pulvinar odio aenean amet turpis. Amet mauris enim ultrices euismod ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-hotel-img">
            <img src={HotemImg} alt="HotemImg" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Abouthotel;
