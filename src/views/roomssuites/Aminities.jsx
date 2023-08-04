import React from 'react';
import {
  Watter,
  Bath,
  Coffee,
  Cutlery,
  Hairdry,
  Iron,
  Minibar,
  Parking,
  Refrigrator,
  Roomservices,
  Safety,
  Swim,
  Tele,
  Tv,
  Wifi,
  Air
} from '../../assets/svg/aminitiesIcon/index';
import LI from '../../components/Li';

const Aminities = () => {
  return (
    <section className="roomamenities-section">
      <div className="container">
        <h2 className="section-title">Amenities and Services</h2>
        <h4>Room amenities</h4>

        <div className="row">
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Bottled Water - Replenished Daily" icon={<Watter />} />
              <LI title="Air Conditioning" icon={<Air />} />
              <LI title="Coffee / tea maker" icon={<Coffee />} />
              <LI title="Room Service" icon={<Roomservices />} />
              <LI title="Telephone" icon={<Tele />} />
              <LI title="Hair Dryer" icon={<Hairdry />} />
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Iron & Ironing Board" icon={<Iron />} />
              <LI title="Flat screen satellite TV" icon={<Tv />} />
              <LI title="Minibar" icon={<Minibar />} />
              <LI title="Safety Deposit Lockers" icon={<Safety />} />
              <LI title="Refrigerator" icon={<Refrigrator />} />
              <LI title="Complimentary toiletries" icon={<Bath />} />
            </ul>
          </div>
        </div>

        <h4>Property amenities</h4>
        <div className="row">
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Free High Speed Internet (WiFi)" icon={<Wifi />} />
              <LI title="Free parking" icon={<Parking />} />
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Private pool" icon={<Swim />} />
              <LI title="Restaurants (traditional & multi-cuisine)" icon={<Cutlery />} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aminities;
