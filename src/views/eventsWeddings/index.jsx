import clsx from 'clsx';
import { useState } from 'react';
import { Button, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import EventsWeddingsimg from '../../assets/img/EventsWeddings.png';
import CapacityChart from '../../components/CapacityChart';
import InnerMainSection from '../../components/InnerMainSection';
import Events from './events';
import Weddings from './weddings';
// import CafeDining from './CafeDining';
// import CatalanStructure from './CatalanStructure';

const EventsWeddings = () => {
  const [tabsVal, setTabsVal] = useState('1');

  const [capacity, setCapacity] = useState(false);
  console.log('capacity: ', capacity);

  const toggle = (tab) => {
    if (tabsVal !== tab) {
      setTabsVal(tab);
    }
  };

  return (
    <>
      <InnerMainSection ImgSrc={EventsWeddingsimg} />
      <div className="main-content">
        <div className="container">
          <Nav tabs className="ew-tabs">
            <NavItem>
              <Button
                className={clsx(tabsVal === '1' && 'active')}
                onClick={() => {
                  toggle('1');
                }}>
                Weddings
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className={clsx(tabsVal === '2' && 'active')}
                onClick={() => {
                  toggle('2');
                }}>
                Events
              </Button>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={tabsVal}>
          <TabPane tabId="1">
            <Weddings setCapacity={setCapacity} />
          </TabPane>
          <TabPane tabId="2">
            <Events setCapacity={setCapacity} />
          </TabPane>
        </TabContent>
      </div>
      <CapacityChart capacity={capacity} setCapacity={setCapacity} />
    </>
  );
};

export default EventsWeddings;
