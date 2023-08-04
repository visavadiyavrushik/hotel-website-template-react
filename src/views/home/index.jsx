import MainSlider from '../../components/slider/MainSlider';
import { Welcomeblock } from './Welcomeblock';
import Events from './Events';
import Services from './Services';
import Location from './Location';
import RoomsSlider from './RoomsSlider';
import Cafe from './Cafe';

const Home = () => {
  return (
    <>
      <MainSlider />
      <div className="main-content">
        <Welcomeblock />
        <Events />
        <Cafe />
        <RoomsSlider />
        <Services />
        <Location />
      </div>
    </>
  );
};

export default Home;
