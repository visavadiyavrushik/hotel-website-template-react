import React from 'react';
import Catalanstructurecafe from '../../assets/img/hotelview3.webp';
import InnerMainSection from '../../components/InnerMainSection';

import StructureCafe from '../../assets/img/hotelview1.webp';
// import UniqueConcept from './UniqueConcept';
import Eventsforgroups from './Eventsforgroups';

const CatalanStructurePage = () => {
  return (
    <>
      <InnerMainSection ImgSrc={StructureCafe} />
      <section className="about-hotel structure-cafe">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 m-auto">
              <h2 className="section-title">Catalan structure cafe</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p className="welcome-note">
                    The ideal place to have a drink after a long day or an aperitif before or after lunch or dinner. Lorem ipsum dolor sit amet
                    consectetur
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Placerat feugiat commodo pellentesque tellus in tellus. A aliquet dapibus ultrices
                    adipiscing lectus eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-hotel-img">
            <img src={Catalanstructurecafe} alt="HotemImg" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* <UniqueConcept /> */}

      <Eventsforgroups />
    </>
  );
};

export default CatalanStructurePage;
