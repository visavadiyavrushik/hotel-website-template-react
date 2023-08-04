import React from 'react';
// import PangatRestrant from '../../assets/img/PangatRestrant-large.png';
// import StructureTwo from '../../assets/img/structure-two.png';
// import FtructureThree from '../../assets/img/structure-three.png';
// import FtructureFour from '../../assets/img/structure-four.png';

// import Structureimg1 from '../../assets/img/structure-img1.png';
// import structureimg2 from '../../assets/img/structure-img2.png';
// import structureimg3 from '../../assets/img/structure-img3.png';
import ThreeImgStructure from '../../components/threeImgStructure';

const HeritageUniquestructure = () => {
  return (
    <>
      <section className="heritage-Unique-structure">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9 m-auto">
              <h2 className="structure-quotes">
                <svg width="70" height="52" viewBox="0 0 70 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M68.172 0C55.176 0.912002 38.304 11.628 38.304 31.008C38.304 42.864 44.46 51.072 54.492 51.072C61.788 51.072 68.172 45.144 68.172 37.62C68.172 29.868 62.7 24.852 57.228 24.852C54.72 24.852 51.756 25.764 50.16 26.676C49.248 27.36 48.564 27.36 48.564 26.22C48.564 16.188 57.456 7.752 69.312 5.69999L68.172 0ZM30.096 0C16.872 0.912002 0 11.628 0 31.008C0 42.864 6.156 51.072 16.188 51.072C23.484 51.072 29.868 44.916 30.096 37.62C30.096 29.868 24.624 24.852 18.924 24.852C16.644 25.08 13.68 25.764 11.856 26.904C11.172 27.588 10.26 27.588 10.26 26.22C10.032 16.416 19.38 7.97999 31.236 5.69999L30.096 0Z"
                    fill="#284c75"
                  />
                </svg>
                CAFE is like trying to cure obesity by requiring clothing manufacturers to make smaller sizes.
              </h2>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <ThreeImgStructure />
        </div>
        {/* <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="Unique-shell">
              <div className="row">
                <div className="col-12 col-lg-7 col-xl-7 structure-img-Four">
                  <img src={FtructureFour} alt="img" className="img-fluid img-Four" />
                  <div className="structure-img-Three">
                    <img src={FtructureThree} alt="img" className="img-fluid" />
                  </div>
                </div>

                <div className="col-12 col-lg-5 col-xl-5">
                  <div className="Unique-info">
                    <h1>Title</h1>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores culpa omnis tempora. Deleniti nulla voluptas obcaecati
                      deserunt eum assumenda nam aliquam debitis, vero pariatur aperiam consequuntur praesentium voluptates mollitia tempora cum
                      recusandae ad culpa? Dolores officia vitae odio exercitationem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default HeritageUniquestructure;
