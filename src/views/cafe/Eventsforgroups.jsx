import React from 'react';
import Events1 from '../../assets/img/EventsImg1.png';
import Events2 from '../../assets/img/EventsImg2.png';
import Events3 from '../../assets/img/EventsImg3.png';

const Eventsforgroups = () => {
  return (
    <>
      <section className="Eventsgroups">
        <div className="container">
          <div className="row text-center">
            <h2 className="section-title">Events for groups</h2>
            <div className="col-12 col-md-9 m-auto">
              <p className="section-paragraph">
                Organize your custom events in our cocktail bar. Group events, cocktails or private meetings, we have the perfect space for your
                celebration. Send us your request by email or by phone and we will contact you in less than 24 hours.
              </p>
            </div>
          </div>

          <div className="row Events-images text-center">
            <div className="col-lg-4 col-12">
              <img src={Events1} alt="BanquetHall" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-12">
              <img src={Events2} alt="BanquetHall" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-12">
              <img src={Events3} alt="BanquetHall" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eventsforgroups;
