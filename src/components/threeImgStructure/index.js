import PropType from 'prop-types';
import Structureimg01 from '../../assets/img/whiteroom.jpg';
import Structureimg02 from '../../assets/img/hotelview1.webp';
// import Structureimg03 from '../../assets/img/structure-img3.png';

const ThreeImgStructure = ({ Structureimg1, Structureimg2, Structureimg3 }) => {
  return (
    <div className="container p-0">
      <div className="three-structure-img">
        <div className="row">
          <div className="col-12 col-lg-8 structure-wrapper">
            <img src={Structureimg1 ? Structureimg1 : Structureimg02} alt="img" className="img-fluid" />
          </div>
          <div className="col-lg-4 col-12 structure-wrapper">
            <div className="col-12 structure-wrapper-inner">
              <img src={Structureimg2 ? Structureimg1 : Structureimg01} alt="img" className="img-fluid" />
            </div>
            <div className="col-12">
              <img src={Structureimg3 ? Structureimg1 : Structureimg01} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ThreeImgStructure.defaultProps = {
  Structureimg1: '',
  Structureimg2: '',
  Structureimg3: ''
};

ThreeImgStructure.propTypes = {
  Structureimg1: PropType.string,
  Structureimg2: PropType.string,
  Structureimg3: PropType.string
};

export default ThreeImgStructure;
