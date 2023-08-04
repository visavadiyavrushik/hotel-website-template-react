import React from 'react';
import Wifi from '../../assets/img/wi-fi.png';
import Reception from '../../assets/img/reception.png';
import Lobbybar from '../../assets/img/lobby-bar.png';
import Roomservice from '../../assets/img/room-service.png';
import Limousineservice from '../../assets/img/limousine-service.png';
import Luggage from '../../assets/img/luggage-room.png';

const HotelService = () => {
  return (
    <>
      <section className="hotel-service">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-6 col-lg-4 service-wrapper">
              <img src={Wifi} alt="img" className="img-fluid" />
              <h3>Free wi-fi</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 service-wrapper">
              <img src={Reception} alt="img" className="img-fluid" />
              <h3>24-hour reception</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 service-wrapper">
              <img src={Lobbybar} alt="img" className="img-fluid" />
              <h3>Lobby bar</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 service-wrapper">
              <img src={Roomservice} alt="img" className="img-fluid" />
              <h3>Room service</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 service-wrapper">
              <img src={Limousineservice} alt="img" className="img-fluid" />
              <h3>Limousine service</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 service-wrapper">
              <img src={Luggage} alt="img" className="img-fluid" />
              <h3>Luggage room</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat commodo nunc quam. Faucibus amet volutpat ut volutpat et. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelService;
