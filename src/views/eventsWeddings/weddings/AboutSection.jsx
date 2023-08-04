import React from 'react';
import HotemImg from '../../../assets/img/WeddingsImg.png';

const AboutSection = () => {
  return (
    <>
      <section className="about-hotel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 m-auto">
              <h2 className="section-title">Weddings at Our Place</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem amet dolore error sit est?
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti totam amet, esse delectus, enim, sunt soluta explicabo aliquam
                    illo porro qui autem assumenda quibusdam commodi?
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

export default AboutSection;
