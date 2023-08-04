import 'react';
import Slider1 from '../../assets/img/hotelview3.webp';
import InnerMainSection from '../../components/InnerMainSection';
import Abouthotel from './Abouthotel';
import HeritageAdalajSection from './Heritage-adalaj-section';
import HeritageUniquestructure from './HeritageUniquestructure';
import HotelService from './HotelService';
// import HotelVideo from './HotelVideo';

const About = () => {
  return (
    <>
      <InnerMainSection ImgSrc={Slider1} />
      <div className="main-content">
        <Abouthotel />
        <HeritageAdalajSection />
        <HeritageUniquestructure />
        {/* <HotelVideo /> */}
        <HotelService />
      </div>
    </>
  );
};

export default About;
