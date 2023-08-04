import React from 'react';

import Structure1 from '../../assets/img/structure-4.png';
import Structure2 from '../../assets/img/structure-5.png';
import Structure3 from '../../assets/img/structure-6.png';
import ThreeImgStructure from '../../components/threeImgStructure';
import LaTerraza from '../../assets/img/LaTerraza.png';
// import Gift from '../../assets/img/gift.jpg';

const UniqueConcept = () => {
  return (
    <>
      <section className="heritage-adalaj-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-7 col-xl-6">
              <div className="title">
                <h1>Our unique café with a green concept has a single cell structure and its largest single cell structure built in India.</h1>
              </div>
            </div>
            <div className="col-12 col-md-12 m-auto middle-div">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-4 offset-0 offset-lg-1">
                  <p className="welcome-note">Architecture inspired by one of the finest works of the Adalaj ni Vav.</p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-5 offset-0 offset-lg-1">
                  <p>
                    The construction of this vault originated in the Catalonia region of northwestern Spain. Tile vaulting was frequently used in
                    Catalonia from the 15th century onwards. Making such a curved chat with tiles that are long held on parallel beams of wood.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="heritage-img">
            <ThreeImgStructure Structureimg1={Structure1} Structureimg2={Structure2} Structureimg3={Structure3} />
          </div>
        </div>
      </section>
      <section className="CatalanStructure bg-white">
        <div className="container-fluid p-0">
          <div className="row CatalanStructure-wrapper g-0">
            <div className="col-12 col-lg-6 CatalanStructure-img-wrapper text-center">
              <img src={LaTerraza} alt="HotemImg" className="img-fluid" />
            </div>
            <div className="col-11 col-lg-6 m-auto m-lg-0 mt-3 mt-lg-0 right-wrapper">
              <h2 className="section-title">Contact & Working hours</h2>
              <p>We are at your disposal for any questions.</p>
              <div className="Working-hr">
                <label>Contact:</label>
                <span>T: +91 97979 75050</span> <br />
                <span>E: thenilayaresort@gmail.com</span>
              </div>
              <div className="Working-hr">
                <label>Working hours:</label>
                <span>09:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UniqueConcept;
