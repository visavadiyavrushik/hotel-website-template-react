import React from 'react';

import aboutimage from '../../assets/img/whiteroom.jpg';


const HeritageAdalajSection = () => {
  return (
    <>
      <section className="heritage-adalaj-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7 col-xl-6">
              <div className="title">
                <h1>Section Title</h1>
              </div>
            </div>
            <div className="col-12 col-md-10 m-auto middle-div">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum fugit quidem distinctio atque, doloribus suscipit corrupti
                    pariatur dolores sit perspiciatis.
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. Pulvinar
                    orci bibendum cursus commodo ante. Id mauris morbi pulvinar odio aenean amet turpis. Amet mauris enim ultrices euismod ultrices.
                  </p>
                </div>
              
              </div>
              <div className="row heritage-img">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 mb-4 mb-lg-0 text-center">
                  <img src={aboutimage} alt="img" className="img-fluid" />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 text-center">
                  <img src={aboutimage} alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeritageAdalajSection;
