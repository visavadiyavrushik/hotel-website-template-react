import React from 'react';

import Cafe1 from '../../assets/img/Cafe-1.png';
import Cafe2 from '../../assets/img/Cafe-2.png';
import Cafe3 from '../../assets/img/Cafe-3.png';

const CafeDining = () => {
  return (
    <>
      <section className="cafeDining">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 m-auto">
              <h2 className="section-title">Dining</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci possimus repudiandae, odio iusto exercitationem doloribus ratione enim reprehenderit doloremque rerum?
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>Lorem ipsum dolor sit amet consectetur. Et eget in ultricies faucibus proin ipsum justo vestibulum. Libero accumsan enim ut euismod et morbi ac maecenas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row cafeDining-img g-0">
            <div className="col-12 col-lg-4  cafeDining-img-wrapper">
              <img src={Cafe1} alt="HotemImg" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-4  cafeDining-img-wrapper">
              <img src={Cafe2} alt="HotemImg" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-4  cafeDining-img-wrapper">
              <img src={Cafe3} alt="HotemImg" className="img-fluid" />
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

export default CafeDining;
