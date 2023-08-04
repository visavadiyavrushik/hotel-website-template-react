import PropType from 'prop-types';
import sp1 from '../../assets/img/facilites/sp1.png';
import sp2 from '../../assets/img/facilites/sp2.png';
import sp3 from '../../assets/img/facilites/sp3.png';
import sp4 from '../../assets/img/facilites/sp4.png';

const ImageGallery = ({ img1, img2, img3, img4, layoutOne, title }) => {
  return (
    <div className="container">
      <div className="img-gallary">
        <h2 className="section-title">{title}</h2>
        <div className="row">
          {layoutOne ? (
            ''
          ) : (
            <div className="col-12 col-md-4 image-pad">
              <img src={img1 ? img1 : sp1} alt="img" className="img-fluid" />
            </div>
          )}

          <div className="col-12 col-md-8">
            <div className="row ">
              <div className="col-12 image-vertical">
                <img src={img2 ? img2 : sp2} alt="img" className="img-fluid " />
              </div>
              <div className="col-12 col-md-6 image-pad">
                <img src={img3 ? img3 : sp3} alt="img" className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 image-pad">
                <img src={img4 ? img4 : sp4} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
          {layoutOne ? (
            <div className="col-12 col-md-4 image-pad">
              <img src={img1 ? img1 : sp1} alt="img" className="img-fluid" />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

ImageGallery.defaultProps = {
  img1: '',
  img2: '',
  img3: '',
  img4: '',
  layoutOne: false,
  title: ''
};

ImageGallery.propTypes = {
  img1: PropType.string,
  img2: PropType.string,
  img3: PropType.string,
  img4: PropType.string,
  layoutOne: PropType.bool,
  title: PropType.string
};

export default ImageGallery;
