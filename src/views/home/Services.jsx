import React, { useState } from 'react';
import 'animate.css';
import clsx from 'clsx';
import Swimmingpool from '../../assets/img/swimming-pool.jpg';
import SPA from '../../assets/img/spa.jpg';
import GYM from '../../assets/img/gym.jpg';
const servicesData = [
  {
    id: 0,
    imgsrc: Swimmingpool,
    hoverimg: Swimmingpool,
    title: 'Swimming pool'
  },
  {
    id: 1,
    imgsrc: SPA,
    hoverimg: SPA,
    title: 'Spa'
  },
  {
    id: 2,
    imgsrc: GYM,
    hoverimg: GYM,
    title: 'Gym'
  }
];

const Services = () => {
  const [active, setActive] = useState(-1);
  const [dataval, setDataval] = useState('');

  const getCardClassName = (index) => {
    // if (active > -1 && index !== active) return 'HoverHide';
    if (active === index) return 'isHovered';
    return '';
  };

  return (
    <section className="event-wedding-block services">
      <div className="container">
        <div className="row text-center">
          <h2 className="section-title">Facilities</h2>
          <div className="col-12 col-lg-10 col-md-9 m-auto">
            <p className="section-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, facere?
              {/* <ul>
                <li>Gym</li>
                <li>Spa & Saloon</li>
              </ul> */}
            </p>
          </div>
        </div>

        <div
          className={clsx('events-gallary', dataval && 'fullimage')}
          onMouseLeave={() => {
            setActive(-1);
            setDataval('');
          }}>
          {servicesData.map((row, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setActive(row.id);
                setDataval(row);
              }}
              className={`content ${getCardClassName(index)}`}>
              <img src={row.imgsrc} alt="" className="content-image imgs" />
              <div className="content-details fadeIn-bottom">
                <div className="content-overlay"></div>
                <h3 className="content-title">{row.title}</h3>
              </div>
            </div>
          ))}

          {dataval.id === 0 && (
            <div
              className={clsx('mouseover-bg', dataval.id === 0 && 'zero')}
              style={{
                background: `url(${dataval.hoverimg}) no-repeat center center`
              }}></div>
          )}

          {dataval.id === 1 && (
            <div
              className={clsx('mouseover-bg', dataval.id === 1 && 'one')}
              style={{
                background: `url(${dataval.hoverimg}) no-repeat center center`
              }}></div>
          )}

          {dataval.id === 2 && (
            <div
              className={clsx('mouseover-bg', dataval.id === 2 && 'two')}
              style={{
                backgroundsize: '100% 100% !important',
                background: `url(${dataval.hoverimg}) no-repeat center center`
              }}></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
