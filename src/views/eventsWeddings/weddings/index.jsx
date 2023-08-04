import ServicesGallary from '../servicesGallary';
import AboutSection from './AboutSection';
import EventSpaces from './EventSpaces';
import Testimonial from './Testimonial';
import ServicesGallary1 from '../../../assets/img/ServicesGallary1.png';
import ServicesGallary2 from '../../../assets/img/ServicesGallary2.png';
import ServicesGallary3 from '../../../assets/img/ServicesGallary3.png';
import ServicesGallary4 from '../../../assets/img/ServicesGallary4.png';
import ContactUs from '../../../components/Contactus';
import PropType from 'prop-types';

const Data = [
  {
    id: 1,
    image: ServicesGallary1,
    title: 'Catering'
  },
  {
    id: 2,
    image: ServicesGallary2,
    title: 'Decoration service'
  },
  {
    id: 3,
    image: ServicesGallary3,
    title: 'Accomodation'
  },
  {
    id: 4,
    image: ServicesGallary4,
    title: 'Valet parking for the guests'
  }
];

const Weddings = ({ setCapacity }) => {
  return (
    <>
      <AboutSection />
      <EventSpaces setCapacity={setCapacity} />
      <Testimonial />
      {/* Wedding services */}
      <ServicesGallary ArrayData={Data} />
      <ContactUs />
    </>
  );
};

Weddings.propTypes = {
  setCapacity: PropType.func
};

export default Weddings;
