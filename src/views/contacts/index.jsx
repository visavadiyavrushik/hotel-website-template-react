import React from 'react';
import InnerMainSection from '../../components/InnerMainSection';
import Slider1 from '../../assets/img/contacts.png';
import Info from './Info';
import ContactUs from '../../components/Contactus';
// import Map from '../../components/Map/index';

const Contacts = () => {
  return (
    <>
      <InnerMainSection ImgSrc={Slider1} title="Location & Contact" />
      <Info />
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Location</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 ">
              <h2 className="">18 km</h2>
              <p>Distance to airport</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 offset-0 offset-lg-2">
              <h2 className="">5 km</h2>
              <p>Distance to station</p>
            </div>
            <div className="col-12 col-md-12 col-lg-1 offset-0 offset-lg-3">
              <div className="text-start text-lg-end">
                <button className="p-0 Checkcapacity text-decoration-underline">Directions</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766719.582055513!2d60.96530359887406!3d19.72526174115248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1678815025790!5m2!1sen!2sin"
            // width="100"
            // height="100"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="MapStyle"
          />
        </div>
      </section>

      <div
        style={{
          background: '#efefef'
        }}>
        <ContactUs />
      </div>
    </>
  );
};

export default Contacts;
