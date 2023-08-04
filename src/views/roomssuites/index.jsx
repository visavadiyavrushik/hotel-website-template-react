import { useState } from 'react';
import Slider1 from '../../assets/img/Roomsandsuits.png';
import InnerMainSection from '../../components/InnerMainSection';
import PageInfo from '../../components/pageInfo';
import RoomInfoSlider from '../../components/RoomInfoSlider';
import Room from '../../assets/img/room.png';
import Room2 from '../../assets/img/Room2.png';
import Aminities from './Aminities';
import { ReactComponent as AreaSurface } from '../../assets/svg/surface.svg';
import { ReactComponent as People } from '../../assets/svg/people.svg';
import { ReactComponent as Bed } from '../../assets/svg/bed.svg';
import { ReactComponent as AccordianIcon } from '../../assets/svg/accordionIcon.svg';
import LI from '../../components/Li';
import { Watter, Bath, Coffee, Hairdry, Iron, Minibar, Refrigrator, Roomservices, Safety, Tele, Tv, Air } from '../../assets/svg/aminitiesIcon/index';
import CommonButton from '../../components/Button/CommonButton';
import clsx from 'clsx';

const SliderImg = [
  {
    id: 1,
    img: Room
  },
  {
    id: 2,
    img: Room2
  }
];

const Rooms = () => {
  const [open, setOpen] = useState(false);
  // const [openLuxery, setOpenLuxery] = useState(false);

  const Toggle = () => {
    setOpen((prev) => !prev);
  };

  // const ToggleLuxery = () => {
  //   setOpenLuxery((prev) => !prev);
  // };

  return (
    <>
      {/* main */}
      <InnerMainSection ImgSrc={Slider1} />
      {/* Rooms & Suites */}
      <PageInfo
        title="Rooms & Suites"
        p1="Lorem ipsum dolor sit amet consectetur. Et eget in ultricies faucibus proin ipsum justo vestibulum. Libero accumsan enim ut euismod et morbi ac maecenas."
        p2="Lorem ipsum dolor sit amet consectetur. Et eget in ultricies faucibus proin ipsum justo vestibulum. Libero accumsan enim ut euismod et morbi ac maecenas."
      />

      {/* Slider */}
      <section className="insideRoomSlider">
        <div className="container">
          <RoomInfoSlider imgs={SliderImg} title="Rooms" />

          <div className="row room-aminities">
            <div className="col-12 col-lg-5 ps-lg-0">
              <p className="room-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sed. Fugiat nostrum explicabo vitae consectetur velit aliquam dicta consequuntur unde.</p>
            </div>
            <div className="col-12 col-lg-4 offset-0 offset-lg-3">
              <div className="row room-services-wrapper">
                <div className="col col-lg-4 ">
                  <div className="room-services">
                    <AreaSurface />
                    <p>Area surface</p>
                    <span>25 m2</span>
                  </div>
                </div>
                <div className="col col-lg-4 ">
                  <div className="room-services">
                    <People />
                    <p>Capacity</p>
                    <span>2 persons</span>
                  </div>
                </div>
                <div className="col col-lg-4 ">
                  <div className="room-services">
                    <Bed />
                    <p>Bed type</p>
                    <span>Queen size bed</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {open && (
              <div className="roomamenities-section">
                <h4>Room amenities</h4>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <ul className="p-0">
                      <LI title="Bottled Water - Replenished Daily" icon={<Watter />} />
                      <LI title="Air Conditioning" icon={<Air />} />
                      <LI title="Coffee / tea maker" icon={<Coffee />} />
                      <LI title="Room Service" icon={<Roomservices />} />
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="p-0">
                      <LI title="Telephone" icon={<Tele />} />
                      <LI title="Hair Dryer" icon={<Hairdry />} />
                      <LI title="Iron & Ironing Board" icon={<Iron />} />
                      <LI title="Flat screen satellite TV" icon={<Tv />} />
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="p-0">
                      <LI title="Minibar" icon={<Minibar />} />
                      <LI title="Safety Deposit Lockers" icon={<Safety />} />
                      <LI title="Refrigerator" icon={<Refrigrator />} />
                      <LI title="Complimentary toiletries" icon={<Bath />} />
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={clsx('show-more-aminities', open ? 'open' : '')}>
            <div className="sec-left" onClick={() => Toggle()}>
              <p className="">Show room amenities</p>
              <AccordianIcon />
            </div>
            <div>
              <CommonButton className="m-auto read-btn">Read more</CommonButton>
            </div>
          </div>
        </div>
      </section>

      {/* slider 2 */}
      {/* <section className="insideRoomSlider luxury">
        <div className="container">
          <RoomInfoSlider imgs={SliderImg} title="Delux Room" />

          <div className="row room-aminities">
            <div className="col-12 col-lg-5 ps-lg-0">
              <p className="room-info">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse numquam qui ratione incidunt fuga illum minus laboriosam ea reiciendis possimus accusamus officia, sequi nesciunt. Aspernatur assumenda dolores doloribus adipisci?
              </p>
            </div>
            <div className="col-12 col-lg-4 offset-0 offset-lg-3">
              <div className="row room-services-wrapper">
                <div className="col col-lg-4 ">
                  <div className="room-services">
                    <AreaSurface />
                    <p>Area surface</p>
                    <span>25 m2</span>
                  </div>
                </div>
                <div className="col col-lg-4 ">
                  <div className="room-services">
                    <People />
                    <p>Capacity</p>
                    <span>2 persons</span>
                  </div>
                </div>
                <div className="col col-lg-4 ">
                  <div className="room-services">
                    <Bed />
                    <p>Bed type</p>
                    <span>Queen size bed</span>
                  </div>
                </div>
              </div>
            </div>
            {openLuxery && (
              <div className="roomamenities-section">
                <h4>Room amenities</h4>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <ul className="p-0">
                      <LI title="Bottled Water - Replenished Daily" icon={<Watter />} />
                      <LI title="Air Conditioning" icon={<Air />} />
                      <LI title="Coffee / tea maker" icon={<Coffee />} />
                      <LI title="Room Service" icon={<Roomservices />} />
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="p-0">
                      <LI title="Telephone" icon={<Tele />} />
                      <LI title="Hair Dryer" icon={<Hairdry />} />
                      <LI title="Iron & Ironing Board" icon={<Iron />} />
                      <LI title="Flat screen satellite TV" icon={<Tv />} />
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="p-0">
                      <LI title="Minibar" icon={<Minibar />} />
                      <LI title="Safety Deposit Lockers" icon={<Safety />} />
                      <LI title="Refrigerator" icon={<Refrigrator />} />
                      <LI title="Complimentary toiletries" icon={<Bath />} />
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={clsx('show-more-aminities', openLuxery ? 'open' : '')}>
            <div className="sec-left" onClick={() => ToggleLuxery()}>
              <p className="">Show room amenities</p>
              <AccordianIcon />
            </div>
            <div>
              <CommonButton className="m-auto read-btn">Read more</CommonButton>
            </div>
          </div>
        </div>
      </section> */}
      {/* Amenities and Services */}
      <Aminities />

      {/* Other information */}
      <section className="opning-hours other-info">
        <div className="container">
          <h2 className="section-title">Other information</h2>
          <p>Check-in at 14:00, Check-out before 11:00.</p>
          <p>There is a large car park within the resort.</p>
          <p>Accessible to handicapped guests.</p>
        </div>
      </section>
    </>
  );
};

export default Rooms;
