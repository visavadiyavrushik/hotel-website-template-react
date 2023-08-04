import React from 'react';
import LI from '../../../components/Li';
import { Watter, Coffee, Roomservices, Video, Mic, Board, Tv, Wifi, Air, Whiteboard, Chart } from '../../../assets/svg/aminitiesIcon/index';

const Aminities = () => {
  return (
    <section className="roomamenities-section">
      <div className="container">
        <h2 className="section-title">
          Facilities and
          <br /> Equipment
        </h2>
        <h4>Technical equipment (available on-site)</h4>
        <div className="row">
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Free High Speed Internet (WiFi)" icon={<Wifi />} />
              <LI title="Boardrooms" icon={<Board />} />
              <LI title="Projection screens" icon={<Tv />} />
              <LI title="Microphone systems" icon={<Mic />} />
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Video conferencing system" icon={<Video />} />
              <LI title="Whiteboards" icon={<Whiteboard />} />
              <LI title="Flipcharts" icon={<Chart />} />
            </ul>
          </div>
        </div>

        <h4>Additional features </h4>
        <div className="row">
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Bottled Water" icon={<Watter />} />
              <LI title="Air Conditioning" icon={<Air />} />
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <ul>
              <LI title="Coffee / tea" icon={<Coffee />} />
              <LI title="Personnel at your service" icon={<Roomservices />} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aminities;
