import PropType from 'prop-types';
import ServicesGallary from '../servicesGallary';
import AboutSection from './AboutSection';
import EventSpaces from './EventSpaces';
import CorpEvents1 from '../../../assets/img/Corp-events1.png';
import CorpEvents2 from '../../../assets/img/Corp-events2.png';
import CorpEvents3 from '../../../assets/img/Corp-events3.png';

import ServicesGallary1 from '../../../assets/img/ServicesGallary1.png';
import ServicesGallary2 from '../../../assets/img/ServicesGallary2.png';
import ServicesGallary3 from '../../../assets/img/ServicesGallary3.png';
import ServicesGallary4 from '../../../assets/img/ServicesGallary4.png';

import Aminities from './Aminities';
import ContactUs from '../../../components/Contactus';

const Data = [
  {
    id: 1,
    image: CorpEvents1,
    title: 'Business meeting'
  },
  {
    id: 2,
    image: CorpEvents2,
    title: 'Conference'
  },
  {
    id: 3,
    image: CorpEvents3,
    title: 'Other events'
  }
];

const ServicesGallaryData = [
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

const Events = ({ setCapacity }) => {
  return (
    <>
      <AboutSection />
      {/* Corporate events */}
      <ServicesGallary
        ArrayData={Data}
        sectionTitle="Corporate events"
        sectionParagraph={`
      From large departmental gatherings to intimate executive board meetings, conferences, we offer a personal experience and an environment that’s been meticulously organised to ensure a productive day, free from distractions.`}
        CorporateEvents
      />
      <EventSpaces setCapacity={setCapacity} />
      <ServicesGallary
        ArrayData={ServicesGallaryData}
        sectionTitle="Event services"
        sectionParagraph="Lorem ipsum dolor sit amet consectetur. Euismod ut est cras viverra fermentum dui sit ac nam. Suspendisse ultricies nullam amet arcu. Mauris odio duis aliquam a id diam consequat. Tellus molestie tempor tincidunt molestie volutpat. Libero turpis blandit"
      />
      <Aminities />
      <div
        style={{
          background: '#efefef'
        }}>
        <ContactUs Events />
      </div>
    </>
  );
};

Events.propTypes = {
  setCapacity: PropType.func
};

export default Events;
