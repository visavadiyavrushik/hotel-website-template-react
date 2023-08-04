import React from 'react';
import PropType from 'prop-types';
import SliderWithContent from '../../../components/slideWithContent/index';
import Slider1 from '../../../assets/img/room.png';
import Slider2 from '../../../assets/img/Room3.png';

const Array = [
  {
    id: 1,
    image: Slider1,
    slideTitle: 'Banquet Hall',
    slideContent:
      'Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.',
    points: 'Up to 200 guests'
  },
  {
    id: 2,
    image: Slider2,
    slideTitle: 'Banquet Hall',
    slideContent:
      'Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.',
    points: 'Up to 200 guests'
  }
];

const ArrayTwo = [
  {
    id: 1,
    image: Slider1,
    slideTitle: 'Party Lawn',
    slideContent: `Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.`
  },
  {
    id: 2,
    image: Slider2,
    slideTitle: 'Party Lawn',
    slideContent:
      'Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.'
  }
];

const EventSpaces = ({ setCapacity }) => {
  return (
    <>
      <section className="event-spaces">
        <div className="container">
          <div className="row">
            <div className="offset-0 offset-xl-1 col-12 col-md-11 ">
              <h2 className="section-title">Event spaces</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                  <p className="welcome-note">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error pariatur, similique nemo possimus placeat dolorem quis eius
                    quisquam dolores quia odio dolor illo aliquid, saepe distinctio? Sunt laudantium facere debitis iusto incidunt, sint atque eius
                    rem illum modi?
                  </p>
                </div>
                <div className="col-12 col-lg-4 col-md-12 text-lg-end text-start">
                  <button className="Checkcapacity text-decoration-underline" onClick={() => setCapacity(true)}>
                    Check capacity chart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sider Common */}
        <SliderWithContent Array={Array} />
        <SliderWithContent Array={ArrayTwo} imageRight />
      </section>
    </>
  );
};

EventSpaces.propTypes = {
  setCapacity: PropType.func
};

export default EventSpaces;
