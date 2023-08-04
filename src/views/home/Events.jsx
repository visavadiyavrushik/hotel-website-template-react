import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
import BanquetHall from '../../assets/img/BanquetHall.png';
import NilayaPartyLawn from '../../assets/img/NilayaPartyLawn.png';
import ConferenceRoom from '../../assets/img/ConferenceRoom.png';
import NightView from '../../assets/img/NightView.png';

const Events = () => {
  return (
    <>
      <section className="event-wedding-block">
        <div className="container">
          <div className="row text-center">
            <h2 className="section-title">Events & Weddings</h2>
            <div className="col-12 col-md-9 m-auto">
              <p className="section-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nam laborum, dolores facere obcaecati doloremque expedita omnis a unde cupiditate illum iusto labore quod quas repudiandae
                consequuntur mollitia odit. Ipsum!
              </p>
            </div>
            <div className="col-12">
              <CommonButton className="m-auto read-btn">Read more</CommonButton>
            </div>
          </div>

          <div className="row events-gallary">
            <div className="col-12 col-md-4 ">
              <div className="content">
                <div className="content-overlay"></div>
                <img src={BanquetHall} alt="BanquetHall" className="content-image" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Banquet Hall</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 center-col">
              <div className=" conf-room">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={NilayaPartyLawn} alt="NilayaPartyLawn" className="content-image" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Lawn</h3>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={ConferenceRoom} alt="ConferenceRoom" className="content-image" />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Conference Room</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="content">
                <div className="content-overlay"></div>
                <img src={NightView} alt="NightView" className="content-image" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Nook Lawn</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
