import React from 'react';
import Event1 from '../../../assets/img/events1.png';
import Event2 from '../../../assets/img/events2.png';

const AboutSection = () => {
  return (
    <>
      <section className="about-hotel">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-10 m-auto">
              <h2 className="section-title">Events at Our Place </h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, laudantium!</p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam libero blanditiis sequi reiciendis adipisci unde repudiandae,
                    ab eligendi molestias quae expedita excepturi? Eum dolore nulla, adipisci voluptatum quis cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row about-hotel-img">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 mb-4 mb-lg-0 text-center">
              <img src={Event1} alt="img" className="img-fluid" />
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 text-center">
              <img src={Event2} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
