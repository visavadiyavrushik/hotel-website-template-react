import React from 'react';
import PathikaVideo from '../../assets/video/pathika.mp4';

const HotelVideo = () => {
  return (
    <>
      <section className="hotel-video">
        <div className="container">
          <div className="row g-0">
            <video autoPlay={true} muted={true} loop={true} playsInline={true}>
              <source src={PathikaVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelVideo;
