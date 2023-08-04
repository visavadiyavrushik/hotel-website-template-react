import 'react';
import Slider1 from '../../assets/img/facilities.png';
import ImageGallery from '../../components/ImageGallery';
import InnerMainSection from '../../components/InnerMainSection';
import sp1 from '../../assets/img/facilites/sp1.png';
import sp2 from '../../assets/img/facilites/sp2.png';
import sp3 from '../../assets/img/facilites/sp3.png';
import sp4 from '../../assets/img/facilites/sp4.png';
import spa1 from '../../assets/img/facilites/spa1.png';
import spa2 from '../../assets/img/facilites/spa2.png';
import spa3 from '../../assets/img/facilites/spa3.png';
import spa4 from '../../assets/img/facilites/spa4.png';
import Gym1 from '../../assets/img/facilites/Gym1.png';
import Gym2 from '../../assets/img/facilites/Gym2.png';
import Gym3 from '../../assets/img/facilites/Gym3.png';
import Gym4 from '../../assets/img/facilites/Gym4.png';
import kz1 from '../../assets/img/facilites/kz1.png';
import kz2 from '../../assets/img/facilites/kz2.png';
import kz3 from '../../assets/img/facilites/kz3.png';
import kz4 from '../../assets/img/facilites/kz4.png';
import LI from '../../components/Li';
import PageInfo from '../../components/pageInfo';

const Info = (p1, p2, p3, p4) => {
  return (
    <>
      <div className="container facilities-info">
        <div className="row">
          <div className="col-12 col-md-5">
            <p className="info">{p1}</p>
          </div>
          <div className="col-12 col-md-3 offset-0 offset-md-4 size">
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Facilities = () => {
  return (
    <>
      <InnerMainSection ImgSrc={Slider1} />
      <PageInfo
        title="Facilities"
        p1="Lorem ipsum dolor sit amet consectetur. Et eget in ultricies faucibus proin ipsum justo vestibulum. Libero accumsan enim ut euismod et morbi ac maecenas."
        p2="Lorem ipsum dolor sit amet consectetur. Et eget in ultricies faucibus proin ipsum justo vestibulum. Libero accumsan enim ut euismod et morbi ac maecenas."
      />
      <section className="facilities-section">
        <div>
          <ImageGallery img1={sp1} img2={sp2} img3={sp3} img4={sp4} title="Swimming pool" />
          {Info(
            'Lorem ipsum dolor sit amet consectetur. Eget magna egestas elit consectetur odio donec. Iaculis quam fusce sit et.',
            'Sized 200 m2 ',
            'Pool depth 1,8 m'
          )}
        </div>
        <div>
          <ImageGallery img1={spa1} img2={spa2} img3={spa3} img4={spa4} title="Spa" layoutOne />
          <div className="container facilities-points">
            <div className="row">
              <div className="col-12 col-md-4">
                <ul>
                  <LI title="Point one" />

                  <LI title="Point two" />

                  <LI title="Point three" />
                </ul>
              </div>
              <div className="col-12 col-md-4 ">
                <ul>
                  <LI title="Point Four" />

                  <LI title="Point five" />

                  <LI title="Point six" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ImageGallery img1={Gym1} img2={Gym2} img3={Gym3} img4={Gym4} title="Gym" />
          <div className="container facilities-points">
            <div className="row">
              <div className="col-12 ">
                <ul>
                  <LI title="Point one" />

                  <LI title="Point two" />

                  <LI title="Point three" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ImageGallery img1={kz1} img2={kz2} img3={kz3} img4={kz4} title="Kids zone" layoutOne />
          {Info(
            'Lorem ipsum dolor sit amet consectetur. Eget magna egestas elit consectetur odio donec. Iaculis quam fusce sit et.',
            'Sized 300 m2',
            '2 outdoor playgrounds',
            '2 indoor playrooms'
          )}
        </div>
      </section>

      <section className="opning-hours">
        <div className="container">
          <h2 className="section-title">Opening hours</h2>
          <p>Reception: 09:30 - 20:00</p>
          <p>Swimming pool & Spa: 09:00 - 20:00</p>
          <p>Gym center: 08:00 - 20:00</p>
          <p>Kids zone: 08:00 - 20:00</p>
          <p>Accessible to handicapped guests.</p>
        </div>
      </section>
    </>
  );
};

export default Facilities;
