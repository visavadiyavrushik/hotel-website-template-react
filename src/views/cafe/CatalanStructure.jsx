import React from 'react';
import CommonButton from '../../components/Button/CommonButton';
// import Catalan_cafe from '../../assets/img/Catalan_cafe.png';
import LaTerraza from '../../assets/img/LaTerraza.png';
import { useNavigate } from 'react-router';

const CatalanStructure = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="CatalanStructure">
        {/* Catalan structure cafe */}
        <div className="container-fluid p-0">
          <div className="row CatalanStructure-wrapper g-0">
            <div className="bk-right col-11 col-lg-6 left-wrapper m-auto mt-3 mt-lg-auto order-1 order-lg-0">
              <h2 className="section-title">Place One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur minus, eius, at deserunt sunt numquam veniam delectus doloribus labore, quis natus illum recusandae
                necessitatibus. Facere impedit dolores quisquam ex?
              </p>
              <div className="Working-hr">
                <label>Working hours:</label>
                <span>09:00 - 20:00</span>
              </div>
              <CommonButton className="m-auto book-btn" onClick={() => navigate('/cafe-one')}>
                Read more
              </CommonButton>
            </div>
            <div className="CatalanStructure-img-wrapper col-12 col-lg-6 text-center text-lg-end">
              <img src={LaTerraza} alt="HotemImg" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* LaTerraza */}
        <div className="container-fluid p-0">
          <div className="row CatalanStructure-wrapper g-0">
            <div className="CatalanStructure-img-wrapper col-12 col-lg-6 text-center">
              <img src={LaTerraza} alt="HotemImg" className="img-fluid" />
            </div>
            <div className="col-11 col-lg-6 m-auto m-lg-0 mt-3 mt-lg-0 right-wrapper">
              <h2 className="section-title">Place Two</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veniam omnis quasi, fugit excepturi nihil repellendus. Non, iusto maxime aspernatur fuga corrupti numquam, nam
                eaque ducimus at, beatae sint facere.
              </p>
              <div className="Working-hr">
                <label>Working hours:</label>
                <span>09:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalanStructure;
