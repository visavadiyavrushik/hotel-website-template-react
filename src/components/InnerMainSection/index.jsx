import { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Slider1 from '../../assets/img/hotelview2.webp';

const InnerMainSection = ({ ImgSrc, title }) => {
  const [scale, setScale] = useState(1.0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scale < 1.3) {
        setScale(scale + 0.001);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [scale]);

  return (
    <section className="inner-image">
      <div
        style={{
          transform: `scale(${scale})`
        }}>
        {title && (
          <div className="slide__content headings">
            <h2>{title}</h2>
          </div>
        )}

        <img src={ImgSrc ? ImgSrc : Slider1} alt="img" className="imgs" />
      </div>
    </section>
  );
};

InnerMainSection.propTypes = {
  ImgSrc: PropType.string.isRequired,
  title: PropType.string
};

export default InnerMainSection;
