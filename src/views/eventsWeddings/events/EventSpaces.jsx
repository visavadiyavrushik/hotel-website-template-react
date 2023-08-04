import React from 'react';
import PropType from 'prop-types';
import SliderWithContent from '../../../components/slideWithContent/index';
import Slider1 from '../../../assets/img/EventsSliderImgs1.png';
import Slider2 from '../../../assets/img/EventsSliderImgs2.png';
// import Slider3 from '../../../assets/img/EventsSliderImgs3.png';
// import Slider3 from '../../../assets/img/EventsSliderImgs3.png';
import Slider3 from '../../../assets/img/EventsSliderImgs3.png';

const ConferenceRoom = [
  {
    id: 1,
    image: Slider1,
    slideTitle: 'Conference room',
    slideContent:
      'Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.',
    points: 'Up to 200 guests'
  },
  {
    id: 2,
    image: Slider2,
    slideTitle: 'Conference room',
    slideContent:
      'Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.',
    points: 'Up to 200 guests'
  }
];

const PartyLawn = [
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

const NookLawn = [
  {
    id: 1,
    image: Slider3,
    slideTitle: 'Nook Party Lawn',
    slideContent: `Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.`
  },
  {
    id: 2,
    image: Slider3,
    slideTitle: 'Nook Party Lawn',
    slideContent:
      'Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus. Lorem ipsum dolor sit amet consectetur. Id sit dictum blandit lectus senectus.  Id sit dictum blandit lectus senectus.'
  }
];

const EventSpaces = ({ setCapacity }) => {
  return (
    <>
      <section className="event-spaces-event">
        <div className="container">
          <div className="row">
            <div className="offset-0 offset-lg-1 col-12 col-lg-11  ">
              <h2 className="section-title">Event spaces</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                  <p className="welcome-note">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum nobis dignissimos quaerat, totam ex, ea ipsa
                    ipsum ad sit eligendi, corrupti optio voluptatem veritatis odit. Rerum quidem soluta ea corrupti, debitis sed minima vel quasi
                    tempore iusto natus quam!
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
        <SliderWithContent Array={ConferenceRoom} />
        <SliderWithContent Array={PartyLawn} imageRight />
        <SliderWithContent Array={NookLawn} />
      </section>
    </>
  );
};

EventSpaces.propTypes = {
  setCapacity: PropType.func
};

export default EventSpaces;
